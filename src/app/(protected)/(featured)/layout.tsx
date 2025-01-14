'use client'

import { usePathname, useRouter } from "next/navigation";
import { AiOutlineProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname()

  return (
    <>
      {children}
      <div className="btm-nav mx-auto max-w-sm text-sm container">
        <button
          className={pathname === "/home" ? "active" : ""}
          onClick={() => router.push("/home")}
        >
          <AiOutlineProduct />
          <span className="btm-nav-label">Beranda</span>
        </button>
        <button
          className={pathname === "/order" ? "active" : ""}
          onClick={() => router.push("/order")}
        >
          <TbTruckDelivery />
          <span className="btm-nav-label">Pesanan</span>
        </button>
        <button
          onClick={() => {
            localStorage.removeItem('accessToken');
            router.push('/auth/');
            window.location.reload();
          }}
        >
          <CgProfile />
          <span className="btm-nav-label">Keluar</span>
        </button>
      </div>
    </>
  );
}
