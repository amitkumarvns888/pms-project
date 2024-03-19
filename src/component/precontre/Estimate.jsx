import { Button, DatePicker, Form, Input, InputNumber } from "antd";

const onFinish = (values) => {
  console.log(values);
  e.preventDefault();
};

const onFinishFailed = (values) => {
  console.log(values);
};

function Estimate() {
  return (
    <div>
      <h3>Estimates</h3>

      <div className="inputstyle">
        <Form.Item
          name="estimateDate"
          label="Estimate Date"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <DatePicker style={{ width: "180px" }} format="DD/MM/YYYY" />
        </Form.Item>

        <Form.Item
          name="estimateNumber"
          label="Estimate No"
          className="reqq"
        >
          <InputNumber style={{ width: "180px" }} />
        </Form.Item>

        <Form.Item
          name="estimateAmount"
          label="Estimate Amount"
          rules={[{ required: true }]}
          className="req"
        >
          <InputNumber style={{ width: "180px" }} />
        </Form.Item>
      </div>
    </div>
  );
}

export default Estimate;
