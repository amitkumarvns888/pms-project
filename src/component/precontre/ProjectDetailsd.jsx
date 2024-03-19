import {
  Button,
  DatePicker,
  Form,
  // type FormProps,
  Input,
  InputNumber,
  Select,
} from "antd";

const { Option } = Select;

// type FieldType = {
// 	title?: string;
// 	status?: string;
// 	scheduleStartDate?: string;
// 	scheduleEndDate?: string;
// 	estimatedAmount?: number;
// 	sanctionedAmount?: number;
// };

// const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
// 	console.log("Success:", values);
// };

// const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
// 	console.log("Failed:", errorInfo);
// };

const onFinish = (values) => {
  console.log(values);
  e.preventDefault();
};

const onFinishFailed = (values) => {
  console.log(values);
};

function ProjectDetailsd() {
  return (
    <div>
      <h3>Project Details</h3>
      {/* <Form
				name="projectDetails"
				// labelCol={{ span: 8 }}
				// wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				// initialValues={{ remember: true }}
				// onFinish={onFinish}
				// onFinishFailed={onFinishFailed}
				autoComplete="off"

				onFinish={onFinish}
                onFinishFailed={onFinishFailed}
			>      */}
      {/* <FieldType> */}

      <div className="inputstyle">
        <Form.Item
          label="Title"
          name="title"
          rules={[
            { required: true, message: "Please input title of project!" },
          ]}
        >
          <Input placeholder="Project Title" />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[
            { required: true, message: "Please input status of project!" },
          ]}
		  className="req"

        >
          <Select placeholder="Select project status" allowClear>
            <Option value="work-in-progress">Work in progress</Option>
            <Option value="pre-contractual">Pre contractual</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="scheduleStartDate"
          label="Schedule Start Date"
          rules={[{ required: true }]}
        >
          <DatePicker format="DD/MM/YYYY" />
        </Form.Item>

        <Form.Item
          name="scheduleEndDate"
          label="Schedule End Date"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="estimatedAmount"
          label="Estimated Amount"
          rules={[{ required: true }]}
        >
          <InputNumber placeholder="INR" />
        </Form.Item>

        <Form.Item
          name="sanctionedAmount"
          label="Sanctioned Amount"
          rules={[{ required: true }]}
        >
          <InputNumber placeholder="INR" />
        </Form.Item>
      </div>

      {/* </Form> */}
    </div>
  );
}

export default ProjectDetailsd;
