const categories = [
  { name: "Menswear", description: "Apparel & Sneakers" },
  { name: "Womenswear", description: "Apparel & Sneakers" },
  { name: "Luxury", description: "Watches, Bags & Accessories" },
  {
    name: "Art & Collectibles",
    description: "Trading Cards, Figurines & Collectibles",
  },
  { name: "Electronics", description: "Computers, Peripherals & more" },
  {
    name: "Homeware & Furniture",
    description: "Couches, Bedding & Home Improvement",
  },
  { name: "Others", description: "Experiences & Miscellaneous Treasures" },
];
const Categories = () => {
  return (
    <div className="-m-2 flex flex-wrap">
      {categories.map((category, index) => (
        <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4" key={index}>
          <div className="flex h-full items-center rounded-md border border-gray-500 bg-slate-900 p-4">
            <div className="flex-grow">
              <h2 className="title-font font-medium text-gray-300">
                {category.name}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Categories;
