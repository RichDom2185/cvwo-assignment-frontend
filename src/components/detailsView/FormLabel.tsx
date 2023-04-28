interface Props {
  htmlFor: string;
  children: React.ReactNode;
}

const FormLabel = ({ htmlFor, children }: Props) => {
  return (
    <div className="md:w-1/5 mr-2">
      <label
        className="block text-gray-500 font-outfit md:text-right mb-1 md:mb-0 pr-4"
        htmlFor={htmlFor}
      >
        {children}
      </label>
    </div>
  );
};

export default FormLabel;
