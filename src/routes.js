import { HOME, NEW_ROUTE, EDIT_ROUTE } from "./utils/consts"
import Home from './pages/Home'
import NewGradient from './pages/NewGradient'
import EditGradient from './pages/EditGradient'

export const publicRoutes = [
    {
        path: HOME,
        Component: Home
    },
    {
        path: NEW_ROUTE,
        Component: NewGradient
    },
    {
        path: EDIT_ROUTE + '/:id',
        Component: EditGradient
    }
];