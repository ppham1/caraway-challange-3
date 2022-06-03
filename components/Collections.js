import ProductCard from "./ProductCard";
import uuid from "react-uuid";

function Collections({ products }) {
  //using reduce to get the names of all the collections
  const types = products.reduce((allTypes, product) => {
    const type = product.product_type;
    if (allTypes[type] == null) allTypes[type] = [];
    allTypes[type].push(product);
    return allTypes;
  }, {});
  //grabbing the names of the collections
  const collectionTitles = Object.keys(types);

  return (
    <div>
      {collectionTitles.map((item) => {
        return (
          <div className="group" key={uuid()}>
            <h2 className="text-4xl font-extrabold text-gray-900 my-12">
              {item}
            </h2>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {/* if the product collection matches the collection it will return the product card component */}
              {products.map((product) => {
                if (product.product_type == item)
                  return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Collections;
