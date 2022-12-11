import './App.css';
import pdfFile from "./doc/nssf-demo-project.pdf"

function App() {
  return (
    <div className="" style={{minHeight: '100vh'}}>
      <iframe 
      style={{background : 'white', minHeight: '100vh'}}
        src={`${pdfFile}`}
        frameborder="0"
        // height={600}
        width="100%"
      ></iframe>
    </div>
  );
}

export default App;
