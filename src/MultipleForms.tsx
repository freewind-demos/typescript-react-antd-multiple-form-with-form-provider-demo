import 'antd/dist/antd.css';

import React, {FC} from 'react'
import {Form, Button} from 'antd';
import {Form1} from './Form1';
import {Form2} from './Form2';

type FormData = {
  note?: string;
  gender?: 'male' | 'female';
}

export const MultipleForms: FC = () => {
  const [form] = Form.useForm<FormData>();

  function onFinish() {
    console.log("### form.getFieldsValue()", form.getFieldsValue())
  }

  // Two forms with same 'form' object don't work
  return (
    <Form form={form} onFinish={onFinish}>
      <Form1 form={form}/>
      <Form2 form={form}/>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};
