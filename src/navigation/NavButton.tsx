export interface Props {
    text: string;
    href?: string;
    onclick?: (e?: Event) => void;
};

const NavButton = (props: Props) => {
    return (
        <div className="transition nav-button bg-gray-100 hover:bg-gray-200 rounded-lg my-2 px-3 py-2 cursor-pointer">
            {/* <a href={props.href ?? "javascript:;"}>{props.text}</a> */}
            <span>{props.text}</span>
        </div>
    );
};

export default NavButton;
