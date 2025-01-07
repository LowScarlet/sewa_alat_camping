'use client'

import { useAuth } from "@/context/AuthContext";
import { useCategory } from "@/model/admin/category";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

export default function Home() {
  const {
    user: authUser,
    isAuthenticated,
  } = useAuth();

  const {
    data: dataCategory,
    isLoading: loadingProduct
  } = useCategory();

  if (loadingProduct) {
    return (<>Loading</>)
  }

  if (!isAuthenticated || !authUser || !dataCategory) {
    return (<>Error</>)
  }

  return (<>
    <div className="px-4 py-2">
      <div className="flex gap-2 px-12 py-4">
        <Link href={'./product'} className={(false ? 'btn-outline' : '') + " btn btn-neutral btn-sm grow"}>Produk</Link>
        <Link href={'./category'} className={(true ? 'btn-outline' : '') + " btn btn-neutral btn-sm grow"}>Kategori</Link>
      </div>
      <div className="gap-4 grid grid-cols-1 py-2">
        {
          dataCategory.map((item, index) => (
            <Link
              href={'#'}
              key={index}
              className="flex"
            >
              <div className="flex bg-base-100 shadow-md rounded-md overflow-hidden grow">
                <div className="flex flex-none items-center">
                  <FaHashtag className="m-4" />
                </div>
                <div className="p-2 grow">
                  <h2 className="font-bold text-xs">
                    {item.name}
                  </h2>
                  <h2 className="text-xs">
                    {item.description || 'Tidak ada deskripsi'}
                  </h2>
                  <h2 className="text-xs italic">
                    Terdapat {0} Produk
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
