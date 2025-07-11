// kalo pages nama file pake huruf kecil tapi nama componenet tetep besar karena akan dipakai untuk routing di next js
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

export default function RegisterPage() {
  return (
    <>
      <AuthLayouts title="Register">
        <FormRegister textButton="Register" />
      </AuthLayouts>
    </>
  );
}
