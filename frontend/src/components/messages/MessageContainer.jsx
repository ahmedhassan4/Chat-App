import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NotChatSelected from "./NotChatSelected";

function MessageContainer() {
  const notChatSelected = true;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {notChatSelected ? (
        <NotChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text text-white">To:</span>{" "}
            <span className="text-gray-900 font-bold ">Ahmed Hassan</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;
