'use client'

import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export interface ProductInterface {
  id: number;
  icon: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  registrationDate: string;
  categoryId: number;
  category: CategoryInterface;
}

export interface CategoryInterface {
  id: number;
  name: string;
  description: string;
}

export const useProduct = ({ categoryId }: { categoryId: number | null }) => {
  const url = categoryId ? `/api/client/customer/product/byCategory/${categoryId}` : '/api/client/customer/product/all';
  const { data, error, isLoading } = useSWR<ProductInterface[]>(url, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};

export const useCategory = () => {
  const { data, error, isLoading } = useSWR<ProductInterface[]>('/api/client/customer/product/category/all', fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};

export const useProductDetail = (id: number) => {
  const { data, error, isLoading } = useSWR<ProductInterface>('/api/client/customer/product/detail/' + `${id}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};