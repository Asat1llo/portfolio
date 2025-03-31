import { Header } from './global/Header'
import { Layout } from './components/layout'
import { useEffect, useState } from 'react'
import {language} from './data/localization'



function App() {

  const [color,setColor] = useState(true)
  const [lan,setLan] = useState('en') 
  
  


  return (
    <>
      <Header setColor={setColor} color={color} setLan={setLan} lan={lan}/>
       <Layout color={color} language={language} lan={lan} ldata={language}/>
    </>
  )
}

export default App
