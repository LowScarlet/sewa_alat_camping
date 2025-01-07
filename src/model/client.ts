'use client'

import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export interface ClientInterface {
  id: number;
  role: string;
  fullName: string;
  phoneNumber: string;
  password: string;
  codAddress: string;
  registrationDate: string;
}

export const useClient = () => {
  const { data, error, isLoading } = useSWR<ClientInterface>('/api/client/', fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};