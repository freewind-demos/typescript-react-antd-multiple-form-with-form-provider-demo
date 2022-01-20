import React, {FC, useState} from 'react'
import {Steps, Button, message, Form, Input, Select} from 'antd';

type FormData = {
  note?: string;
  gender?: 'male' | 'female';
}

export const FormInSteps: FC = () => {
  const [form] = Form.useForm<FormData>();

  const [currentStep, setCurrentStep] = useState(0);

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({note: 'Hi, man!'});
        return;
      case 'female':
        form.setFieldsValue({note: 'Hi, lady!'});
        return;
    }
  };

  const steps = [
    {
      title: 'First',
      content: <Form.Item name="note" label="Note" rules={[{required: true}]}>
        <Input/>
      </Form.Item>,
    },
    {
      title: 'Second',
      content: 'please continue',
    },
    {
      title: 'Last',
      content: <Form.Item name="gender" label="Gender" rules={[{required: true}]}>
        <Select
          onChange={onGenderChange}
          allowClear
        >
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
        </Select>
      </Form.Item>,
    },
  ];

  return (
    <Form>
      <Steps current={currentStep}>
        {steps.map(item => (
          <Steps.Step key={item.title} title={item.title}/>
        ))}
      </Steps>
      <div>{steps[currentStep].content}</div>
      <div>
        <Button style={{margin: '0 8px'}} onClick={() => setCurrentStep(n => n - 1)} disabled={currentStep === 0}>
          Previous
        </Button>
        {currentStep === steps.length - 1 ? (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        ) : (
          <Button type="primary" onClick={() => setCurrentStep(n => n + 1)}>
            Next
          </Button>
        )}
      </div>
    </Form>
  );
};
