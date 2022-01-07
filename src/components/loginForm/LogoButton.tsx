interface Props {
    children: React.ReactNode;
}

const LogoButton = ({children} : Props) => {
    return (
        <button className="transition border border-transparent hover:border-blue-300 bg-white px-3 py-2 rounded space-x-3 items-center text-sm shadow-md">
            {children}
        </button>
    )
};

export default LogoButton;