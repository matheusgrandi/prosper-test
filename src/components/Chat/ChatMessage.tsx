interface ChatMessageProps {
  message: string | JSX.Element;
  sender: 'user' | 'bot';
  handlePageChange?: (pageIndex: number) => void;
  refIndex?: number;
}

export function ChatMessage({
  message,
  sender,
  handlePageChange,
  refIndex,
}: ChatMessageProps) {
  const messageClass = sender === 'user' ? 'text-right' : 'text-left';

  return (
    <div className={messageClass}>
      <div
        className={`${
          sender === 'user'
            ? 'bg-blue-700 text-white'
            : 'bg-blue-100 text-black'
        } rounded-lg p-2 inline-block my-1 mx-2 font-sans text-sm max-w-xs`}
      >
        {message}
        {refIndex && (
          <button
            className='ml-2 underline  bg-white  hover:bg-white rounded-lg p-1 focus:outline-none focus:none text-black text-sm'
            onClick={() => handlePageChange?.(refIndex)}
          >
            P. {refIndex}
          </button>
        )}
      </div>
    </div>
  );
}
