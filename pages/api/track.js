import db from '../../lib/db';
import geoip from 'geoip-lite'; // npm install geoip-lite
import UAParser from 'ua-parser-js'; // npm install ua-parser-js

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { path } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);
    const parser = new UAParser(req.headers['user-agent']);
    const ua = parser.getResult();

    db.prepare(`
      INSERT INTO page_views (
        path, 
        referrer, 
        user_agent, 
        ip_address, 
        country,
        device_type
      ) VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      path,
      req.body.referrer || 'direct',
      req.headers['user-agent'],
      ip,
      geo?.country || 'Unknown',
      ua.device.type || 'desktop'
    );

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}