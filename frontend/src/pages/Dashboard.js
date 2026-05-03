import { useEffect, useState } from 'react';

import API from '../services/api';

import SummaryCards from '../components/SummaryCards';
import Alerts from '../components/Alerts';
import CostCard from '../components/CostCard';
import Graph from '../components/Graph';

function Dashboard() {

    const [insights, setInsights] = useState(null);
    const [alerts, setAlerts] = useState([]);
    const [cost, setCost] = useState(null);
    const [energyData, setEnergyData] = useState([]);

    useEffect(() => {

        const fetchInsights = async () => {
            try {
                const response = await API.get('/insights');
                setInsights(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchAlerts = async () => {
            try {
                const response = await API.get('/alerts');
                setAlerts(response.data.alerts);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchCost = async () => {
            try {
                const response = await API.get('/cost');
                setCost(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchData = async () => {
            try {
                const response = await API.get('/data');
                setEnergyData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchInsights();
fetchAlerts();
fetchCost();
fetchData();

const interval = setInterval(() => {

    fetchInsights();
    fetchAlerts();
    fetchCost();
    fetchData();

}, 5000);

return () => clearInterval(interval);

    }, []);

    if (!insights) {
        return (
            <div className="text-white p-10">
                Loading Dashboard...
            </div>
        );
    }

    return (

        <div className="flex min-h-screen bg-dark text-white">

            {/* SIDEBAR */}

            <div className="w-64 bg-black border-r border-border p-6">

                <h1 className="text-2xl font-bold text-primary">
                    EnergyAI
                </h1>

                <div className="mt-10 space-y-4">

                    <div className="bg-primary/20 p-3 rounded-xl">
                        Dashboard
                    </div>

                    <div className="text-gray-400">
                        Analytics
                    </div>

                    <div className="text-gray-400">
                        Devices
                    </div>

                    <div className="text-gray-400">
                        Reports
                    </div>

                    <div className="text-gray-400">
                        Settings
                    </div>

                </div>

            </div>

            {/* MAIN CONTENT */}

            <div className="flex-1 p-8">

                {/* HEADER */}

                <div className="flex justify-between items-center mb-10">

                    <div>

                        <h1 className="text-4xl font-bold">
                            Smart Energy Dashboard
                        </h1>

                        <p className="text-gray-400 mt-2">
                            AI-powered energy monitoring platform
                        </p>

                    </div>

                    <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
                        ● System Active
                    </div>

                </div>

                {/* SUMMARY CARDS */}

                <SummaryCards insights={insights} />

                {/* GRID SECTION */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

                    <div className="lg:col-span-2">
                        {energyData.length > 0 &&
                            <Graph data={energyData} />
                        }
                    </div>

                    <div>
                        {cost &&
                            <CostCard cost={cost} />
                        }
                    </div>

                </div>

                {/* ALERTS */}

                <div className="mt-8">
                    <Alerts alerts={alerts} />
                </div>

            </div>

        </div>

    );

}

export default Dashboard;