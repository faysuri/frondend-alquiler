/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Icons from "views/examples/Icons.jsx";

*/
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Icons from "views/examples/Icons.jsx";
import Tables from "views/examples/Tables.jsx";
import Index from "views/Index.jsx";
import Vehiculo from "./views/vehiculo.jsx";
import Alquiler from "./views/Alquiler.jsx";
import seguro from "./views/seguro";
import Cliente from "./views/Cliente";
import Entrega from "./views/Entrega";
import Factura from "./views/Factura";
import Reserva from "./views/Reserva";
import Servicio from "./views/Servicio";
import Tipo_pago from "./views/Tipo_pago";
import Tipo_seguro from "./views/tipo_seguro";
import Tipo_vehiculo from "./views/Tipo_vehiculo";
import Usuarios from "./views/Usuarios";
import Tipo_servicio from "./views/Tipo_servicio";
import Tarifa from "./views/Tarifa";
import Detalle from "./views/Detalle";
var routes = [
  {
    path: "/index",
    name: "Principal",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/vehiculo",
    name: "Vehiculos",
    icon: "ni ni-bus-front-12 text-blue",
    component: Vehiculo,
    layout: "/admin"
  },
  {
    path: "/Alquiler",
    name: "Alquiler",
    icon: "ni ni-like-2 text-primary",
    component: Alquiler,
    layout: "/admin"
  },
  {
    path: "/Detalle",
    name: "Detalle",
    icon: "ni ni-align-left-2 text-primary",
    component:Detalle,
    layout: "/admin"
  },
  {
    path: "/seguro",
    name: "Seguro",
    icon: "ni ni-lock-circle-open text-blue",
    component: seguro,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tablas",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/Cliente",
    name: "Cliente",
    icon: "ni ni-tv-2 text-primary",
    component: Cliente,
    layout: "/admin"
  },
  {
    path: "/Entrega",
    name: "Entrega",
    icon: "ni ni-spaceship text-blue",
    component: Entrega,
    layout: "/admin"
  },
  {
    path: "/Reserva",
    name: "Reserva",
    icon: "ni ni-calendar-grid-58 text-blue",
    component: Reserva,
    layout: "/admin"
  },
  {
    path: "/Factura",
    name: "Factura",
    icon: "ni ni-archive-2 text-blue",
    component: Factura,
    layout: "/admin"
  },
 
  {
    path: "/Servicio",
    name: "Servicio",
    icon: "ni ni-settings text-blue",
    component: Servicio,
    layout: "/admin"
  },
  {
    path: "/Tipo_pago",
    name: "Tipo de pago",
    icon: "ni ni-chart-bar-32 text-blue",
    component: Tipo_pago,
    layout: "/admin"
  },
  {
    path: "/Tipo_seguro",
    name: "Tipo de seguro",
    icon: "ni ni-tv-2 text-primary",
    component: Tipo_seguro,
    layout: "/admin"
  },
  {
    path: "/Tipo_servicio",
    name: "Tipo de servicio",
    icon: "ni ni-settings-gear-65 text-primary",
    component: Tipo_servicio,
    layout: "/admin"
  },
  {
    path: "/Tarifa",
    name: "Tarifas",
    icon: "ni ni-money-coins text-blue",
    component: Tarifa,
    layout: "/admin"
  },
  {
    path: "/Tipo_vehiculo",
    name: "Tipo de vehiíulo",
    icon: "ni ni-delivery-fast text-primary",
    component: Tipo_vehiculo,
    layout: "/admin"
  },
  
  {
    path: "/Usuarios",
    name: "Usuarios",
    icon: "ni ni-badge text-primary",
    component: Usuarios,
    layout: "/admin"
  },
  {
  path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  
  {
    path: "/user-profile",
    name: "Perfíl",
    icon: "ni ni-single-02 text-blue",
    component: Profile,
    layout: "/admin"
  },

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-blue",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Registrar",
    icon: "ni ni-circle-08 text-blue",
    component: Register,
    layout: "/auth"
  }
];

export default routes;
