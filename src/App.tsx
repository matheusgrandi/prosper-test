import { ChatInterface } from './components/Chat/ChatInterface';
import { PdfViewer } from './components/PdfViewer/PdfViewer';

function App() {
  return (
    <div className='flex flex-col-reverse md:flex-row h-max w-screen'>
      <PdfViewer pdfUrl='https://prosper-assist-llm.s3.amazonaws.com/corpus_documents/policy_documents/hiscox_gl.pdf' />
      <ChatInterface />
    </div>
  );
}

export default App;
