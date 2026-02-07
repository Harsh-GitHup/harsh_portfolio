import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// 1. Correct CSS imports
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// 2. STABLE CDN WORKER: 
// We use the version property from pdfjs to ensure they match perfectly.
pdfjs.GlobalWorkerOptions.src = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({ fileUrl }: { fileUrl: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full h-full bg-[#111] overflow-y-auto">
      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(error) => console.error("PDF Load Error:", error)}
        loading={<div className="text-[#39ff14] p-10">Initializing PDF...</div>}
      >
        <Page 
          pageNumber={1} 
          width={450} // Adjust this based on your design
          renderTextLayer={true}
          renderAnnotationLayer={true}
        />
      </Document>
      
      {numPages && (
        <p className="text-gray-500 text-xs py-4">
          Previewing Page 1 of {numPages}
        </p>
      )}
    </div>
  );
};

export default PdfViewer;