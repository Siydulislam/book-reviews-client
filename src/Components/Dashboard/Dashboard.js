import React from 'react';
import { Area, AreaChart, Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartsData from '../../hooks/useChartsData';
import './Dashboard.css';

const Dashboard = () => {
    const [chartsData] = useChartsData();
    console.log(chartsData)
    return (
        <div className="dashboard-container">
            <div>
                <h3 className="chart-title">Monthly Wise Sell</h3>
                <LineChart width={500} height={400} data={chartsData}>
                    <Line dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div>
                <h3 className="chart-title">Investment vs Revenue</h3>
                <AreaChart
                    width={500}
                    height={400}
                    data={chartsData}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </AreaChart>
            </div>
            <div>
                <h3 className="chart-title">Investment vs Revenue</h3>
                <BarChart width={500} height={400} data={chartsData}>
                    <Bar dataKey="sell" fill="#8884d8"></Bar>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </BarChart>
            </div>
            <div>
                <h3 className="chart-title">Investment vs Revenue</h3>
                <PieChart width={500} height={400}>
                    <Pie data={chartsData} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={chartsData} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;