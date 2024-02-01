import { useState, useEffect } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { highlightPlugin } from '@react-pdf-viewer/highlight';

import '@react-pdf-viewer/core/lib/styles/index.css';
import './PdfViewer.css';

type PdfViewerProps = {
  pdfUrl: string;
  searchTerm?: string;
  pageIndex?: number;
};

export function PdfViewer({ pdfUrl }: PdfViewerProps) {
  // const [searchTermState, setSearchTermState] = useState('');
  // const [page, setPage] = useState(0);

  // useEffect(() => {
  //   if (searchTerm) {
  //     setSearchTermState(searchTerm);
  //   }
  // }, [searchTerm]);

  // useEffect(() => {
  //   if (pageIndex) {
  //     setPage(pageIndex);
  //   }
  // }, [pageIndex]);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className='w-3/6 h-screen rounded-lg p-10'>
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js'>
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
}
