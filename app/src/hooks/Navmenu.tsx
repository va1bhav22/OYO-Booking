import { lazy } from "react";
import Icons from "../assets/icons";
const IndexPage = lazy(() => import("../pages"));

interface midMenuListTypes {
  id?: number;
  title?: string;
  minTitle?: string;
  icon?: JSX.Element;
}

export const newNavMenues: navMenusProps[] = [
  { id: 1, path: "/", element: <IndexPage /> },
  {
    id: 2,
    title: "Bangalore",
    path: "/hotel-in-bangalore",
    element: "",
    subMenus: [
      {
        id: 1.1,
        title: "Koramangala",
        path: "",
      },
      {
        id: 1.2,
        title: "MG Road",
        path: "",
      },
      {
        id: 1.3,
        title: "Indiranagar",
        path: "",
      },
      {
        id: 1.4,
        title: "Malleshwaram",
        path: "",
      },
      {
        id: 1.5,
        title: "Basavanagudi",
        path: "",
      },
      {
        id: 1.6,
        title: "Whitefield",
        path: "",
      },
      {
        id: 1.7,
        title: "Marathahalli",
        path: "",
      },
    ],
  },
  {
    id: 3,
    title: "Chennai",
    path: "/hotel-in-chennai",
    element: "",
    subMenus: [
      { id: 2.1, path: "", title: "T. Nagar" },
      { id: 2.2, path: "", title: "Egmore" },
      { id: 2.3, path: "", title: "Nungambakkam" },
      { id: 2.4, path: "", title: "Guindy" },
      { id: 2.5, path: "", title: "Anna Nagar" },
      { id: 2.6, path: "", title: "Kodambakkam" },
      { id: 2.7, path: "", title: "Vadapalani" },
      { id: 2.8, path: "", title: "Porur" },
      { id: 2.9, path: "", title: "Velachery" },
      { id: 2.0, path: "", title: "Saidapet" },
    ],
  },
  {
    id: 4,
    title: "Delhi",
    path: "/hotel-in-delhi",
    element: "",
    subMenus: [
      { id: 3.1, path: "", title: "Karol Bagh" },
      { id: 3.2, path: "", title: "Paharganj" },
      { id: 3.3, path: "", title: "Saket" },
      { id: 3.4, path: "", title: "Nehru Place" },
      { id: 3.5, path: "", title: "Greater Kailash" },
      { id: 3.6, path: "", title: "Dwarka" },
      { id: 3.7, path: "", title: "Rohini" },
      { id: 3.8, path: "", title: "Laxmi Nagar" },
      { id: 3.9, path: "", title: "Preet Vihar" },
      { id: 3.0, path: "", title: "Rajouri Garden" },
    ],
  },
  // {
  //   id: 5,
  //   title: "Delhi",
  //   path: "/hotel-in-delhi",
  //   element: "",
  // },
  {
    id: 6,
    title: "Gurgaon",
    path: "/hotel-in-gurgaon",
    element: "",
    subMenus: [
      { id: 4.1, path: "", title: "Sohna Road" },
      { id: 4.2, path: "", title: "Sector 14" },
      { id: 4.3, path: "", title: "Udyog Vihar" },
      { id: 4.4, path: "", title: "Sushant Lok" },
      { id: 4.5, path: "", title: "Sector 45" },
      { id: 4.6, path: "", title: "Palam Vihar" },
      { id: 4.7, path: "", title: "Sector 56" },
      { id: 4.8, path: "", title: "Sector 49" },
      { id: 4.9, path: "", title: "Sector 50" },
    ],
  },
  {
    id: 7,
    title: "Hyderabad",
    path: "/hotel-in-hyderabad",
    element: "",
    subMenus: [
      { id: 5.1, path: "", title: "Banjara Hills" },
      { id: 5.2, path: "", title: "Jubilee Hills" },
      { id: 5.3, path: "", title: "Begumpet" },
      { id: 5.4, path: "", title: "Ameerpet" },
      { id: 5.5, path: "", title: "Secunderabad" },
      { id: 5.6, path: "", title: "Gachibowli" },
      { id: 5.7, path: "", title: "Madhapur" },
      { id: 5.8, path: "", title: "Kondapur" },
      { id: 5.9, path: "", title: "Somajiguda" },
    ],
  },
  {
    id: 8,
    title: "Kolkata",
    path: "/hotel-in-kolkata",
    element: "",
    subMenus: [
      { id: 6.1, path: "", title: "Park Street" },
      { id: 6.2, path: "", title: "Esplanade" },
      { id: 6.3, path: "", title: "Ballygunge" },
      { id: 6.4, path: "", title: "Camac Street" },
      { id: 6.5, path: "", title: "New Town" },
      { id: 6.6, path: "", title: "Howrah" },
      { id: 6.7, path: "", title: "Sealdah" },
      { id: 6.8, path: "", title: "Rajarhat" },
      { id: 6.9, path: "", title: "Alipore" },
    ],
  },
  {
    id: 9,
    title: "Mumbai",
    path: "/hotel-in-mumbai",
    element: "",
    subMenus: [
      { id: 7.1, path: "", title: "Colaba" },
      { id: 7.2, path: "", title: "Marine Drive" },
      { id: 7.3, path: "", title: "Andheri" },
      { id: 7.4, path: "", title: "Bandra" },
      { id: 7.5, path: "", title: "Juhu" },
      { id: 7.6, path: "", title: "Powai" },
      { id: 7.7, path: "", title: "Goregaon" },
      { id: 7.8, path: "", title: "Malad" },
      { id: 7.9, path: "", title: "Dadar" },
    ],
  },
  {
    id: 10,
    title: "Noida",
    path: "/hotel-in-noida",
    element: "",
    subMenus: [
      { id: 8.1, path: "", title: "Greater Noida" },
      { id: 8.2, path: "", title: "Sector 18" },
      { id: 8.3, path: "", title: "Sector 62" },
      { id: 8.4, path: "", title: "Sector 50" },
      { id: 8.5, path: "", title: "Sector 15" },
      { id: 8.6, path: "", title: "Sector 12" },
      { id: 8.7, path: "", title: "Sector 135" },
      { id: 8.8, path: "", title: "Sector 76" },
      { id: 8.9, path: "", title: "Sector 125" },
    ],
  },
  {
    id: 11,
    title: "Pune",
    path: "/hotel-in-pune",
    element: "",
    subMenus: [
      { id: 9.1, path: "", title: "Koregaon Park" },
      { id: 9.2, path: "", title: "Kothrud" },
      { id: 9.3, path: "", title: "Baner" },
      { id: 9.4, path: "", title: "Viman Nagar" },
      { id: 9.5, path: "", title: "Hinjewadi" },
      { id: 9.6, path: "", title: "Aundh" },
      { id: 9.7, path: "", title: "Magarpatta " },
      { id: 9.8, path: "", title: "Wakad" },
      { id: 9.9, path: "", title: "Bhosari" },
    ],
  },
  {
    id: 12,
    title: "All Cities",
    path: "/all-cities",
    element: "",
  },
];

export const midMenuList: midMenuListTypes[] = [
  {
    id: 1,
    title: "OYO for Business",
    minTitle: "Trusted by 5000 Corporates",
    icon: <Icons.hotel />,
  },
  {
    id: 1,
    title: "List your property",
    minTitle: "Start earning in 30 mins",
    icon: <Icons.call />,
  },
  {
    id: 1,
    title: "0124-6201611",
    minTitle: "Call us to Book now",
    icon: <Icons.world />,
  },
];
