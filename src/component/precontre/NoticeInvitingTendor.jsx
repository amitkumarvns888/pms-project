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
      <h3>NIT</h3>

      <div className="inputstyle">
        <Form.Item
          name="nitNumber"
          label="NIT No."
        //   rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="nitDate"
          label="NIT Date"
        //   rules={[{ required: true }]}
		  className="req"        


        >
          <DatePicker />
        </Form.Item>
      </div>
    </div>
  );
}

export default NoticeInvitingTendor;
