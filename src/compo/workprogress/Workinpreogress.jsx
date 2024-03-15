import React from "react";
import { Form, DatePicker, InputNumber, Button,Select  } from "antd";


import '../style.css'
const Workinpreogress = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly", width:"1000px"}}>
        <Form.Item
          label="Work Order Number"
          name="workOrderNumber"
          rules={[
            {
              required: true,
              message: "Please Enter Work order Number!",
            },
          ]}
        >
          <InputNumber
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          label="Work Order Date"
          name="workOrderDate"
          rules={[
            {
              required: true,
              message: "Please Enter Work order Date!",
            },
          ]}
          className="workspace"
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Tendor Cost"
          name="tendorCost"
          rules={[
            {
              required: true,
              message: "Please Enter  Tendor Cost!",
            },
          ]}
          className="workspace"
        >
          <InputNumber
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

{/* second dropdown */}

        <Form.Item
          label="Project Work Type"
          name="projectWorkType"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Select style={{ width: 200 }} placeholder="Select Work Type">
            <Option value="single">Single</Option>
            <Option value="double">Double</Option>
            <Option value="triple">Triple</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
          className="worksubmit"
        >
          <Button type="primary" htmlType="submit" style={{marginLeft:"5px"}}>
            Submit
          </Button>
        </Form.Item>
    </div>
  );
};

export default Workinpreogress;
