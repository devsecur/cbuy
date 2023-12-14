import tailwindConfig from '../../../tailwind.config';
const allClasses = Object.keys(tailwindConfig.theme?.screens ?? {});
// .map((screen) => tailwindConfig.theme?.screens?.[screen]??{})

// .flat()
// .flatMap((value) => [
//   ...Object.keys(tailwindConfig.theme?.spacing??{}),
//   ...Object.keys(tailwindConfig.theme?.fontSize??{}),
//   ...Object.keys(tailwindConfig.theme?.borderWidth??{}),
//   ...Object.keys(tailwindConfig.theme?.borderRadius??{}),
//   ...Object.keys(tailwindConfig.theme?.width??{}),
//   ...Object.keys(tailwindConfig.theme?.height??{}),
//   ...Object.keys(tailwindConfig.theme?.minHeight??{}),
//   ...Object.keys(tailwindConfig.theme?.maxHeight??{}),
//   ...Object.keys(tailwindConfig.theme?.padding??{}),
//   ...Object.keys(tailwindConfig.theme?.margin??{}),
//   ...Object.keys(tailwindConfig.theme?.inset??{}),
// ].map((property) => `${property}-${value}`));
console.log(allClasses);

export default allClasses;
