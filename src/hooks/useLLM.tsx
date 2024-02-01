import { useState } from 'react';

export type fetchResponse = {
  data: string;
  reference: string;
};

export default function useLLM() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async (question: string): Promise<fetchResponse | void> => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://prosper-conversations-beta.onrender.com/assistant/ask_question',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Api-Key': 'test-challenge',
            'X-Organization': 'test',
          },
          body: JSON.stringify({ question }),
        }
      );

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      setIsLoading(false);
      setError(null);
      return { data: data.message.text, reference: data.message.citations[0] };
    } catch (error) {
      setIsLoading(false);
      setError('An error occurred while fetching data');
      return;
    }
  };
  return { fetchData, error, isLoading };
}
