import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createSoftware(name: string, price: number, detail: string, requeriments: string[]) {
  const software = await prisma.software.create({
    data: {
      name,
      price,
      detail,
      requeriments: {
        create: requeriments.map((description) => ({ description })),
      },
    },
  });

  return software;
}

export async function disconnectPrisma() {
  await prisma.$disconnect();
}
