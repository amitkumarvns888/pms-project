import React, { useState, useEffect } from "react";
import { Form, Input, DatePicker } from "antd";
// for date and time
import { useLocation } from "react-router-dom";

import { Select } from "antd";
import ContrectCompo from "./ContrectCompo";
import Workinpreogress from "./workprogress/Workinpreogress";

const { Option } = Select;

import "../App.css";
import axios from "axios";
import { Route, Router, useNavigate } from "react-router-dom";
import FormZone from "../component/FormZone";

const Pdetails = () => {
  const [projectTitle, setProjectTitle] = useState("")
  const navigate = useNavigate();
  const location = useLocation();


  const [selectedOption, setSelectedOption] = useState();
  // "pre-contractual";
  // const [form]=Form.useForm() deleteing all input fields

  // api calling
  const onFinish = async (values) => {
    const projectId = localStorage.getItem("projectId");

    if (projectId) {

      try {
        // Make a PUT or PATCH request to update the project
        await axios.patch("http://localhost:8080/api/updatePreContract", { ...values, projectId });
        navigate("/");
        localStorage.removeItem("projectId")
        navigate("/");
      } catch (error) {
        console.error("Error updating project:", error);
        localStorage.removeItem("projectId")
      }
    }

    if (!projectId) {
      if (values.projectStatus === "pre-contractual") {
        await axios.post("http://localhost:8080/api/preContract", values);

        // form.resetFields() empty all input fields
        navigate("/");
      }
      if (values.projectStatus === "work-in-progress") {
        await axios.post("http://localhost:8080/api/workInProgress", {
          ...values,
          projectId,

        });
        navigate("/");
      }

    }
  };

  const onFinishFailed = (values) => {
    console.log(values);
  };

  useEffect(() => {
    setSelectedOption("pre-contractual");
  }, []);

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <h2 className="pdetailsheading">Project Details</h2>
      <Form
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          // maxWidth: 800,
          display: "flex",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // form={form}
        initialValues={{
          layout: "inline",
          projectStatus: "pre-contractual",
          // projectTitle: localStorage.getItem("projectTitle")
        }}
      >
        {/* project details */}

        <Form.Item
          name="projectTitle"
          label="Project Title"
          className="inputfirst"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter Project Title" />
        </Form.Item>

        <Form.Item
          label="Project Status"
          name="projectStatus"
          placeholder="Please Enter Project Title"
          rules={[
            {
              required: true,
              message: "Please Enter Project Title!",
            },
          ]}
        >
          {/* <Select /> */}

          <Select
            style={{ width: 200 }}
            placeholder="Select Status"
            onChange={handleChange}
            value={selectedOption}
          // defaultValue={"pre-contractual"}
          >
            <Option value="work-in-progress">Work in progress</Option>
            <Option value="pre-contractual">Pre contract</Option>
          </Select>

          {selectedOption && (
            <div className="optionclass mainform">
              {/* Content to show based on the selected option */}
              {selectedOption === "work-in-progress" && (
                <div className="second">
                  <Workinpreogress />
                </div>
              )}
              {selectedOption === "pre-contractual" && (
                <div className="second">
                  {/* design pre-contrectual phase */}
                  <ContrectCompo  />
                </div>
              )}
            </div>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Pdetails;
