import { Suspense } from 'react'
import './App.css'
import Catalog from './Components/Technology.tsx'
import Hero from './Components/Hero.tsx'
import './Components/Nav.tsx'
import Nav from './Components/Nav.tsx'
import type { Itechnology } from './Type/techType.tsx'

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
    </>
  )
}

export default App
