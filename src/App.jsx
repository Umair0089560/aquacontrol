import { createBrowserRouter, RouterProvider } from "react-router-dom";



import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/Dpage";
import DashboardSensor from "@/routes/sensor/Dsensor";
import DashboardReport from "@/routes/report/Report";
import DashboardMoniter from "./routes/moniter/Moniter";

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
                    index: true,
                    element: <DashboardReport />,
                    path: "/report"
                },
                {
                    index: true,
                    element: <DashboardMoniter />,
                    path: "/moniter"
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
