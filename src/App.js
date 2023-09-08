import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import samplePDF from "./terrania.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js'

function App() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div id="row" style={{ height: "100vh", width: "100vw", display: "flex" }}>
      <Document
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}

export default App;
