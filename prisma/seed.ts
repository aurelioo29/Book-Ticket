import { PrismaClient } from "@prisma/client";
const bycrpt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const password = bycrpt.hashSync("admin123", 10);

  const userSeed = await prisma.user.create({
    data: {
      email: "admin@mail.com",
      name: "Admin",
      role: "ADMIN",
      password,
    },
  });

  console.log({ userSeed });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
