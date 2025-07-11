// kalo pages nama file pake huruf kecil tapi nama componenet tetep besar karena akan dipakai untuk routing di next js
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import Button from "../components/Elements/Button";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <>
      <AuthLayouts title="Login">
        <FormLogin textButton="Login" />
        <p className="text-sm mt-4 text-white text-center">
          Dont have account?{" "}
          {/* pake tag LINK bawaan react-router agar pindah halaman gausah refresh ulang dulu */}
          <Link to="/register" className="font-bold text-slate-900 underline">
            Sign up
          </Link>
        </p>
      </AuthLayouts>
    </>
  );
}
