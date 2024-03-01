import { FC } from "react";
import { Button, Form, FormRule, Input, Radio, Select, Space } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { array, object, ObjectSchema, oneOf, ref, string } from "yup";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import { Genders } from "../../enums";
import { Luggage, Ticket } from "../../interfaces";

const wayOptions: DefaultOptionType[] = [
  { label: "Minsk", value: "Minsk" },
  { label: "Kobrin", value: "Kobrin" },
  { label: "Brest", value: "Brest" },
  { label: "Vitebsk", value: "Vitebsk" },
  { label: "Gomel", value: "Gomel" },
  { label: "Grodno", value: "Grodno" },
  { label: "Mogilev", value: "Mogilev" },
];

const CreateEditPage: FC = () => {
  const [form] = Form.useForm();
  const wayFrom = Form.useWatch("wayFrom", form);
  const validationSchema: ObjectSchema<Ticket> = object().shape({
    key: string()
      .typeError("This field must be a string")
      .required("This field is required"),
    userFirstName: string()
      .typeError("This field must be a string")
      .matches(new RegExp(/^[a-zA-Z]+$/), "Only latin alphabet")
      .min(2, "Min length 2 symbols")
      .max(32, "Max length 32 symbols")
      .required("This field is required"),
    userLastName: string()
      .typeError("This field must be a string")
      .matches(new RegExp(/^[a-zA-Z]+$/), "Only latin alphabet")
      .min(2, "Min length 2 symbols")
      .max(48, "Max length 48 symbols")
      .required("This field is required"),
    userGender: string<"Male" | "Female">().required(),
    userEmail: string()
      .typeError("This field must be a string")
      .email("It is not email")
      .required("This field is required"),
    userPhone: string()
      .typeError("This field must be a string")
      .matches(
        new RegExp(/^\+375(17|25|29|33|44)\d{7}$/),
        "Type Belarusian number like: +375293331122"
      )
      .required("This field is required"),
    wayFrom: string().required("This field is required"),
    wayTo: string()
      .required("This field is required")
      .test("not-same-as-wayFrom", "Towns can't be the same", function (value) {
        console.log(value);
        return wayFrom !== value;
      }),
    luggages: array().of(new ObjectSchema<Luggage>()),
  });

  const yupSync: FormRule = {
    async validator(rule, value) {
      console.log(rule, value);
      return await validationSchema.validateSyncAt(rule.field, {
        [rule.field]: value,
      });
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function OnFinish(values: any): void {
    console.log(values);
    console.log(form);
  }
  return (
    <div style={{ padding: "0 20%" }}>
      <Form layout="vertical" form={form} onFinish={OnFinish}>
        <Form.Item name={"userFirstName"} label="First name:" rules={[yupSync]}>
          <Input></Input>
        </Form.Item>
        <Form.Item name={"userLastName"} label="Last name:" rules={[yupSync]}>
          <Input></Input>
        </Form.Item>
        <Form.Item name={"userGender"} label="Gender:" rules={[yupSync]}>
          <Radio.Group defaultValue={Genders.Male}>
            <Radio value={Genders.Male}>Male</Radio>
            <Radio defaultChecked={false} value={Genders.Female}>
              Female
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name={"userEmail"} label="Email:" rules={[yupSync]}>
          <Input></Input>
        </Form.Item>
        <Form.Item name={"userPhone"} label="PhoneNumber:" rules={[yupSync]}>
          <Input></Input>
        </Form.Item>
        <Form.Item name={"wayFrom"} label="From:" rules={[yupSync]}>
          <Select
            options={wayOptions}
            placeholder="Select a town from you go"></Select>
        </Form.Item>
        <Form.Item name={"wayTo"} label="To:" rules={[yupSync]}>
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
                    rules={[yupSync]}>
                    <Input placeholder="Heigth (sm)" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "width"]}
                    rules={[yupSync]}>
                    <Input placeholder="Width (sm)" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "lenght"]}
                    rules={[yupSync]}>
                    <Input placeholder="Lenght (sm)" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "weight"]}
                    rules={[yupSync]}>
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
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateEditPage;
