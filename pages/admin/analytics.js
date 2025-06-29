import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/Admin.module.css";
import { useRouter } from "next/router";

export default function AnalyticsDashboard() {
    const [stats, setStats] = useState(null);
    const [pageViews, setPageViews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/analytics")
            .then((res) => res.json())
            .then((data) => {
                setStats(data.stats);
                setPageViews(data.recentViews);
                setIsLoading(false);
            });
    }, []);

    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const password = prompt("Enter admin password:");
        console.log(password, process.env.NEXT_PUBLIC_ADMIN_SECRET);

        if (password === process.env.NEXT_PUBLIC_ADMIN_SECRET) {
            setAuthenticated(true);
        } else {
            router.push("/");
        }
    }, []);

    if (!authenticated)
        return (
            <Layout>
                <div>Unauthorized</div>
            </Layout>
        );

    if (isLoading)
        return (
            <Layout>
                <div>Loading...</div>
            </Layout>
        );

    return (
        <Layout>
            <div className={styles.adminContainer}>
                <h1>Website Analytics</h1>

                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <h3>Total Views</h3>
                        <p>{stats?.totalViews}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Unique Visitors</h3>
                        <p>{stats?.uniqueVisitors}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Top Country</h3>
                        <p>{stats?.topCountry}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Device Distribution</h3>
                        <p>Mobile: {stats?.deviceDistribution.mobile}%</p>
                        <p>Desktop: {stats?.deviceDistribution.desktop}%</p>
                    </div>
                </div>

                <h2>Recent Page Views</h2>
                <table className={styles.viewsTable}>
                    <thead>
                        <tr>
                            <th>Path</th>
                            <th>Country</th>
                            <th>Device</th>
                            <th>Referrer</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageViews?.map((view, index) => (
                            <tr key={index}>
                                <td>{view.path}</td>
                                <td>{view.country}</td>
                                <td>{view.device_type}</td>
                                <td>{view.referrer}</td>
                                <td>{new Date(view.timestamp).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
