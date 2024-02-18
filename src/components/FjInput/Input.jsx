import DateInput from "./DateInput/DateInput";
import SelectInput from "./SelectInput/SelectInput";
import TextInput from "./TextInput/TextInput";

const Input = ({ placeholder, onChange, value, type }) => {
  if (type === "select") {
    return <SelectInput onChange={onChange} value={value} />;
  }
  if (type === "text") {
    return (
      <TextInput placeholder={placeholder} onChange={onChange} value={value} />
    );
  }
  if (type === "date") {
    return (
      <DateInput placeholder={placeholder} onChange={onChange} value={value} />
    );
  }
};

export default Input;
