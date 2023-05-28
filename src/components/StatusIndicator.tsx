import { MdCloudQueue, MdOutlineCloudOff } from "react-icons/md";
import { useLocalStorage } from "../utils/hooks";

const StatusIndicator = () => {
  const { getStorageToken } = useLocalStorage("token");
  const isLoggedIn = !!getStorageToken();

  return (
    <div
      className="transition text-gray-300 select-none flex items-center justify-center gap-x-2 px-3 py-2 rounded-lg"
      title={
        isLoggedIn
          ? "Connected to server. Your tasks will be synced across your devices."
          : "Not connected. Either sign in or ensure you have a working internet connection. Your tasks will remain available offline."
      }
    >
      {isLoggedIn ? (
        <MdCloudQueue size={22} />
      ) : (
        <MdOutlineCloudOff size={22} />
      )}
      <span>
        {isLoggedIn
          ? "Connected" // TODO: handle authentication failure
          : "Offline Mode"}
      </span>
    </div>
  );
};

export default StatusIndicator;
