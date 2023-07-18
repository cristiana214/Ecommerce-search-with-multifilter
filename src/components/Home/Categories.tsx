import Link from "next/link";

const categories = [
  { name: "Menswear", description: "Apparel & Sneakers", url: "menswear" },
  { name: "Womenswear", description: "Apparel & Sneakers", url: "womenswear" },
  { name: "Luxury", description: "Watches, Bags & Accessories", url: "luxury" },
  {
    name: "Art & Collectibles",
    description: "Trading Cards, Figurines & Collectibles",
    url: "art-and-collectibles",
  },
  {
    name: "Electronics",
    description: "Computers, Peripherals & more",
    url: "electronics",
  },
  {
    name: "Homeware & Furniture",
    description: "Couches, Bedding & Home Improvement",
    url: "homeware-and-furniture",
  },
  {
    name: "Others",
    description: "Experiences & Miscellaneous Treasures",
    url: "others",
  },
];

const Categories = () => {
  return (
    <div className="-m-2 flex flex-wrap">
      {categories.map((category, index) => (
        <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4" key={index}>
          <div className="group flex h-full items-center rounded-md border border-gray-500 bg-slate-900 p-4 ">
            <Link href={`/category/${category.url}/`}>
              <div className="flex-grow">
                <h2 className="title-font hoverTitle font-medium text-gray-300">
                  {category.name}
                </h2>
                <p className="text-gray-600 ">{category.description}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Categories;
