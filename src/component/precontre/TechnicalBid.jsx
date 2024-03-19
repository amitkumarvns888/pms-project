import { Button, Form, Input, Select, DatePicker } from "antd";
const { Option } = Select;

const onFinish = (values) => {
  console.log(values);
  e.preventDefault();
};

const onFinishFailed = (values) => {
  console.log(values);
};
function TechnicalBid() {
  return (
    <div >
      <h3>
        Technical Bid
      </h3>

      <div className="inputstyle">
        <Form.Item label="Technical Bid Date" name="tBidDate">
          <DatePicker format="DD/MM/YYYY" />
        </Form.Item>
      </div>

      {/* </Form> */}
    </div>
  );
}

export default TechnicalBid;
