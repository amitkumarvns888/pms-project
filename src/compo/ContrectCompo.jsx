import React from 'react'

import '../App.css'
import Requisition from '../component/precontre/Requisition'
import Feasibility from '../component/precontre/Feasibility'
import Estimate from '../component/precontre/Estimate'
import NoticeInvitingTendor from '../component/precontre/NoticeInvitingTendor'
import TechnicalBid from '../component/precontre/TechnicalBid'
// import WorkOrder from '../component/precontre/WorkOrder'
import { Form, DatePicker, InputNumber, Button } from "antd";
import Sension from '../component/precontre/SensionA'
import { BrowserRouter, Routes,Route, useNavigate } from 'react-router-dom'

const ContrectCompo = () => {
const navigate=useNavigate()
    return (
        <div className='contrectcompo'>
                <Requisition />
                <Feasibility />
                <Estimate />
                <Sension />



                <NoticeInvitingTendor />
                <TechnicalBid />
                {/* <WorkOrder /> */}

               


                
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
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>

           
        </Form.Item>
        </div>
    )
}

export default ContrectCompo
