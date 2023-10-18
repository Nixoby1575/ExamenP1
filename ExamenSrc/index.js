"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const filterPackages_1 = require("./src/filterPackages");
const softwarePackages_1 = require("./src/softwarePackages");
const referencePrice = 100;
(0, filterPackages_1.filterPackagesByPrice)(softwarePackages_1.softwarePackages, referencePrice, (filteredPackages) => {
    console.log("Paquetes de software con precio mayor al referencial:");
    filteredPackages.forEach((pkg) => {
        console.log(`Nombre: ${pkg.name}, Precio: $${pkg.price}`);
    });
});
//Prisma
const createSoftware_1 = require("./src/createSoftware");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const softwareData = {
    name: 'Telegram',
    price: 150,
    detail: 'Aplicación para mensajería',
    requeriments: ['Requisito 7', 'Requisito 8'],
};
(0, createSoftware_1.createSoftware)(softwareData.name, softwareData.price, softwareData.detail, softwareData.requeriments)
    .then((software) => {
    console.log('Software creado en la base de datos:', software);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
const getRequeriments_1 = require("./src/getRequeriments");
(0, getRequeriments_1.getRequerimentsWithEffortOne)()
    .then((requeriments) => {
    console.log('Requerimientos con effort = 1:', requeriments);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
