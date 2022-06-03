import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="text-2xl">
      {/* render component that shows the collection with all products */}
      <ProductList />
    </div>
  );
}
