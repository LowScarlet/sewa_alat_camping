'use client'

import { useAuth } from "@/context/AuthContext";
import { useProduct } from "@/model/admin/product";
import Link from "next/link";

export default function Home() {
  const {
    user: authUser,
    isAuthenticated,
  } = useAuth();

  const {
    data: dataProduct,
    isLoading: loadingProduct
  } = useProduct();

  if (loadingProduct) {
    return (<>Loading</>)
  }

  if (!isAuthenticated || !authUser || !dataProduct) {
    return (<>Error</>)
  }

  return (<>
    <div className="px-4 py-2">
      <div className="flex gap-2 px-12 py-4">
        <Link href={'./product'} className={(true ? 'btn-outline' : '') + " btn btn-neutral btn-sm grow"}>Produk</Link>
        <Link href={'./category'} className={(false ? 'btn-outline' : '') + " btn btn-neutral btn-sm grow"}>Kategori</Link>
      </div>
      <div className="gap-4 grid grid-cols-1 py-2">
        {
          dataProduct.map((item, index) => (
            <Link
              href={'#'}
              key={index}
              className="flex"
            >
              <div className="flex bg-base-100 shadow-md rounded-md overflow-hidden grow">
                <div className="flex-none">
                  <div className="avatar">
                    <div className="rounded w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </div>
                <div className="p-2 grow">
                  <h2 className="font-bold text-xs">
                    {item.name}
                  </h2>
                  <h2 className="text-xs">
                    {item.description || 'Tidak ada deskripsi'}
                  </h2>
                  <div className="flex justify-between items-center grow">
                    <h4 className="mt-2 font-bold text-xs grow">
                      {item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                    </h4>

                    <div className="badge badge-neutral">{item.category.name}</div>
                  </div>
                  <h2 className="text-xs italic">
                    Tersedia {item.stock || 0} Item
                  </h2>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  </>);
}
