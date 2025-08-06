
import './App.css'

import {createBrowserRouter,RouterProvider} from "react-router-dom"

import Home from "./pages/Home"


const routes=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  
])
function App() {

  return (
      <div>
        <RouterProvider router={routes}/>
  
          </div>   
  )
}

export default App
