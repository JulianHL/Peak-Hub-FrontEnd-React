import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexComponent from './components/IndexComponent'
import ViewProductComponent from './components/ViewProductComponent'
import ViewLocationComponent from './components/ViewLocationComponent'


function App() {



  return (
    <>
    <BrowserRouter>

        <HeaderComponent />

          <Routes>
            <Route path='/' element ={<IndexComponent />}></Route>
            <Route path='/view-product/:id' element ={<ViewProductComponent />}></Route>
            <Route path='/view-location/:id' element ={<ViewLocationComponent />}></Route>
            
          </Routes>
        
        <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
