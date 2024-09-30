import React, { useState } from 'react';
import { Button, Form, Input, Divider, Row, Col, InputNumber } from 'antd';
import { EditFilled } from '@ant-design/icons';
import TransferLayout from '../Transfer/TransferLayout';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const App = ({ item, onFormSubmit }) => {
  const [form] = Form.useForm();
  const [inputStyles, setInputStyles] = useState('none');
  const [spanStyles, setSpanStyles] = useState('block');
  const [buttonText, setButtonText] = useState('Continue');
  const [cols, setCols] = useState(18);
  const [items, setItems] = useState(item.length >= 1 ? item[0] : item);

  const dynamicForm = {
    input: {
      display: inputStyles
    },
    span:{
      display: spanStyles
    }
  }

  const onFinish = (values) => {
    console.log('Received values of form:', values);

    if (onFormSubmit) {
      onFormSubmit(values, item);
    }
  };

  const onEdit = () => {
    setInputStyles('block');
    setSpanStyles('none');
    setButtonText('Save');
    console.log('Received values of form: ', form.getFieldsValue());
  };

  const cancelEdit = () => {
    setInputStyles('none');
    setSpanStyles('block');
    setButtonText('Continue');
  };

  const handleSubmit = () => {
    if (onFormSubmit) {
      onFormSubmit(buttonText);
    }
    if (buttonText === 'Continue') {
    //     console.log('Continue');
    //     document.getElementById('lists').classList.remove('toggle_show');
    //     document.getElementById('lists').classList.add('toggle_hide');
    //     document.getElementById('divider').style.display = 'block';
    //     document.getElementById('divider').classList.add('toggle_show')
    //     setTimeout( () => {
    //       setCols(10);
    //       document.getElementById('details_row').classList.remove('move_right');
    //       document.getElementById('details_row').classList.add('move_left');
    //       document.getElementById('transfer').classList.add('toggle_show')
    //       document.getElementById('transfer').style.display = 'block';
    //     }, 400);
    }
    else if (buttonText === 'Save') {
      console.log('Received values of form: ', form.getFieldsValue());
    }
    else if (buttonText === 'Back') {
    //   document.getElementById('divider').classList.add('toggle_show')
    //   document.getElementById('divider').style.display = 'none';
    //   setTimeout( () => {
    //     setCols(18);
    //     document.getElementById('details_row').classList.remove('move_left');
    //     document.getElementById('details_row').classList.add('move_right');
    //     document.getElementById('transfer').classList.remove('toggle_hide');
    //     document.getElementById('transfer').style.display = 'none';
    //     document.getElementById('lists').classList.remove('toggle_hide');
    //     document.getElementById('lists').classList.add('toggle_show');
    //   }, 400);
      setButtonText('Continue');
    }
  }

  return (
    <Row>
    <Col span={cols} >
      <Form
        wrapperCol={{ span: 20 }}
        style={{
          padding: '1% 0 0 2%',
        }}
        {...formItemLayout}
        form={form}
        name="detailsForm"
        onFinish={onFinish}
        initialValues={{
          ...item,
        }}
      >
        <Row 
          style={{ paddingBottom: '5%' }}
        >
        <Col span={8}>
          <Button onClick={cancelEdit} style={dynamicForm.input} type="dashed" danger>
            Cancel
          </Button>
        </Col>
        <Col style={{ width: '100%', display: 'flex', justifyContent: 'right' }} span={12} >
          <EditFilled
            style={{ fontSize: '1.2rem', padding: '2%' }}
            action="click"
            onClick={onEdit}
          />
        </Col>
        {/* </div> */}
        </Row>

      {/* Sifra */}
      <Form.Item labelAlign="left" labelCol={{ span: 5 }} label="Sifra">
        <span style={dynamicForm.span} >{items.sifra}</span>
        <Form.Item name="sifra" noStyle>
          <InputNumber style={dynamicForm.input} value={items.sifra} />
        </Form.Item>
      </Form.Item>

      {/* Head Type */}
      <Form.Item labelAlign="left" labelCol={{ span: 5 }} label="Head type">
        <span style={dynamicForm.span} >{items.head_type}</span>
        <Form.Item name="head_type" noStyle>
          <Input style={dynamicForm.input} type="text" value={items.head_type} />
        </Form.Item>
      </Form.Item>

      {/* Type */}
      <Form.Item labelAlign="left" labelCol={{ span: 5 }} label="Type">
        <span style={dynamicForm.span} >{items.type}</span>
        <Form.Item name="type" noStyle>
          <Input style={dynamicForm.input} type="text" value={items.type} />
        </Form.Item>
      </Form.Item>

      {/* Opis */}
      <Form.Item labelAlign="left" labelCol={{ span: 5 }} label="Opis">
        <span style={dynamicForm.span} >{items.opis}</span>
        <Form.Item name="opis" noStyle>
          <Input style={dynamicForm.input} type="text" value={items.opis} />
        </Form.Item>
      </Form.Item>

      <Divider />

      <p style={{ fontWeight: '300', fontSize: '1.5rem' }}>Prodazni Informacii</p>

      {/* Cena */}
      <Form.Item labelAlign="left" labelCol={{ span: 5 }} label="Cena">
        <span style={dynamicForm.span} >{items.cena} MKD</span>
        <Form.Item name="cena" noStyle>
          <InputNumber style={dynamicForm.input} value={items.cena} />
        </Form.Item>
      </Form.Item>

      {/* Komada */}
      <Form.Item labelAlign="left" labelCol={{ span: 5 }} label="Komada">
        <span style={dynamicForm.span} >{items.komada}</span>
        <Form.Item name="komada" noStyle>
          <InputNumber style={dynamicForm.input} value={items.komada} />
        </Form.Item>
      </Form.Item>

      {/* Total Komada */}
      <Form.Item labelAlign="left" labelCol={{ span: 5 }} label="Total komada">
        <span >{items.komada * items.cena} MKD</span>
        <Form.Item name="total_komada" noStyle>
          <Input type="hidden" value={items.komada * items.cena} />
        </Form.Item>
      </Form.Item>

      {/* Submit Button */}
      <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
        <Button onClick={handleSubmit} style={{ marginTop: '5%' }} type="primary" htmlType="submit">
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  </Col>
  <Col id='divider' style={{ display: 'none' }} span={2}>
  <div style={{ display: 'flex', alignItems: 'center', height: '100%', marginLeft: '20%' }}>
    <span style={{ marginRight: '10px' }}>Item</span>
    <Divider type="vertical" style={{ height: "100%" }} />
    <span style={{ marginLeft: '10px' }}>To</span>
  </div>
  </Col>
  <Col style={{ display: 'none', marginLeft: '5%' }} className='toggle_hide' id='transfer' span={8} >
    <TransferLayout/>
  </Col>
  </Row>
);
};

export default App;