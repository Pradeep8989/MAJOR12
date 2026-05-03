import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
    FaBolt,
    FaChartLine,
    FaShieldAlt,
    FaExclamationTriangle
} from 'react-icons/fa';

function AuthPage() {

    const navigate = useNavigate();

    const [mode, setMode] = useState('login');

    // LOGIN STATES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // SIGNUP STATES
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    // =========================
    // LOGIN FUNCTION
    // =========================

    const handleLogin = async () => {

        try {

            const response = await axios.post(

                'http://localhost:5000/auth/login',

                {
                    email,
                    password
                }

            );

            // SAVE TOKEN

            localStorage.setItem(
                'token',
                response.data.token
            );

            // SAVE USER

            localStorage.setItem(
                'user',
                JSON.stringify(response.data.user)
            );

            alert('Login Successful');

            navigate('/dashboard');

        } catch (error) {

            alert(
                error.response?.data?.message ||
                'Login Failed'
            );

        }

    };

    // =========================
    // SIGNUP FUNCTION
    // =========================

    const handleSignup = async () => {

        try {

            await axios.post(

                'http://localhost:5000/auth/signup',

                {
                    name: signupName,
                    email: signupEmail,
                    password: signupPassword
                }

            );

            alert('Account Created Successfully');

            setMode('login');

        } catch (error) {

            alert(
                error.response?.data?.message ||
                'Signup Failed'
            );

        }

    };

    return (

        <div className="min-h-screen flex bg-dark text-white">

            {/* LEFT SIDE */}

            <div className="
                hidden
                lg:flex
                w-1/2
                relative
                overflow-hidden
                flex-col
                justify-between
                p-16
                bg-gradient-to-br
                from-[#0f172a]
                via-[#111827]
                to-[#1e1b4b]
            ">

                {/* GLOW */}

                <div className="
                    absolute
                    w-96
                    h-96
                    bg-primary/30
                    rounded-full
                    blur-3xl
                    top-[-100px]
                    left-[-100px]
                    animate-pulse
                " />

                <div className="
                    absolute
                    bottom-[-120px]
                    right-[-120px]
                    w-[400px]
                    h-[400px]
                    bg-blue-500/20
                    rounded-full
                    blur-3xl
                " />

                {/* LOGO */}

                <div className="relative z-10">

                    <div className="flex items-center gap-4">

                        <div className="
                            w-16
                            h-16
                            rounded-2xl
                            bg-primary
                            flex
                            items-center
                            justify-center
                            text-3xl
                            shadow-lg
                        ">
                            ⚡
                        </div>

                        <div>

                            <h1 className="text-4xl font-bold">
                                WattWise
                            </h1>

                            <p className="text-gray-400 mt-1">
                                Smart Energy Intelligence
                            </p>

                        </div>

                    </div>

                </div>

                {/* CENTER */}

                <div className="relative z-10">

                    <h1 className="
                        text-6xl
                        font-bold
                        leading-tight
                        max-w-2xl
                    ">

                        Monitor.
                        Analyze.
                        Optimize.

                    </h1>

                    <p className="
                        text-xl
                        text-gray-400
                        mt-8
                        max-w-xl
                        leading-relaxed
                    ">

                        AI-powered platform for intelligent
                        energy monitoring, live analytics,
                        cost optimization, and real-time alerts.

                    </p>

                    {/* CARDS */}

                    <div className="grid grid-cols-2 gap-5 mt-14">

                        <div className="
                            bg-white/5
                            border
                            border-white/10
                            backdrop-blur-lg
                            rounded-2xl
                            p-5
                        ">

                            <FaBolt className="text-yellow-400 text-3xl mb-4" />

                            <h3 className="text-xl font-semibold">
                                Live Monitoring
                            </h3>

                            <p className="text-gray-400 mt-2 text-sm">
                                Real-time power tracking
                            </p>

                        </div>

                        <div className="
                            bg-white/5
                            border
                            border-white/10
                            backdrop-blur-lg
                            rounded-2xl
                            p-5
                        ">

                            <FaChartLine className="text-green-400 text-3xl mb-4" />

                            <h3 className="text-xl font-semibold">
                                Smart Analytics
                            </h3>

                            <p className="text-gray-400 mt-2 text-sm">
                                Advanced energy insights
                            </p>

                        </div>

                        <div className="
                            bg-white/5
                            border
                            border-white/10
                            backdrop-blur-lg
                            rounded-2xl
                            p-5
                        ">

                            <FaShieldAlt className="text-blue-400 text-3xl mb-4" />

                            <h3 className="text-xl font-semibold">
                                Secure Platform
                            </h3>

                            <p className="text-gray-400 mt-2 text-sm">
                                Protected user data
                            </p>

                        </div>

                        <div className="
                            bg-white/5
                            border
                            border-white/10
                            backdrop-blur-lg
                            rounded-2xl
                            p-5
                        ">

                            <FaExclamationTriangle className="text-red-400 text-3xl mb-4" />

                            <h3 className="text-xl font-semibold">
                                Smart Alerts
                            </h3>

                            <p className="text-gray-400 mt-2 text-sm">
                                Instant anomaly detection
                            </p>

                        </div>

                    </div>

                </div>

                {/* FOOTER */}

                <div className="relative z-10 text-gray-500">

                    © 2026 WattWise. All rights reserved.

                </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="
                w-full
                lg:w-1/2
                flex
                items-center
                justify-center
                p-6
            ">

                <div className="
                    w-full
                    max-w-md
                    bg-card
                    border
                    border-border
                    rounded-3xl
                    p-10
                    shadow-2xl
                ">

                    {/* MOBILE LOGO */}

                    <div className="lg:hidden text-center mb-10">

                        <div className="
                            w-16
                            h-16
                            mx-auto
                            rounded-2xl
                            bg-primary
                            flex
                            items-center
                            justify-center
                            text-3xl
                        ">
                            ⚡
                        </div>

                        <h1 className="text-4xl font-bold mt-5">
                            WattWise
                        </h1>

                    </div>

                    {/* TOGGLE */}

                    {mode !== 'forgot' && (

                        <div className="
                            flex
                            bg-dark
                            rounded-2xl
                            p-2
                            mb-8
                        ">

                            <button
                                onClick={() => setMode('login')}
                                className={`
                                    flex-1
                                    py-3
                                    rounded-xl
                                    font-semibold
                                    transition
                                    ${mode === 'login'
                                        ? 'bg-primary text-white'
                                        : 'text-gray-400'}
                                `}
                            >
                                Login
                            </button>

                            <button
                                onClick={() => setMode('signup')}
                                className={`
                                    flex-1
                                    py-3
                                    rounded-xl
                                    font-semibold
                                    transition
                                    ${mode === 'signup'
                                        ? 'bg-primary text-white'
                                        : 'text-gray-400'}
                                `}
                            >
                                Signup
                            </button>

                        </div>

                    )}

                    {/* LOGIN */}

                    {mode === 'login' && (

                        <div>

                            <h2 className="text-3xl font-bold mb-2">
                                Welcome Back
                            </h2>

                            <p className="text-gray-400 mb-8">
                                Login to your WattWise account
                            </p>

                            <div className="space-y-5">

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="
                                        w-full
                                        bg-dark
                                        border
                                        border-border
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-primary
                                    "
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="
                                        w-full
                                        bg-dark
                                        border
                                        border-border
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-primary
                                    "
                                />

                                <button
                                    onClick={handleLogin}
                                    className="
                                        w-full
                                        bg-primary
                                        py-4
                                        rounded-xl
                                        font-bold
                                        text-lg
                                        hover:opacity-90
                                        transition
                                    "
                                >
                                    Login
                                </button>

                            </div>

                            <button
                                onClick={() => setMode('forgot')}
                                className="
                                    text-primary
                                    mt-6
                                    text-sm
                                "
                            >
                                Forgot Password?
                            </button>

                        </div>

                    )}

                    {/* SIGNUP */}

                    {mode === 'signup' && (

                        <div>

                            <h2 className="text-3xl font-bold mb-2">
                                Create Account
                            </h2>

                            <p className="text-gray-400 mb-8">
                                Start using WattWise today
                            </p>

                            <div className="space-y-5">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={signupName}
                                    onChange={(e) => setSignupName(e.target.value)}
                                    className="
                                        w-full
                                        bg-dark
                                        border
                                        border-border
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-primary
                                    "
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={signupEmail}
                                    onChange={(e) => setSignupEmail(e.target.value)}
                                    className="
                                        w-full
                                        bg-dark
                                        border
                                        border-border
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-primary
                                    "
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={signupPassword}
                                    onChange={(e) => setSignupPassword(e.target.value)}
                                    className="
                                        w-full
                                        bg-dark
                                        border
                                        border-border
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-primary
                                    "
                                />

                                <button
                                    onClick={handleSignup}
                                    className="
                                        w-full
                                        bg-primary
                                        py-4
                                        rounded-xl
                                        font-bold
                                        text-lg
                                        hover:opacity-90
                                        transition
                                    "
                                >
                                    Create Account
                                </button>

                            </div>

                        </div>

                    )}

                    {/* FORGOT */}

                    {mode === 'forgot' && (

                        <div>

                            <h2 className="text-3xl font-bold mb-2">
                                Reset Password
                            </h2>

                            <p className="text-gray-400 mb-8">
                                Enter your email to continue
                            </p>

                            <div className="space-y-5">

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="
                                        w-full
                                        bg-dark
                                        border
                                        border-border
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-primary
                                    "
                                />

                                <button
                                    className="
                                        w-full
                                        bg-primary
                                        py-4
                                        rounded-xl
                                        font-bold
                                        text-lg
                                        hover:opacity-90
                                        transition
                                    "
                                >
                                    Send Reset Link
                                </button>

                            </div>

                            <button
                                onClick={() => setMode('login')}
                                className="
                                    text-primary
                                    mt-6
                                    text-sm
                                "
                            >
                                Back to Login
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}

export default AuthPage;