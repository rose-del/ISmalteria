import { Calendar, DatePicker, Space, Input } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';

const { TextArea } = Input;

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const TelaAgendamento = () => {
  const wrapperStyle = {
    width: 700,
    margin: '2cm auto', // Margem de 2 cm no topo e centralizado horizontalmente
    textAlign: 'center', // Centralizar o conteúdo horizontalmente
  };

  const itemStyle = {
    backgroundColor: '#B2D8D3',
    color: 'black',
    padding: '10px',
    marginTop: '8px',
    borderRadius: '40px',
  };

  const inlineDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '8px',
    alingInten: 'center'
  };

  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} locale={ptBR} onPanelChange={onPanelChange} />
      <div style={{ marginTop: '20px' }}>
        <span style={{ fontSize: '20px', }}>HOJE</span>
        <span style={{ marginLeft: '250px', fontSize: '20px' }}>AMANHÃ</span>
      </div>

      <div style={inlineDivStyle}>
        <div style={itemStyle}> SPA DOS PÉS</div>
        <div style={{ marginLeft: '250px' }}></div>
        <div style={itemStyle}>SPA DOS PÉS</div>
      </div>
    </div>

  );
};

export default TelaAgendamento;