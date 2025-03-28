import React from "react";

interface Props {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormTextInputElement: React.FC<Props> = ({
  name,
  label,
  value,
  placeholder = "",
  changeHandler,
}) => {
  return (
    <div className="flex flex-col space-y-2 mt-3 first:mt-0">
      <label
        htmlFor={name}
        className="grow text-left text-gray-500 tracking-wide font-medium text-sm"
      >
        {label}
      </label>
      <input
        type={name}
        name={name}
        id={name}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
        className="transition border border-transparent focus:border-blue-300 bg-gray-100 focus:bg-sky-100 rounded-sm px-3 py-2 w-full focus:outline-hidden"
      />
    </div>
  );
};

export default FormTextInputElement;
