import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Suspense} from "react";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<p>Cargando...</p>}><h1>Weather App Hello World!</h1></Suspense>,

    }
])

export const App = () : JSX.Element => {

    return (
        <RouterProvider router={router} />
    )

}