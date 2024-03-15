import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import { DebounceSelect, fetchUserList } from "./SearchCompo";

const onFinish = (values) => {
  console.log(values);
  e.preventDefault();
};

const onFinishFailed = (values) => {
  console.log(values);
};

function WorkOrder() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    e.preventDefault();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h3>Work Order</h3>
      {/* <Form
				form={form}
				style={{ maxWidth: 600 }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}

				
			> */}

      <div className="inputstywork">
        <Form.Item
          name="workOrderNumber"
          label="Work Order Number"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="workOrderDate"
          label="Work Order Date"
          rules={[{ required: true }]}
          className="req"
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Tendor Cost"
          name="tendorCost"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
          className="req"
        >
          <Input />
        </Form.Item>

       
      </div>

      {/* </Form> */}
    </div>
  );
}

export default WorkOrder;
