interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const LogoButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="transition border border-transparent hover:border-blue-300 bg-white px-3 py-2 rounded space-x-3 flex items-center text-sm shadow-md"
    >
      {children}
    </button>
  );
};

export default LogoButton;
