import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="col-span-1">
          <ProductCard />
        </div>
        <div className="col-span-1">
          <ProductCard />
        </div>
        <div className="col-span-1">
          <ProductCard />
        </div>
        <div className="col-span-1">
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
