// kalo pages nama file pake huruf kecil tapi nama componenet tetep besar karena akan dipakai untuk routing di next js
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router";

export default function RegisterPage() {
  return (
    <>
      <AuthLayouts title="Register">
        <FormRegister textButton="Register" />
        <p className="text-sm mt-2 text-white text-center">
          Alrady have an account?{" "}
          {/* pake tag LINK bawaan react-router agar pindah halaman gausah refresh ulang dulu */}
          <Link to="/login" className="font-bold text-slate-900 underline">
            Login
          </Link>
        </p>
      </AuthLayouts>
    </>
  );
}
