import { useState } from 'react';

interface ChatMessageProps {
  message: string | JSX.Element;
  sender: 'user' | 'bot';
  handlePageChange?: (pageIndex: number) => void;
}

export function ChatMessage({
  message,
  sender,
  handlePageChange,
}: ChatMessageProps) {
  const messageClass = sender === 'user' ? 'text-right' : 'text-left';

  const [cleanText, setCleanText] = useState<string | null>(null);
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);

  if (typeof message === 'string') {
    const pattern = /【(\d+)†source】/;

    const match = message.match(pattern);

    if (match && match[1]) {
      setReferenceNumber(match[1]);
      setCleanText(message.replace(pattern, ''));
    }
  }

  return (
    <div className={messageClass}>
      <div
        className={`${
          sender === 'user'
            ? 'bg-blue-700 text-white'
            : 'bg-blue-100 text-black'
        } rounded-lg p-2 inline-block my-1 mx-2 font-sans text-sm max-w-xs`}
      >
        {cleanText}
        {referenceNumber && (
          <button
            className='ml-2 underline bg-gray-200 hover:bg-gray-300 rounded-lg p-1 focus:outline-none focus:none text-black text-sm'
            onClick={() => handlePageChange?.(parseInt(referenceNumber!))}
          >
            P. {referenceNumber}
          </button>
        )}
      </div>
    </div>
  );
}
