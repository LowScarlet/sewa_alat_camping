import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Product_Detail() {
  return (<>
    <div className="flex justify-between px-4 pt-4 pb-2 text-xl">
      <Link href={"/home"} className="btn btn-circle btn-ghost btn-sm">
        <FaArrowLeft />
      </Link>
      <Link href={""} className="btn btn-circle btn-ghost btn-sm">
        <BsThreeDotsVertical />
      </Link>
    </div>
    <div className="space-y-2 min-h-svh">
      <div className="shadow-md py-2">
        <Image
          width={1000}
          height={225}
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          className="w-full"
          alt={"Image"}
        />
        <div className="p-2">
          <h1 className="font-bold text-2xl">Rp 17.000,00</h1>
          <h2 className="pt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h2>
        </div>
      </div>
      <div className="shadow-md p-2">
        <h1 className="font-bold text-base">Detail Produk</h1>
        <div className="px-2 text-sm">
          <div className="flex py-2 border-b border-base-content">
            <div className="min-w-32">
              Kategori
            </div>
            <div className="w-full font-medium">
              Alat Masak
            </div>
          </div>

          <div className="flex py-2 border-b border-base-content">
            <div className="min-w-32">
              Tersedia
            </div>
            <div className="w-full font-medium">
              10 Barang
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-md p-2">
        <h1 className="font-bold text-base">Deskripsi Produk</h1>
        <p className="px-2 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

    <div className="bottom-0 sticky flex gap-2 bg-white p-2">
      <Link href={""} className="shadow-md btn btn-outline btn-square">
        <FaWhatsapp />
      </Link>

      <Link href={""} className="shadow-md btn btn-neutral grow">
        <MdOutlineShoppingCart /> Keranjang
      </Link>
    </div>
  </>);
}
