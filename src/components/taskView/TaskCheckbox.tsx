export interface Props {
  checked: boolean;
  onChange: React.ChangeEventHandler;
}

const TaskCheckbox: React.FC<Props> = ({ checked, onChange }) => {
  return checked ? (
    <input
      type="checkbox"
      className="inline mx-2 my-auto"
      onChange={onChange}
      title="Mark not done"
      defaultChecked
    />
  ) : (
    <input
      type="checkbox"
      className="inline mx-2 my-auto"
      onChange={onChange}
      title="Mark as done"
    />
  );
};

export default TaskCheckbox;
