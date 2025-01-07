'use client';

import { useAuth } from '@/context/AuthContext';
import { useClient } from '@/model/client';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { AiOutlineProduct } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TbTruckDelivery } from 'react-icons/tb';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { push } = useRouter();
  const pathname = usePathname();

  const {
    user: authUser,
    login,
    isAuthenticated,
  } = useAuth();

  const { data: clientData, isLoading } = useClient();

  useEffect(() => {
    const fetchData = async () => {
      if (!authUser && clientData) {
        const { id, role, fullName, phoneNumber, codAddress, registrationDate } = clientData;
        login({ id, role, fullName, phoneNumber, codAddress, registrationDate });
      }
    };

    if (!isAuthenticated) {
      push('/authAdmin/');
    }

    fetchData();
  }, [authUser, clientData, isAuthenticated, login, push]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <span className="loading loading-lg loading-spinner"></span>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 pt-4">
        <h3 className="font-medium text-xs">Hi, Tegar Maulana Fahreza</h3>
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Admin Panel Management</h1>
        </div>
      </div>
      {children}
      <div className="btm-nav mx-auto max-w-sm text-sm container">
        <button
          className={pathname === "/admin/product" || pathname === "/admin/category" ? "active" : ""}
          onClick={() => push("/admin/product")}
        >
          <AiOutlineProduct />
          <span className="btm-nav-label">Product</span>
        </button>
        <button
          className={pathname === "/admin/order" ? "active" : ""}
          onClick={() => push("/admin/order")}
        >
          <TbTruckDelivery />
          <span className="btm-nav-label">Pesanan</span>
        </button>
        <button
          onClick={() => {
            localStorage.removeItem('accessToken');
            push('/auth/');
            window.location.reload();
          }}
        >
          <CgProfile />
          <span className="btm-nav-label">Keluar</span>
        </button>
      </div>
    </>
  )
}
