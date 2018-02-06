import Home from "./components/Home"
import Series from "./components/series/Series"
import New from "./components/series/New"
import Details from "./components/series/Details"
import List from "./components/series/List"
import Signup from "./components/user/Signup"
import Signin from "./components/user/Signin"

export const routes = [
    {path: "/", component: Home},
    {path: "/series", component: Series, children: [
        { path: "", component: List },
        { path: ":id", component: Details }
    ]},
    {path: "/new", component: New},
    {path: "/signup", component: Signup},
    {path: "/signin", component: Signin}
]