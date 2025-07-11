import Input from "./Input";
import Label from "./Label";
export default function InputForm(props) {
  const { htmlFor, type, placeholder, text } = props;
  return (
    <div className="my-2">
      <Label htmlFor={htmlFor}>{text}</Label>
      <Input type={type} placeholder={placeholder}></Input>
    </div>
  );
}
