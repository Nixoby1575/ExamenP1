import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getRequerimentsWithEffortOne() {
  const requeriments = await prisma.requeriments.findMany({
    where: { efford: 1 },
  });

  return requeriments;
}

export async function disconnectPrisma() {
  await prisma.$disconnect();
}
