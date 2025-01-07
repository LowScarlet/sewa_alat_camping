/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useAuth } from "@/context/AuthContext";
import axiosInstance from "@/lib/axiosInstance";
import { useCart, useTotal } from "@/model/cart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete, MdOutlineShoppingCart } from "react-icons/md";
import { mutate } from "swr";

export default function Cart() {
  const {
    user: authUser,
    isAuthenticated,
  } = useAuth();

  const {
    data: dataCart,
  } = useCart();

  const {
    data: dataCartTotal,
  } = useTotal();

  const router = useRouter()

  const [getMethod, setGetMethod] = useState<string>('cod');
  const [location, setLocation] = useState<string>('');

  const goOrder = async () => {
    try {
      await axiosInstance.post(`/api/client/customer/order/create_order_${getMethod}`, {
        codLocation: getMethod === 'cod' ? location : null,
      });
      router.push('/order');
    } catch (err: any) {
      console.error('Error adding to cart:', err);
    }
  };

  const increaseQuantity = async (cartId: number) => {
    try {
      await axiosInstance.post(`/api/client/customer/cart/increase_quantity/${cartId}`);
      mutate((key: string) => key.startsWith('/api/client/customer/cart/'));
    } catch (err: any) {
      console.error('Error adding to cart:', err);
    }
  };

  const decreaseQuantity = async (cartId: number) => {
    try {
      await axiosInstance.post(`/api/client/customer/cart/decrease_quantity/${cartId}`);
      mutate((key: string) => key.startsWith('/api/client/customer/cart/'));
    } catch (err: any) {
      console.error('Error adding to cart:', err);
    }
  };

  const increaseDuration = async (cartId: number) => {
    try {
      await axiosInstance.post(`/api/client/customer/cart/increase_duration/${cartId}`);
      mutate((key: string) => key.startsWith('/api/client/customer/cart/'));
    } catch (err: any) {
      console.error('Error adding to cart:', err);
    }
  };

  const decreaseDuration = async (cartId: number) => {
    try {
      await axiosInstance.post(`/api/client/customer/cart/decrease_duration/${cartId}`);
      mutate((key: string) => key.startsWith('/api/client/customer/cart/'));
    } catch (err: any) {
      console.error('Error adding to cart:', err);
    }
  };

  const deleteItem = async (cartId: number) => {
    try {
      await axiosInstance.post(`/api/client/customer/cart/delete/${cartId}`);
      mutate((key: string) => key.startsWith('/api/client/customer/cart/'));
    } catch (err: any) {
      console.error('Error adding to cart:', err);
    }
  };

  if (!isAuthenticated || !authUser || !dataCart) {
    return (<>Error</>)
  }

  return (
    <>
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
      <div className="z-0 space-y-2 min-h-screen">
        {
          dataCart.length > 0 ? (

            dataCart.map((item, index) => (
              <div className="shadow-md py-2" key={index}>
                <div className="flex gap-2 p-2">
                  <div className="flex-none">
                    <div className="avatar">
                      <div className="rounded w-12">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between grow">
                    <div>
                      <h2 className="text-sm">{item.product.name}</h2>
                      <h1 className="font-bold text-sm">{(item.product.price * item.quantity * item.duration).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h1>
                      <div className="flex gap-2 mt-4">
                        <div className="join">
                          <button onClick={() => decreaseQuantity(item.id)} className="btn btn-sm join-item"><FaMinus /></button>
                          <button className="btn btn-sm join-item">{item.quantity}x</button>
                          <button onClick={() => increaseQuantity(item.id)} className="btn btn-sm join-item"><FaPlus /></button>
                        </div>
                        <div className="join">
                          <button onClick={() => decreaseDuration(item.id)} className="btn btn-sm join-item"><FaMinus /></button>
                          <button className="btn btn-sm join-item">{item.duration} Hari</button>
                          <button onClick={() => increaseDuration(item.id)} className="btn btn-sm join-item"><FaPlus /></button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => deleteItem(item.id)} className="text-xl btn btn-circle btn-ghost btn-sm">
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="py-24 text-center">Kamu Belum Memiliki Barang Di Keranjang!</p>
          )
        }
      </div>


      <div className="bottom-0 sticky bg-white p-2">
        <div>
          <h1 className="font-bold text-lg">Metode Pemesanan</h1>
          <div className="flex gap-2 pt-2">
            <button onClick={() => setGetMethod('cod')} className={(getMethod != 'cod' ? 'btn-outline' : '') + " btn btn-neutral btn-sm grow"}>COD</button>
            <button onClick={() => setGetMethod('pickup')} className={(getMethod != 'pickup' ? 'btn-outline' : '') + " btn btn-neutral btn-sm grow"}>Pickup</button>
          </div>
        </div>
        {
          getMethod === 'cod' && (
            <div className="pt-2">
              <h1 className="font-bold text-lg">Lokasi COD</h1>
              <div className="flex">
                <textarea
                  className="textarea-bordered grow textarea"
                  placeholder="Jl. Suka karya, Panam"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></textarea>
              </div>
            </div>
          )
        }
        <div className="flex justify-end gap-2 pt-2">
          <div>
            <h3 className="text-end text-sm">Total</h3>
            <h1 className="font-bold text-base text-end">{(dataCartTotal?.totalCost || 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h1>
          </div>

          <button disabled={dataCart.length <= 0} onClick={() => goOrder()} className="shadow-md btn btn-neutral">
            <MdOutlineShoppingCart /> Sewa {dataCart.length} Bawang
          </button>
        </div>
      </div>
    </>
  );
}