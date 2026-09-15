import { Suspense } from 'react'
import './App.css'
import Catalog from './Components/Technology.tsx'
import Hero from './Components/Hero.tsx'
import './Components/Nav.tsx'
import Nav from './Components/Nav.tsx'
import type { Itechnology } from './Type/techType.tsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer.tsx'

const technologyFetch =async ():Promise<Itechnology[]>=>{
  const res =await fetch('/data.json');
  const data = await res.json();
  return data;
};


function App() {

  const technologyPromise = technologyFetch( );

  return (
    <>
     <Nav/>
     <Hero/>

     <Suspense fallback={<h2>Loading...</h2>}>
           <Catalog technologyPromise={technologyPromise}/>

     </Suspense>
     <ToastContainer 
        position="bottom-right" 
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Footer/>
    </>
  )
}

export default App
