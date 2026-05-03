function SummaryCards({ insights }) {

    const cards = [
        {
            title: "Total Power",
            value: `${insights.totalPower} W`,
            icon: "⚡"
        },
        {
            title: "Highest Device",
            value: insights.highestDevice,
            icon: "🔥"
        },
        {
            title: "Highest Power",
            value: `${insights.highestPower} W`,
            icon: "📈"
        },
        {
            title: "Devices Active",
            value: insights.deviceCount,
            icon: "🖥️"
        }
    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {cards.map((card, index) => (

                <div
                    key={index}
                    className="
                        bg-card
                        border
                        border-border
                        rounded-2xl
                        p-6
                        shadow-lg
                        hover:scale-105
                        transition
                        duration-300
                    "
                >

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-400 text-sm">
                                {card.title}
                            </p>

                            <h2 className="text-3xl font-bold mt-3">
                                {card.value}
                            </h2>

                        </div>

                        <div className="text-4xl">
                            {card.icon}
                        </div>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default SummaryCards;