import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className=" max-container max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className=" font-bold font-palanquin text-4xl">
          Our <span className=" text-coral-red">Popular</span> Products
        </h2>
        <p className=" font-montserrat text-slate-gray lg:max-w-lg mt-2">
          Experience top-notch quality and style with our sought-after
          selection. Discover a world full of comfort, design, and value{" "}
        </p>
      </div>
      <div className=" mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
