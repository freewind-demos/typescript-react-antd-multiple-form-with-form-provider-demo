import Form from 'antd/lib/form';
import {FormInstance} from 'antd/lib/form/hooks/useForm';
import Input from 'antd/lib/input';
import React, {FC} from 'react';
import {FormData} from './typings';

type Props = {
  form: any
}

export const Form1: FC<Props> = ({form}) => {
  return <Form form={form}>
    <Form.Item name="form1" label="Form1">
      <Input/>
    </Form.Item>
  </Form>;
}
