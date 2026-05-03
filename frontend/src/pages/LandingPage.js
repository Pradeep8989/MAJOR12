import { Link } from 'react-router-dom';

function LandingPage() {

    return (

        <div className="min-h-screen bg-dark text-white">

            {/* NAVBAR */}

            <nav className="flex justify-between items-center px-10 py-6 border-b border-border">

                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-xl font-bold">
                        ⚡
                    </div>

                    <h1 className="text-2xl font-bold">
                        WattWise
                    </h1>

                </div>

                <div className="flex gap-6 items-center">

                    <a href="#features" className="text-gray-400 hover:text-white">
                        Features
                    </a>

                    <a href="#about" className="text-gray-400 hover:text-white">
                        About
                    </a>

                    <Link
                        to="/auth"
                        className="bg-primary px-5 py-2 rounded-xl font-semibold hover:opacity-90"
                    >
                        Login
                    </Link>

                </div>

            </nav>

            {/* HERO SECTION */}

            <section className="flex flex-col items-center justify-center text-center px-6 py-32">

                <div className="bg-primary/20 text-primary px-5 py-2 rounded-full mb-8">
                    AI-Powered Energy Intelligence
                </div>

                <h1 className="text-6xl font-bold max-w-4xl leading-tight">

                    Monitor, Analyze & Optimize
                    Your Energy Usage
                    In Real Time

                </h1>

                <p className="text-gray-400 text-xl max-w-2xl mt-8 leading-relaxed">

                    WattWise helps homes and businesses
                    reduce electricity waste using
                    real-time monitoring, AI insights,
                    and predictive analytics.

                </p>

                <div className="flex gap-5 mt-12">

                    <Link
                        to="/auth"
                        className="bg-primary px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
                    >
                        Get Started
                    </Link>

                    <button className="border border-border px-8 py-4 rounded-2xl text-lg hover:bg-white/5">
                        Live Demo
                    </button>

                </div>

            </section>

            {/* FEATURES */}

            <section
                id="features"
                className="px-10 py-24"
            >

                <h2 className="text-4xl font-bold text-center mb-16">
                    Platform Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                    <div className="bg-card border border-border rounded-2xl p-8">
                        <div className="text-5xl mb-5">⚡</div>
                        <h3 className="text-2xl font-bold mb-4">
                            Live Monitoring
                        </h3>
                        <p className="text-gray-400">
                            Track real-time energy consumption from connected devices.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-8">
                        <div className="text-5xl mb-5">📈</div>
                        <h3 className="text-2xl font-bold mb-4">
                            Smart Analytics
                        </h3>
                        <p className="text-gray-400">
                            Visualize usage patterns using modern analytics dashboards.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-8">
                        <div className="text-5xl mb-5">🚨</div>
                        <h3 className="text-2xl font-bold mb-4">
                            Intelligent Alerts
                        </h3>
                        <p className="text-gray-400">
                            Detect abnormal power usage and prevent wastage instantly.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-8">
                        <div className="text-5xl mb-5">🤖</div>
                        <h3 className="text-2xl font-bold mb-4">
                            AI Recommendations
                        </h3>
                        <p className="text-gray-400">
                            Receive optimization suggestions powered by smart analysis.
                        </p>
                    </div>

                </div>

            </section>

            {/* FOOTER */}

            <footer className="border-t border-border py-8 text-center text-gray-500">

                © 2026 WattWise. All rights reserved.

            </footer>

        </div>

    );

}

export default LandingPage;