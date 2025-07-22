import {ChartColumn, LayoutDashboard , NotepadText } from "lucide-react";




export const navbarLinks = [
    {
        title: "",
        links: [
            { label: "Dashboard", path: "/", icon: LayoutDashboard  },
            { label: "Sensor", path: "/sensor", icon:  ChartColumn},
            { label: "Report", path: "/report", icon: NotepadText  },
            { label: "Monitor", path: "/monitor", icon: ChartColumn },
        ],
    },
];


export const navbarSetting = [
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                path: "/settings",
            },
        ],
    },
]



