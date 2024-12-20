import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Home() {
  return (<>
    <div className="px-4 pt-4">
      <h3 className="font-medium text-xs">Hi, Tegar Maulana Fahreza</h3>
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Sewa Alat Camping</h1>
        <div className="flex justify-end items-center text-xl">
          <Link href={"/cart"}>
            <MdOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </div>
    <div className="px-4 py-2">
      <Image
        width={1000}
        height={225}
        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
        className="shadow-md rounded-md w-full"
        alt={"Image"}
      />
    </div>
    <div className="px-4 py-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-base">Katalog</h1>
        <div className="flex justify-end items-center text-base">
          <select className="w-full select-bordered select-xs select">
            <option disabled defaultValue={''} selected>Ketegori</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </div>
      <div className="gap-4 grid grid-cols-2 py-2">
        {
          [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <Link href={'/product/1'} key={index} className="bg-base-100 shadow-md rounded-md overflow-hidden">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="p-2">
                <h2 className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </h2>
                <h4 className="mt-2 font-bold text-xs">
                  Rp 17.000,00
                </h4>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  </>);
}
