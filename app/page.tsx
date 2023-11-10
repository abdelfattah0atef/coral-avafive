import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
const getProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=4");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("###Error", error);
  }
};
const Home = async () => {
  const data = await getProducts();
  // if (!data) {
  //   <div className="p-5">Loading...</div>;
  // }
  return (
    <>
      <div className="text-center bg-[#F0F0F0] color-[#171520] text-sm width-full p-3 mb-4">
        We are currently experiencing local customs clearance delays. For the
        latest updates, please check your order status here
      </div>
      <div className="bg-[url('/header-bg.png')] bg-no-repeat bg-cover bg-right-top width-full h-[500px] relative">
        {/* <div className="absolute right-20 top-20 bg-[#1B4B66] width-200"></div> */}
      </div>
      <section className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl">New Arrivals</h1>
          <Link href="/products">
            <p className="text-sm text-[#1B4B66] flex space-x-1">
              <p>View all</p>
              <Image
                src="/chevron-right.svg"
                alt="arrow"
                width={14}
                height={14}
              />
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {data.products.map((product: any) => (
            <div className="col-span-1" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
