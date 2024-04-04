import React from 'react';
import { Space, Typography, Table, Tag } from 'antd';
const { Text } = Typography;

const columns = [
  {
    title: 'Nome',
    dataIndex: 'nome',
    key: 'nome',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Cidade',
    dataIndex: 'Cidade',
    key: 'Cidade',
  },
  {
    title: 'Endereço',
    dataIndex: 'Endereço',
    key: 'Endereço',
  },
  {
    title: 'Produto',
    key: 'Produto',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    render: (_, record) => (
      <Space size="middle">
      </Space>
    ),
  },
];
const data = [
  {
    nome: 'KAUAN SILVA',
    Endereço: 'Moisés benjamin de Sales',
    Cidade: 'Areial',
    tags: ['ESFOLIANTE'],
  },
  {
    nome: 'ROSENILDA SANTOS',
    Endereço: "Moisés benjamin de Sales",
    Cidade: 'Remigio',
    tags: ['ESFOLIANTE'],
  },
  {
    nome: 'GABRIEL LUIZ',
    Endereço: 'Moisés benjamin de Sales',
     Cidade: 'Areial',
    tags: ['ESFOLIANTE'],
  },
];

 function TableComponent() {
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default function App() {
  return (
    <>
      <Space direction="vertical">
      <h2 style={{marginTop:"10%"}}>ENCOMENDAS</h2>
        <Text>HOJE</Text>
      </Space>
      <TableComponent/>
    </>
    
  )
}
