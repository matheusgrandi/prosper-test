import { useEffect } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/core/lib/styles/index.css';
import './PdfViewer.css';

type PdfViewerProps = {
  pdfUrl: string;
  highlightTerm?: string;
  pageIndex?: number;
};

export function PdfViewer({ pdfUrl, pageIndex }: PdfViewerProps) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();

  useEffect(() => {
    if (pageIndex) {
      pageNavigationPluginInstance.jumpToPage(pageIndex - 1);
    }
  }, [pageIndex, pageNavigationPluginInstance]);

  return (
    <div className='w-full h-screen rounded-lg p-10'>
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js'>
        <Viewer
          fileUrl={pdfUrl}
          plugins={[defaultLayoutPluginInstance, pageNavigationPluginInstance]}
        />
      </Worker>
    </div>
  );
}
