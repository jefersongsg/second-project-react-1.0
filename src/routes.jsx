import {createBrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import ListUsers from './pages/ListUsers/'


const Router =createBrowserRouter([
    {
        path:'/',
        element:<Home/>  
    },

    {  
        path:'/users',
        element:<ListUsers/>
    }
])


export default Router