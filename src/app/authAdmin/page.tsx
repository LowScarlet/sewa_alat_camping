/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useAuth } from "@/context/AuthContext";
import axiosInstance from "@/lib/axiosInstance";
import { FormEvent, useState } from "react";

export default function Auth() {
  const { login } = useAuth();

  const [signinLoading, setSigninLoading] = useState(false);

  const defaultFormData = { phoneNumber: "", password: "" };
  const defaultBadError = { phoneNumber: "", password: "" };

  const [formData, setFormData] = useState(defaultFormData);
  const [badError, setBadError] = useState(defaultBadError);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSigninLoading(true);
    setBadError(defaultBadError);

    try {
      const response = await axiosInstance.post("/api/auth/login", formData);

      const { data } = response;
      const { user, accessToken } = data;

      localStorage.setItem('accessToken', accessToken.token);

      login(user);
    } catch (err: any) {
      const { data } = err.response;
      const { message, validationErrors } = data;

      if (validationErrors) {
        Object.entries(validationErrors).forEach(([key, value]) => {
          setBadError((prevData) => ({
            ...prevData,
            [key]: value,
          }));
        });
      }

      console.log(message);
    } finally {
      setSigninLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 min-h-svh">
      <h1 className="font-bold text-2xl">Masuk</h1>
      <p className="text-center text-sm">
        Silahkan Masukan Kredentials Yang Valid Untuk Melanjutkan!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-12 w-full">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Nomor Telepon</span>
          </div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="81270634992"
            className="input-bordered w-full input"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          {badError.phoneNumber && <p className="text-red-500">{badError.phoneNumber}</p>}
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Kata Sandi</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Rio123"
            className="input-bordered w-full input"
            value={formData.password}
            onChange={handleInputChange}
          />
          {badError.password && <p className="text-red-500">{badError.password}</p>}
        </label>
        <button
          type="submit"
          className={`mt-4 w-full btn btn-neutral ${signinLoading ? "loading" : ""}`}
        >
          {signinLoading ? "Memuat..." : "Masuk"}
        </button>
      </form>
    </div>
  );
}
