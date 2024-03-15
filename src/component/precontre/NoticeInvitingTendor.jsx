import { Button, DatePicker, Form, Input, InputNumber } from "antd";

const onFinish = (values) => {
  console.log(values);
  e.preventDefault();
};

const onFinishFailed = (values) => {
  console.log(values);
};

function NoticeInvitingTendor() {
  return (
    <div>
      <h3>Notice Inviting Tendor</h3>

      <div className="inputstyle">
        <Form.Item
          name="nitNumber"
          label="Notice Inviting No."
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="nitDate"
          label="Notice Inviting Date"
          rules={[{ required: true }]}
		  className="req"

        >
          <DatePicker />
        </Form.Item>
      </div>
    </div>
  );
}

export default NoticeInvitingTendor;
