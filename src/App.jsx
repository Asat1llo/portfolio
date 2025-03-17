import { Header } from './global/Header'
import { Layout } from './components/layout'
import { useState } from 'react'




function App() {

  const [color,setColor] = useState(true)
  console.log(window.name);
  


  return (
    <>
      <Header setColor={setColor} color={color} />
       <Layout color={color}/>
    </>
  )
}

export default App
