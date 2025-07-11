// kalo pages nama file pake huruf kecil tapi nama componenet tetep besar karena akan dipakai untuk routing di next js
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

export default function LoginPage() {
  return (
    <>
      <AuthLayouts title="Login">
        <FormLogin textButton="Login" />
      </AuthLayouts>
    </>
  );
}
