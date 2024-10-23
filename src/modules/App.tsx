import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy, Suspense} from "react";
import { CurrentWeatherStatsLoader } from "./pages/Home";

const Home = lazy(() => import('./pages/Home'))

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<p>Cargando...</p>}> <Home /> </Suspense>,
        loader: CurrentWeatherStatsLoader

    }
])

export const App = () : JSX.Element => {

    return (
        <RouterProvider router={router} />
    )

}