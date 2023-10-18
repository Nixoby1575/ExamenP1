"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterPackagesByPrice = void 0;
function filterPackagesByPrice(packages, referencePrice, callback) {
    const filteredPackages = packages.filter((pkg) => pkg.price > referencePrice);
    callback(filteredPackages);
}
exports.filterPackagesByPrice = filterPackagesByPrice;
