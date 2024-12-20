import Link from "next/link";

export default function Auth() {
  return (<>
    <div className="flex flex-col justify-center items-center px-4 min-h-svh">
      <h1 className="font-bold text-2xl">
        Selamat Datang!
      </h1>
      <p className="text-sm">
        Silahkan Masuk Atau Mendaftar Untuk Bertransaksi
      </p>

      <div className="flex flex-col gap-2 mt-12 w-full">
        <Link href={"/auth/register"} className="w-full btn btn-neutral">Mendaftar</Link>
        <Link href={"/auth/login"} className="w-full btn">Masuk</Link>
      </div>
    </div>
  </>);
}
