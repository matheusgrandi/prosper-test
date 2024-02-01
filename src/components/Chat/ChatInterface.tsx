import { useEffect, useRef, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import useLLM from '../../hooks/useLLM';
import { LinearLoader } from '../Loader/LinearLoader';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

type ChatInterfaceProps = {
  handlePageChange: (pageIndex: number) => void;
};

type Message = {
  sender: 'user' | 'bot';
  content: string;
  refIndex?: number;
};

export function ChatInterface({ handlePageChange }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<Message>({
    sender: 'user',
    content: '',
    refIndex: undefined,
  });

  const { fetchData, isLoading, error } = useLLM();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (input.content.trim() !== '') {
      setMessages([...messages, input]);
      setInput({ ...input, content: '' });

      fetchData(input.content).then((response) => {
        if (response === undefined) return;
        let pageNumber: number | undefined;
        if (response.reference) {
          const pattern = /page=(\d+)/;
          const match = response.reference.match(pattern);

          if (match && match[1]) {
            pageNumber = parseInt(match[1]);
          }
        }
        const responseMessage: Message = {
          sender: 'bot',
          content: response.data,
          refIndex: pageNumber || undefined,
        };

        console.log(responseMessage);

        setMessages((prevMessages) => [...prevMessages, responseMessage]);
      });
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (error) {
      toast.error('An error occurred while sending the message.', {
        position: 'top-right',
        pauseOnHover: true,
      });
    }
  }, [error]);

  return (
    <div className='flex flex-col w-full h-screen rounded-lg p-10'>
      <div
        className='h-full min-h-96 border border-gray-300 rounded-t-lg p-4 bg-white overflow-y-auto'
        ref={chatContainerRef}
      >
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.content}
            sender={message.sender}
            handlePageChange={handlePageChange}
            refIndex={message.refIndex || undefined}
          />
        ))}
        {isLoading && <ChatMessage message={<LinearLoader />} sender='bot' />}
      </div>
      <div className='flex rounded-b-lg border border-gray-300 items-center text-sm font-sans bg-white'>
        <input
          type='text'
          className='w-full rounded-lg bg-transparent p-4 h-12 focus:outline-none focus:none text-black'
          placeholder='Enter your question...'
          value={input.content}
          onChange={(e) => setInput({ ...input, content: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button
          className='m-2 bg-blue-800 text-white rounded-full focus:outline-none'
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
