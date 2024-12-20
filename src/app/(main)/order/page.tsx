import Link from "next/link";
import { MdDelete } from "react-icons/md";

export default function Order() {
  return (<>
    <div className="flex gap-2 px-12 py-4">
      <button className="btn btn-neutral btn-sm grow">Semua</button>
      <button className="btn btn-neutral btn-outline btn-sm grow">Selesai</button>
    </div>

    <div className="z-0 space-y-2 min-h-svh">
      {
        [1, 2, 3].map((_item, index) => (
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
                  <h1 className="font-bold text-sm">Rp 17.000,00 x5, Durasi 7 Hari</h1>
                  <div className="flex justify-between items-end mt-4">
                    <button className="btn btn-neutral btn-xs">Selesai</button>
                    <h1 className="font-medium text-xs">Total <span>Rp 17.000,00</span></h1>
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
  </>);
}
