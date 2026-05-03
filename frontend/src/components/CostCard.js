function CostCard({ cost }) {

    return (

        <div
            className="
                bg-card
                border
                border-border
                rounded-2xl
                p-6
                shadow-lg
                h-full
            "
        >

            <h2 className="text-2xl font-bold mb-6">
                Cost Analysis
            </h2>

            <div className="space-y-5">

                <div>

                    <p className="text-gray-400 text-sm">
                        Total Units
                    </p>

                    <h3 className="text-3xl font-bold mt-2">
                        {cost.totalUnits} kWh
                    </h3>

                </div>

                <div>

                    <p className="text-gray-400 text-sm">
                        Rate Per Unit
                    </p>

                    <h3 className="text-2xl font-semibold mt-2">
                        ₹{cost.ratePerUnit}
                    </h3>

                </div>

                <div>

                    <p className="text-gray-400 text-sm">
                        Estimated Cost
                    </p>

                    <h3 className="text-4xl font-bold text-primary mt-2">
                        ₹{cost.estimatedCost}
                    </h3>

                </div>

            </div>

        </div>

    );

}

export default CostCard;