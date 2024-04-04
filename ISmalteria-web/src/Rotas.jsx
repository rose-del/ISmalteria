import React from 'react';
import { NavLink } from 'react-router-dom';

import { DatabaseFilled, EnvironmentOutlined, CalendarFilled, UserOutlined, ShoppingOutlined } from '@ant-design/icons';

export default [
{
  label: (<NavLink to="/">Serviços</NavLink>),
  key: "serviço",
  icon: <DatabaseFilled />
},  
{
  label: (<NavLink to="/agendamento">Agendamentos</NavLink>),
  key: "agendamento",
  icon: <CalendarFilled />
},
{
  label: (<NavLink to="/compras">Compras</NavLink>),
  key: "compras",
  icon: <ShoppingOutlined />
}, 
{
  label: (<NavLink to="/mapa">Mapa</NavLink>),
  key: "mapa",
  icon: <EnvironmentOutlined />
},
{
  label: (<NavLink to="/perfil">Perfil</NavLink>),
  key: "perfil",
  icon: <UserOutlined />
},
];
