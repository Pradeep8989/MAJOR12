function Alerts({ alerts }) {

    return (

        <div>

            <h2 className="text-2xl font-bold mb-5">
                System Alerts
            </h2>

            <div className="space-y-4">

                {alerts.map((alert, index) => (

                    <div
                        key={index}
                        className="
                            bg-red-500/10
                            border
                            border-red-500/30
                            text-red-300
                            p-5
                            rounded-2xl
                            backdrop-blur-lg
                        "
                    >

                        {alert}

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Alerts;