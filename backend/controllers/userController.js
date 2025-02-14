const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getProfile = async (req, res) => {
    const userId = req.user.userId;

    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    res.json(user);
};