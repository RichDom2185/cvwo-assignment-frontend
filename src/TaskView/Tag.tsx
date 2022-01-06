export interface Props {
    tagName: string;
    color: string;
    checked: boolean;
};

const Tag = (props: Props) => {
    const bgColor : string = props.checked ? 'gray' : props.color;
    return (
        <div className={"tag transition flex justify-center rounded-full text-sm font-medium select-none py-1 px-2 bg-" + bgColor + '-100 hover:bg-' + bgColor + '-200 border border-' + bgColor + '-300' + (props.checked ? ' text-gray-500' : '')}>
            <span>{props.tagName}</span>
        </div>
    );
};

export default Tag;