const Energy = require('../models/energyModel');

exports.saveData = async (req, res) => {
    const newData = new Energy(req.body);
    await newData.save();
    res.send("Data saved to database");
};

exports.getData = async (req, res) => {
    const data = await Energy.find();
    res.json(data);
};

// insights
exports.getInsights = async (req, res) => {
    const data = await Energy.find();

    if (data.length === 0) {
        return res.json({ message: "No data available" });
    }

    // Total power
   const totalPower = data.reduce((sum, item) => sum + Number(item.power), 0);

    // Highest consuming device
    let highest = data.find(
    item => item.device && item.power
);
    data.forEach(item => {
        if (Number(item.power) > Number(highest.power)) {
            highest = item;
        }
    });

    // Device count
    const deviceCount = data.length;

    // Latest reading
    const latest = data[data.length - 1];

    res.json({
        totalPower,
        highestDevice: highest.device,
        highestPower: highest.power,
        deviceCount,
        latestReading: latest
    });
};

exports.getAlerts = async (req, res) => {

    const data = await Energy.find();

    let alerts = [];

    // Total power
    const totalPower = data.reduce((sum, item) => {
        return sum + Number(item.power || 0);
    }, 0);

    // Alert if total power too high
    if (totalPower > 1500) {
        alerts.push("⚠️ Total power usage exceeded safe limit");
    }

    // Check each device
    data.forEach(item => {

        const power = Number(item.power);

        if (power > 1000) {
            alerts.push(`⚠️ ${item.device} is consuming very high power`);
        }

        if (power < 0) {
            alerts.push(`⚠️ Invalid power reading from ${item.device}`);
        }

    });

    // No alerts
    if (alerts.length === 0) {
        alerts.push("✅ System running normally");
    }

    res.json({
        totalAlerts: alerts.length,
        alerts
    });

};

exports.getCostAnalysis = async (req, res) => {

    const data = await Energy.find();

    let totalUnits = 0;

    data.forEach(item => {

        const power = Number(item.power || 0);

        // Convert watts to kWh
        totalUnits += power / 1000;

    });

    const ratePerUnit = 8;

    const estimatedCost = totalUnits * ratePerUnit;

    res.json({
        totalUnits: totalUnits.toFixed(2),
        ratePerUnit,
        estimatedCost: estimatedCost.toFixed(2)
    });

};
