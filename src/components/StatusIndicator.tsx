import { decompressFromUTF16 } from "lz-string";
import { MdCloudQueue, MdOutlineCloudOff } from "react-icons/md";

const StatusIndicator = () => {
  const currentUserData: string | null = decompressFromUTF16(
    window.localStorage.getItem("user") ?? ""
  );

  return (
    <div
      className="transition text-gray-300 select-none flex items-center justify-center gap-x-2 px-3 py-2 rounded-lg"
      title={
        currentUserData
          ? "Connected to server. Your tasks will be synced across your devices."
          : "Not connected. Either sign in or ensure you have a working internet connection. Your tasks will remain available offline."
      }
    >
      {currentUserData ? (
        <MdCloudQueue size={22} />
      ) : (
        <MdOutlineCloudOff size={22} />
      )}
      <span>
        {currentUserData
          ? "Connected" // TODO: handle authentication failure
          : "Offline Mode"}
      </span>
    </div>
  );
};

export default StatusIndicator;
