import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TelaLogin from './telas/TelaLogin';
import TelaCadastro from './telas/TelaCadastro';
import TelaRedefinirSenha from './telas/TelaRedefinirSenha';
import TelaMenu from './telas/TelaMenu';
import TelaAgendamento from './telas/TelaAgendamento';
import TelaServico from './telas/TelaServico';
import TelaMapa from './telas/TelaMapa';
import TelaPerfil from "./telas/TelaPerfil";
import TelaCompras from "./telas/TelaCompras";
import TelaAddProced from "./telas/TelaAddProcedimento";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <TelaLogin />,
    },
    {
      path: '/cadastro',
      element: <TelaCadastro />,
    },
    {
      path: '/redefinirSenha',
      element: <TelaRedefinirSenha />,
    },
    {
      path: '/AddProcedimento',
      element: <TelaAddProced />,
    },
      {
      path: '/',
      element: <TelaMenu />,
      children: [
        {
          path: '/',
          element: <TelaServico />,
        },
        {
          path: '/agendamento',
          element: <TelaAgendamento />,
        },
        {
          path: '/mapa',
          element: <TelaMapa />,
        },
        {
          path: "/perfil",
          element: <TelaPerfil />,
        },
        {
          path: "/compras",
          element: <TelaCompras />,
        },
      ]}
    
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
