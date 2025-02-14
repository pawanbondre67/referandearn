const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createReferral = async (req, res) => {
    try {
        const { referrer_name, referrer_email, referee_name, referee_email, course } = req.body;
        const userId = req.user.userId;
        console.log('userId', userId);

        if (!referrer_name || !referrer_email || !referee_name || !referee_email || !course) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Save referral in database
        const referral = await prisma.referral.create({
            data: { referrer_name, referrer_email, referee_name, referee_email, course, userId },
        });

        res.status(201).json({ message: "Referral submitted successfully!", referral });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getReferrals = async (req, res) => {
    try {
        const referrals = await prisma.referral.findMany();
        res.json(referrals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};