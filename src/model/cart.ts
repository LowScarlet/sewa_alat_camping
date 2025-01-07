'use client'

import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import { ProductInterface } from "./product";

export interface CartInterface {
  id: number;
  quantity: number;
  duration: number;
  productId: number;
  userId: number;
  product: ProductInterface;
}

export const useCart = () => {
  const { data, error, isLoading } = useSWR<CartInterface[]>('/api/client/customer/cart/all', fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};

export const useTotal = () => {
  const { data, error, isLoading } = useSWR<{ totalCost: number }>('/api/client/customer/cart/total', fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};