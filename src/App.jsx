import { createBrowserRouter, RouterProvider } from "react-router-dom";



import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/Dpage";
import DashboardSensor from "@/routes/sensor/Dsensor";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                    path: "/"
                },
                {
                    index: true,
                    element: <DashboardSensor />,
                    path: "/sensor"
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
            ],
        },
    ]);

    return (
     
            <RouterProvider router={router} />
       
    );
}

export default App;
