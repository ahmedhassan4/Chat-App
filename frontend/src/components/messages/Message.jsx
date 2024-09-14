function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user Avatar"
          />
        </div>
      </div>
      <div className="chat-bubble text-black bg-blue-500">I hate you!</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 itmes-center">
        12:46
      </div>
    </div>
  );
}

export default Message;
