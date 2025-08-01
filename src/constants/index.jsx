import {ChartColumn, LayoutDashboard , NotepadText, SquareActivity  } from "lucide-react";




export const navbarLinks = [
    {
        title: "",
        links: [
            { label: "Dashboard", path: "/", icon: LayoutDashboard  },
            { label: "Sensor", path: "/sensor", icon:  ChartColumn},
            { label: "Report", path: "/report", icon: NotepadText  },
            { label: "Moniter", path: "/moniter", icon: SquareActivity  },
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






