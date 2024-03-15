import React, { useState } from 'react';
import { Form, Input, DatePicker } from 'antd';
// for date and time

import { Select } from 'antd';
import ContrectCompo from './ContrectCompo';
import Workinpreogress from './workprogress/Workinpreogress';

const { Option } = Select;

import '../App.css'
import axios from 'axios';

const onFinish = async(values) => {
    console.log(values.projectStatus);
    if(values.projectStatus === "pre-contractual") {
        await axios.post("http://localhost:8080/api/preContract",values)
    } else{
        await axios.post("http://localhost:8080/api/workInProgress",{...values, projectId:1})
    }
   
}

const onFinishFailed=(values)=>{
    console.log(values)
}

const Pdetails = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (value) => {
        setSelectedOption(value);
    };

 
    return (
        <div>


           
            <h2 className='pdetailsheading'>Project Details</h2>

            <Form labelCol={{
                span: 6,
            }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 400,
                }} onFinish={onFinish}
                onFinishFailed={onFinishFailed}

                initialValues={{
                    layout: "inline",
                    // projectStatus: "pre-contractual"
                  }}
                >

                {/* project details */}

                <Form.Item
                    name="projectTitle"
                    label="Project Title"
                    className='inputfirst'
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>



                <Form.Item
                    label="Project Status"
                    name="projectStatus"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}
                >
                    {/* <Select /> */}


                    <Select
                        style={{ width: 200 }}
                        placeholder="Select Status"
                        onChange={handleChange}
                        // defaultValue="pre-contractual"
                        value={selectedOption}
                        
                    >
                        <Option value="work-in-progress">Work in progress</Option>
                        <Option value="pre-contractual">Pre contractual</Option>
                    </Select>



                    {selectedOption && (
                        <div>
                            {/* Content to show based on the selected option */}
                            {selectedOption === 'work-in-progress' && <div className='second'>
                                <Workinpreogress />
                            </div>}
                            {selectedOption === 'pre-contractual' && <div className='second'>
                                {/* design pre-contrectual phase */}
                                <ContrectCompo />

                            </div>}
                        </div>
                    )}


                </Form.Item>
            </Form>

        </div>
    );
};

export default Pdetails;
