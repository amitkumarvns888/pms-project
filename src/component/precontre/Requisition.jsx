import { Button, DatePicker, Form, Input, InputNumber } from "antd";
 import '../precontre/Appi.css'
const onFinish = (values) => {
  console.log(values);
  e.preventDefault();
};


const onFinishFailed = (values) => {
  console.log(values);
};

function Requisition() {
  return (
    <div>
      <h3>Requisition</h3>

      <div className="inputstyle">
        <Form.Item
          name="requisitionDate"
          label="Requestion Date"
          rules={[{ required: true }]}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <DatePicker />
        </Form.Item>
		

        <Form.Item
          label="Requested By"
          name="requestedBy"
          rules={[{ required: true }]}
		  className="req"

        >
          <Input placeholder="Name of person" />
        </Form.Item>
      </div>
    </div>
  );
}

export default Requisition;
