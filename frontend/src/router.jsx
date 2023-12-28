import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import {Home} from "./pages/Home"
import { Faves } from "./pages/Faves"
import { LoginPage } from "./pages/LoginPage"
import { SignUp } from "./pages/SignUp"
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/watchlist",
                element: <Faves/>
            },{
                path:"/login",
                element: <LoginPage/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            }
        ]
    }
])

export default router;