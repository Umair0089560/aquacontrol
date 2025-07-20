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

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];


