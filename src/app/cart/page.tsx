import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete, MdOutlineShoppingCart } from "react-icons/md";

export default function Cart() {
  return (<>
    <div className="top-0 z-10 sticky bg-white">
      <div className="flex justify-between px-4 pt-4 pb-2 text-xl">
        <Link href={"/home"} className="btn btn-circle btn-ghost btn-sm">
          <FaArrowLeft />
        </Link>
        <h1 className="text-base">Keranjang</h1>
        <Link href={""} className="btn btn-circle btn-ghost btn-sm">
          <BsThreeDotsVertical />
        </Link>
      </div>
    </div>
    <div className="z-0 space-y-2 min-h-svh">
      {
        [1, 2, 3].map((item, index) => (
          <div className="shadow-md py-2" key={index}>
            <div className="flex gap-2 p-2">
              <div className="flex-none">
                <div className="avatar">
                  <div className="rounded w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div>
              <div className="flex grow">
                <div>
                  <h2 className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h2>
                  <h1 className="font-bold text-sm">Rp 17.000,00</h1>
                  <div className="flex gap-2 mt-4">
                    <div className="join">
                      <button className="btn btn-sm join-item"><FaMinus /></button>
                      <button className="btn btn-sm join-item">20x</button>
                      <button className="btn btn-sm join-item"><FaPlus /></button>
                    </div>
                    <div className="join">
                    <button className="btn btn-sm join-item"><FaMinus /></button>
                      <button className="btn btn-sm join-item">7 Hari</button>
                      <button className="btn btn-sm join-item"><FaPlus /></button>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href={""} className="text-xl btn btn-circle btn-ghost btn-sm">
                    <MdDelete />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>

    <div className="bottom-0 sticky bg-white p-2">
      <div>
        <h1 className="font-bold text-lg">Metode Pemesanan</h1>
        <div className="flex gap-2 pt-2">
          <button className="btn btn-neutral btn-outline btn-sm grow">COD</button>
          <button className="btn btn-neutral btn-sm grow">Pickup</button>
        </div>
      </div>
      <div className="pt-2">
        <h1 className="font-bold text-lg">Lokasi COD</h1>
        <div className="flex">
          <textarea className="textarea-bordered grow textarea" placeholder="Jl.Suka karya, Panam"></textarea>
        </div>
      </div>
      <div className="flex justify-end gap-2 pt-2">
        <div>
          <h3 className="text-end text-sm">Total</h3>
          <h1 className="font-bold text-base text-end">Rp 17.000,00</h1>
        </div>

        <Link href={""} className="shadow-md btn btn-neutral">
          <MdOutlineShoppingCart /> Sewa 2 Bawang
        </Link>
      </div>
    </div>
  </>);
}
