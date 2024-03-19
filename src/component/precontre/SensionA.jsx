import { Button, DatePicker, Form, Input, InputNumber } from "antd";

const onFinish = (values) => {
  console.log(values);
  e.preventDefault();
};

const onFinishFailed = (values) => {
  console.log(values);
};

function Sension() {
  return (
    <div>
      <h3>Sanction</h3>

      <div className="inputstyle">
        <Form.Item
          name="sanctionDate"
          label="Sanction Date"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <DatePicker style={{ width: "180px" }} format="DD/MM/YYYY" />
        </Form.Item>

        <Form.Item
          name="sanctionNumber"
          label="Sanction No"
		  className="sreq"

        >
          <InputNumber style={{width:"184px"}} />
        </Form.Item>

        <Form.Item
          name="sanctionAmount"
          label="Sanction Amount"
          rules={[{ required: true }]}
		  className="req"

        >
          <InputNumber  style={{width:"180px"}}/>
        </Form.Item>
      </div>
    </div>
  );
}

export default Sension;
