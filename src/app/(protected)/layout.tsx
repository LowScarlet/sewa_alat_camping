'use client';

import { useAuth } from '@/context/AuthContext';
import { useClient } from '@/model/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { push } = useRouter();

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
      push('/auth/');
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

  return <>
      {children}
  </>;
}
