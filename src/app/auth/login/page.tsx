import Link from "next/link";

export default function Auth() {
  return (<>
    <div className="flex flex-col justify-center items-center px-4 min-h-svh">
      <h1 className="font-bold text-2xl">
        Masuk
      </h1>
      <p className="text-center text-sm">
        Silahkan Masukan Kredentials Yang Valid Untuk Melanjutkan!
      </p>

      <div className="flex flex-col gap-2 mt-12 w-full">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Nomor Telepon</span>
          </div>
          <input type="text" placeholder="81270634992" className="input-bordered w-full input" />
          {/* <div className="label">
            <span className="label-text-alt">Bottom Left label</span>
          </div> */}
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Kata Sandi</span>
          </div>
          <input type="text" placeholder="Rio123" className="input-bordered w-full input" />
          {/* <div className="label">
            <span className="label-text-alt">Bottom Left label</span>
          </div> */}
        </label>
        <Link href={"/auth/login"} className="mt-4 w-full btn btn-neutral">Masuk</Link>
        <Link href={"/auth/register"} className="mt-4 w-full btn">Daftar</Link>
      </div>
    </div>
  </>);
}
