import './App.css';
import { ChatInterface } from './components/Chat/ChatInterface';

function App() {
  //  <iframe
  //    src='https://prosper-assist-llm.s3.amazonaws.com/corpus_documents/policy_documents/hiscox_gl.pdf#page='
  //    width='100%'
  //    height='100%'
  //    title='Hiscox GL Policy'
  //  />;
  return (
    <div className='flex justify-center items-center h-screen'>
      <ChatInterface />
    </div>
  );
}

export default App;
