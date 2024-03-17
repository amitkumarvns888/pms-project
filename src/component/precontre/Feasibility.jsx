import { Button, Form, Select, DatePicker } from "antd";
import './Appi.css'
const onFinish = (values) => {
  console.log(values);
  e.preventDefault();
};

const onFinishFailed = (values) => {
  console.log(values);
};


function Feasibility() {
  return (
    <div>
      <h3>Feasibility Study</h3>
      <div className="inputstyle">
        <Form.Item label="Feasibility Status" name={"feasibilityStatus"}>
          <Select style={{ width: 160 }}  >
            <Select.Option value="true">True</Select.Option>
            <Select.Option value="false">False</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Feasibility Date" className="fesiclassdrop"  name={"feasibilityDate"}>
          <DatePicker />
        </Form.Item>
      </div>
    </div>
  );
}

export default Feasibility;
