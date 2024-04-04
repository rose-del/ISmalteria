import "../estilos/App.css";
import { Layout, Menu, Button } from 'antd'; 
import items from "../Rotas";
import { Outlet, Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;

export default () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
      backgroundColor: '#B2D8D3', 
      display: "flex", 
      justifyContent: "space-between" 
    }}>
        <div>
          <img
            src="./public/logo.svg"
            alt="Logo da Empresa"
            style={{
              width: 'auto',
              height: '80px'
            }}
          />
        </div>
        <div>
          <Link to='/login' style={{ marginRight: '10px' }}>Login</Link> 
          <Link to="/cadastro">Cadastro</Link>
        </div>
      </Header>
      <Layout >
        <Sider style={{ backgroundColor: '#B2D8D3' }} >
          <Menu
            mode="vertical"
            items={items}
            style={{ backgroundColor: '#B2D8D3' }}
          />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
