import React, { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const TelaServico = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Manicure e pedicure",
      preço: "R$ 20.00",
      description: "Utilizamos técnicas e instrumentos específicos, como alicates, cortadores, lixas, fortalecedores, esmaltes, palitos, espátulas, etc.",
      image: "../imagemX.png",
    },
    {
      id: 2,
      title: "Spá dos pés",
      preço: "R$ 20.00",
      description: "Utilizamos técnicas e instrumentos específicos, como alicates, cortadores, lixas, fortalecedores, esmaltes, palitos, espátulas, etc.",
      image: "../imagemX.png",
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Esfoliante",
      preço: "R$ 20,00",
      image: "../imagemX.png",
      description: "Esse produto serve para...",

    },
    {
      id: 2,
      title: "Esfoliante de melancia",
      preço: "R$ 20,00",
      image: "../imagemX.png",
      description: "Esse produto serve para...",

    },
  ]);

  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [serviceModalVisible, setServiceModalVisible] = useState(false);
  const [productModalVisible, setProductModalVisible] = useState(false);

  const handleEditServiceClick = (service) => {
    setSelectedService(service);
    setServiceModalVisible(true);
  };

  const handleDeleteServiceClick = (serviceId) => {
    const updatedServices = services.filter((service) => service.id !== serviceId);
    setServices(updatedServices);
  };

  const handleEditProductClick = (product) => {
    setSelectedProduct(product);
    setProductModalVisible(true);
  };

  const handleDeleteProductClick = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleSaveService = (editedService) => {
    // Atualiza o serviço na lista
    const updatedServices = services.map((service) =>
      service.id === editedService.id ? editedService : service
    );
    setServices(updatedServices);
    setServiceModalVisible(false);
  };

  const handleSaveProduct = (editedProduct) => {
    // Atualiza o produto na lista
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    setProductModalVisible(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {services.map((service) => (
          <Card key={service.id} title={service.title} extra={service.preço}
            style={{ width: "400px", margin: "16px" }}
            size="small" hoverable>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img
                style={{ width: "100px", margin: "8px" }}
                src={service.image} alt={service.title}
              />
              <p>{service.description}</p>
            </div>
            <Button onClick={() => handleEditServiceClick(service)}>
              <span className="material-symbols-outlined">edit</span>
            </Button>
            <Button onClick={() => handleDeleteServiceClick(service.id)}>
              <span className="material-symbols-outlined">delete</span>
            </Button>
          </Card>
        ))}
        <Link to="/AddProcedimento"
          style={{
            position: 'relative',
            left: "1px",
            top: "230px",
          }}>
          <Button
            type="primary"
            size="large"
            style={{ background: '#B2D8D3' }}
          >ADICIONAR PROCEDIMENTO
          </Button>
        </Link>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <Card key={product.id} title={product.title} extra={product.preço}
            style={{ width: "400px", margin: "16px" }}
            size="small" hoverable>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img
                style={{ width: "100px", margin: "8px" }}
                src={product.image} alt={product.title}
              />
              <p>{product.description}</p>
            </div>
            <Button onClick={() => handleEditProductClick(product)}>
              <span className="material-symbols-outlined">edit</span>
            </Button>
            <Button onClick={() => handleDeleteProductClick(product.id)}>
              <span className="material-symbols-outlined">delete</span>
            </Button>
          </Card>
        ))}
        <Link to="/AddProcedimento"
          style={{
            position: 'relative',
            left: "1px",
            top: "230px",
          }}>
          <Button
            type="primary"
            size="large"
            style={{ background: '#B2D8D3' }}
          >ADICIONAR PRODUTO
          </Button>
        </Link>
      </div>
      <Modal
        title="Editar Serviço"
        visible={serviceModalVisible}
        onCancel={() => setServiceModalVisible(false)}
        footer={null}
      >
        {selectedService && (
          <ServiceEditForm service={selectedService} onSave={handleSaveService} />
        )}
      </Modal>
      <Modal
        title="Editar Produto"
        visible={productModalVisible}
        onCancel={() => setProductModalVisible(false)}
        footer={null}
      >
        {selectedProduct && (
          <ProductEditForm product={selectedProduct} onSave={handleSaveProduct} />
        )}
      </Modal>
    </div>
  );
};

const ServiceEditForm = ({ service, onSave }) => {
  const [editedService, setEditedService] = useState(service);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedService({ ...editedService, [name]: value });
  };

  const handleSubmit = () => {
    onSave(editedService);
  };

  return (
    <div>
      <label htmlFor="title">Nome: </label>
      <input
        type="text"
        name="title"
        value={editedService.title}
        onChange={handleInputChange}
      />
      <label htmlFor="preço">Preço: </label>
      <input
        type="text"
        name="preço"
        value={editedService.preço}
        onChange={handleInputChange}
      />
      <label htmlFor="description">Descrição: </label>
      <textarea
        name="description"
        value={editedService.description}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Salvar</button>
    </div>
  );
};

const ProductEditForm = ({ product, onSave }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = () => {
    onSave(editedProduct);
  };

  return (
    <div>
      <label htmlFor="title">Nome: </label>
      <input
        type="text"
        name="title"
        value={editedProduct.title}
        onChange={handleInputChange}
      />
      <label htmlFor="preço">Preço: </label>
      <input
        type="text"
        name="preço"
        value={editedProduct.preço}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Salvar</button>
    </div>
  );
};

export default TelaServico;
