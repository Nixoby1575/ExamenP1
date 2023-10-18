import { filterPackagesByPrice } from "./src/filterPackages";
import { softwarePackages } from "./src/softwarePackages";

const referencePrice = 100;

filterPackagesByPrice(softwarePackages, referencePrice, (filteredPackages) => {
  console.log("Paquetes de software con precio mayor al referencial:");
  filteredPackages.forEach((pkg) => {
    console.log(`Nombre: ${pkg.name}, Precio: $${pkg.price}`);
  });
});







//Prisma
import { createSoftware } from './src/createSoftware';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const softwareData = {
  name: 'Telegram',
  price: 150,
  detail: 'Aplicación para mensajería',
  requeriments: ['Requisito 7', 'Requisito 8'],
};

createSoftware(softwareData.name, softwareData.price, softwareData.detail, softwareData.requeriments)
  .then((software) => {
    console.log('Software creado en la base de datos:', software);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


  import { getRequerimentsWithEffortOne } from './src/getRequeriments';

getRequerimentsWithEffortOne()
  .then((requeriments) => {
    console.log('Requerimientos con effort = 1:', requeriments);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
