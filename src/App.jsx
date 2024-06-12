import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import CartItem from './Components/CartItem'
import Header from './Components/Header'  
import { Route, Routes } from 'react-router-dom';
import Overlay from './Components/Overlay'

function App() {
  //Хранение данных
  const [data, setData] = useState([])
  const [overlayItems, setoverlayItems] = useState([])

  const [seatch, setseatch] = useState([])


  useEffect(() => {
    async function axiosData(){
      const cardData = await axios.get('http://localhost:3001/cart');
      const overlayData = await axios.get('http://localhost:3001/overlays');

      console.log(cardData)
      setData(cardData.data)
      setoverlayItems(overlayData.data);
    }
    axiosData();
  }, [])
  

  return (
   <div>
    <Header/>
    <Routes>
      <Route path="/card" element={<CartItem item={data}/>}/>
      <Route path="/overlay" element={<Overlay overlayItems={overlayItems}/>}/>
    </Routes>
   </div>
  )
}

export default App
