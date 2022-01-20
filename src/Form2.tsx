import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import React, {FC} from 'react';

type Props = {
  form: any
}

export const Form2: FC<Props> = ({form}) => {
  return <Form form={form}>
    <Form.Item name="form2" label="Form2">
      <Input/>
    </Form.Item>
  </Form>;
}
