import React, { useEffect, useState } from 'react';
import { getWeeklySummary } from '../api/api';
import SummaryCard from "../components/SummaryCard";
import Chart from "../components/Chart";
import Logout from '../components/Logout';
import AddLogs from '../components/AddLogs';

const Dashboard = () => {
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getWeeklySummary();
                setSummary(res.data);
                console.log("res.data is ->", res.data);
            }
            catch (err) {
                console.error("Error fetching summary", err);
            }
        };
        fetchData();
    }, []);

    if (!summary) return <p>Loading summary...</p>

    return (
        
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Weekly Study Summary</h2>
            <Logout />
            <AddLogs />
            <SummaryCard totalTime={summary.totalTime} subjectWise={summary.subjectWise} />
            <Chart data={summary.subjectWise} />
        </div>
    );
};

export default Dashboard
