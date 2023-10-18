import { ISoftware } from "./interfaces/interfaces";

function filterPackagesByPrice(
  packages: ISoftware[],
  referencePrice: number,
  callback: (filteredPackages: ISoftware[]) => void
) {
  const filteredPackages = packages.filter((pkg) => pkg.price > referencePrice);
  callback(filteredPackages);
}

export { filterPackagesByPrice };
