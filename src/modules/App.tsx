import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy, Suspense} from "react";

const Home = lazy(() => import('./pages/Home'))

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<p>Cargando...</p>}> <Home /> </Suspense>,

    }
])

export const App = () : JSX.Element => {

    return (
        <RouterProvider router={router} />
    )

}