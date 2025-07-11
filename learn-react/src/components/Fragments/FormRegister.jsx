import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormRegister(props) {
  const { textButton } = props;
  return (
    <>
      <form action="#" method="post">
        <InputForm
          htmlFor="username"
          placeholder="username"
          text="Username"
          type="text"
        ></InputForm>
        <InputForm
          htmlFor="email"
          placeholder="email"
          text="Email"
          type="email"
        ></InputForm>
        <InputForm
          htmlFor="password"
          placeholder="********"
          text="Password"
          type="password"
        ></InputForm>
        <InputForm
          htmlFor="confirm-password"
          placeholder="********"
          text="Confirm Password"
          type="password"
        ></InputForm>

        <Button classname="bg-blue-600 w-full mt-3">{textButton}</Button>
      </form>
    </>
  );
}
