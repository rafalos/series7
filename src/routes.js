import Home from "./components/Home"
import Series from "./components/series/Series"
import New from "./components/series/New"
import Details from "./components/series/Details"
import List from "./components/series/List"
import Signup from "./components/user/Signup"
import Signin from "./components/user/Signin"
import store from "./store/store"
import UserProfile from "./components/user/UserProfile"
import AdminDashboard from "./components/admin/Dashboard"
import About from "./components/About"
import Genres from "./components/series/Genres"

export const routes = [
    {path: "/", component: Home},
    {path: "/genres", component: Genres},
    {path: "/series", component: Series, children: [
        { path: "", component: List },
        { path: ":id", component: Details }
    ]},
    {
        path: "/new", 
        component: New,
        beforeEnter: (to, from, next) => {
            if(store.state.idToken) {
                next()
            } else {
                next("/signin")
            }
        }
    },
    {path: "/signup", component: Signup},
    {path: "/signin", component: Signin},
    {path: "/profile", component: UserProfile},
    {
        path: "/admin", 
        component: AdminDashboard,
        beforeEnter: (to, from, next) => {
            if(store.state.isAdmin) {
                next()
            } else {
                next("/")
            }
        }
    },
    {path: "/about", component: About}
]