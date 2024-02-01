import { useState } from 'react';
import { ChatInterface } from './components/Chat/ChatInterface';
import { PdfViewer } from './components/PdfViewer/PdfViewer';

function App() {
  const [pageIndex, setPageIndex] = useState<number | undefined>(1);

  const handlePageChange = (pageIndex: number) => {
    setPageIndex(pageIndex);
  };

  return (
    <div className='flex flex-col-reverse md:flex-row h-screen w-screen overflow-auto'>
      <PdfViewer
        pdfUrl='https://prosper-assist-llm.s3.amazonaws.com/corpus_documents/policy_documents/hiscox_gl.pdf'
        pageIndex={pageIndex}
      />
      <ChatInterface handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;
