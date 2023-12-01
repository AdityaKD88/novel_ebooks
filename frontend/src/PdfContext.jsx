import { createContext, useContext, useState } from "react";

const PdfContext = createContext();

export const PdfProvider = ({children}) => {
    const [pdfUrl, setPdfUrl] = useState('');
    const [showPdf, setShowPdf] = useState(false);

    const setPdf = (url) => {
        setPdfUrl(url);
        setShowPdf(true);
    }

    return <PdfContext.Provider value={{pdfUrl, showPdf, setPdf}}>
        {children}
    </PdfContext.Provider>
}

const usePdfContext = () => useContext(PdfContext);

export default usePdfContext;