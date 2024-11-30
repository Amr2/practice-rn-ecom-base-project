import staticData from "./MimicDataConfig.json";

function waitFor(ms: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(originalMethod.apply(this, args));
        }, ms);
      });
    };

    return descriptor;
  };
}

class BEMimic {
  constructor() {}

  // add the async mimcation
  //   @waitFor(1000) // Wait for 1 second
  getCategory() {
    return staticData["categories"];
  }
}

const API = new BEMimic();

export default API;
