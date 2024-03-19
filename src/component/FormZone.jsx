import React, { useEffect, useState, useCallback } from "react";
import { Table, Button, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useProjectDetails from "../hooks/useProjectDetails";
import "./CustomTable.css"; // Import custom CSS file



const FormZone = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { project } = useProjectDetails(localStorage.getItem("projectId"));

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/getAllProjects"
      );
      setData(response.data)
    };
    fetchProjects();
  }, []);



  // delete record with api

  const handleDelete = async (record) => {
    // console.log(record)
    try {
      await axios.delete(`http://localhost:8080/api/deleteProject/${record}`)

      Modal.confirm({
        title: "Are you sure you want delete", onOk: () => {
          const updatedData = data.filter((item) => item.project_id !== record);
          setData(updatedData);
        }
      })

    } catch (error) {
      console.error("Error deleting project:", error);
    }
  }


  // edit api create

  const handleEdit = async (record) => {
    // Implement edit logic here
    console.log(record)
    localStorage.setItem("projectId", record)
    localStorage.setItem("projectTitle", project.projectTitle)
    navigate('/abc')
  };


  const columns = [
    {
      title: "Project Code",
      dataIndex: "project_id",
      key: "project_id",
    },
    {
      title: "Project Title",
      dataIndex: "projectTitle",
      key: "projectTitle",
    },

    {
      title: "Zone / Circle / Division",

      dataIndex: "zoneCircleDivision",
      key: "zoneCircleDivision",
      // render: (_, record) => (
      //   <div>
      //     <p>Zone: {record.name}</p>
      //     <p>Circle: {record.age}</p>
      //     <p>Division: {record.address}</p>
      //   </div>
      // ),
    },

    {
      title: "Project Type",
      dataIndex: "projectType",
      key: "Project Type",
    },
    {
      title: "Schd Start Date / Schd End Date / LCD",
      dataIndex: "ssdsselcd",
      //   key: "Zone",
      // render: (text, record) => (
      //   <div>
      //     <p>Schedule Start Date: {record.schedulestartdate}</p>
      //     <p>Schedule End Date: {record.scheduleenddate}</p>
      //     <p>Likely Complition Date: {record.likelycompletiondate}</p>
      //   </div>
      // ),
    },
    {
      title: "Project Cost",
      dataIndex: "tendorCost",
      key: "tendorCost",
    },
    {
      title: "Status",
      dataIndex: "projectStatus",
      key: "projectStatus",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (_, item) => {
        return (
          <>
            <EditOutlined
              style={{ color: "green", fontSize: "20px", cursor: "pointer" }} onClick={() => handleEdit(item)}
            />
            <DeleteOutlined
              style={{ color: "red", marginLeft: "15px", fontSize: "20px", cursor: "pointer" }} onClick={() => handleDelete(item.project_id)}
            />
          </>
        );
      },
    },

    // Add more columns as needed
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: " #EAEDED ",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "-200px",
          backgroundColor: "#FDFEFE",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            padding: "10px",
          }}
        >
          Project Details
        </h2>

        <Table columns={columns} dataSource={data} scroll={{ y: 400, x: 600 }} rowKey={(record) => record.project_id} bordered></Table>

        <Button
          type="primary"
          onClick={() => navigate("/abc")}
          style={{ width: "110px", margin: "20px" }}
        >
          Add Project
        </Button>
      </div>
    </div>
  );
};

export default FormZone;
