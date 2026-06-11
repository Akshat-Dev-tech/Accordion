import { useState } from 'react'
import './App.css'

function App() {

  const [show,setShow]=useState<number|null>(null)
  const accordVals = [
    {
      "id": 1,
      "title": "Getting Started",
      "content": "Learn the basics and set up everything you need to begin your journey."
    },
    {
      "id": 2,
      "title": "Features",
      "content": "Explore the key features, capabilities, and benefits available in the platform."
    },
    {
      "id": 3,
      "title": "Pricing",
      "content": "Review available plans, pricing details, and subscription options."
    },
    {
      "id": 4,
      "title": "Frequently Asked Questions",
      "content": "Find answers to common questions and troubleshooting tips."
    },
    {
      "id": 5,
      "title": "Contact Support",
      "content": "Reach out to our support team for assistance with any issues or inquiries."
    }
  ]


  return (
    <>   
     <h1>Accordion</h1>  
    {accordVals.map((accordion)=>(
      <>
        <h4 className='title-hover' onClick={()=>{setShow((show)=>show===accordion.id ? null : accordion.id)}}>{accordion.title}</h4>
        <span>{show===accordion.id? '>':'<'}</span>
        <p className={accordion.id != show ? 'hide' : ''}>{accordion.content}</p>
      </>
    ))}
    </>
  )
}

export default App
