import db from "../../../lib/db";

export default function handler(req, res) {
    // Add simple authentication
    // if (req.headers.authorization !== `Bearer ${process.env.NEXT_PUBLIC_ADMIN_SECRET}`) {
    //     return res.status(401).json({ error: "Unauthorized" });
    // }

    try {
        // Get total views
        const totalViews = db.prepare("SELECT COUNT(*) as count FROM page_views").get().count;

        // Get unique visitors (by IP)
        const uniqueVisitors = db.prepare("SELECT COUNT(DISTINCT ip_address) as count FROM page_views").get().count;

        // Get top country
        const topCountryRow = db
            .prepare(
                `
                    SELECT country, COUNT(*) as count 
                    FROM page_views 
                    GROUP BY country 
                    ORDER BY count DESC 
                    LIMIT 1
                `
            )
            .get();

        const topCountry = topCountryRow ? topCountryRow.country : null;

        // Get device distribution
        const deviceStats = db
            .prepare(
                `
                    SELECT device_type, COUNT(*) as count 
                    FROM page_views 
                    GROUP BY device_type
                `
            )
            .all();

        const deviceDistribution = {
            mobile: Math.round(((deviceStats.find((d) => d.device_type === "mobile")?.count || 0) / totalViews) * 100),
            desktop: Math.round(((deviceStats.find((d) => d.device_type === "desktop")?.count || 0) / totalViews) * 100),
        };

        // Get recent views
        const recentViews = db
            .prepare(
                `
                    SELECT path, country, device_type, referrer, timestamp 
                    FROM page_views 
                    ORDER BY timestamp DESC 
                    LIMIT 50
                `
            )
            .all();

        res.status(200).json({
            stats: {
                totalViews,
                uniqueVisitors,
                topCountry,
                deviceDistribution,
            },
            recentViews,
        });
    } catch (error) {
        console.error("Analytics error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
