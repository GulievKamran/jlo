
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css";
import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(

<BrowserRouter>
<Toaster
  position="top-center"

  reverseOrder={false}
/>
<App />
</BrowserRouter>  
)
