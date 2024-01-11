import { FC } from "react";
import { Button, Form, Input, Radio, Select, Space } from "antd";
import { DefaultOptionType } from "antd/es/select";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import { Genders } from "../../enums";

const wayOptions: DefaultOptionType[] = [
  { label: "Minsk", value: "Minsk" },
  { label: "Kobrin", value: "Kobrin" },
];

const CreateEditPage: FC = () => {
  const [form] = Form.useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function OnFinish(values: any): void {
    console.log(values);
    console.log(form);
  }
  return (
    <div style={{ padding: "0 20%" }}>
      <Form layout="vertical" form={form} onFinish={OnFinish}>
        <Form.Item
          name={"userFirstName"}
          label="First name:"
          rules={[{ required: true }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item
          name={"userLastName"}
          label="Last name:"
          rules={[{ required: true }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item
          name={"userGender"}
          label="Gender:"
          rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value={Genders.Male}> Male</Radio>
            <Radio value={Genders.Female}> Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name={"userEmail"}
          label="Email:"
          rules={[{ required: true }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item
          name={"userPhone"}
          label="PhoneNumber:"
          rules={[{ required: true }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item name={"wayFrom"} label="From:" rules={[{ required: true }]}>
          <Select
            options={wayOptions}
            placeholder="Select a town from you go"></Select>
        </Form.Item>
        <Form.Item name={"wayTo"} label="To:" rules={[{ required: true }]}>
          <Select
            options={wayOptions}
            placeholder="Select a tow where are you go"></Select>
        </Form.Item>
        <Form.List name="luggages">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, "height"]}
                    rules={[{ required: true, message: "Missing height" }]}>
                    <Input placeholder="Heigth (sm)" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "width"]}
                    rules={[{ required: true, message: "Missing width" }]}>
                    <Input placeholder="Width (sm)" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "lenght"]}
                    rules={[{ required: true, message: "Missing lenght" }]}>
                    <Input placeholder="Lenght (sm)" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "weight"]}
                    rules={[{ required: true, message: "Missing weight" }]}>
                    <Input placeholder="Weigth (kg)" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}>
                  Add luggage
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateEditPage;
