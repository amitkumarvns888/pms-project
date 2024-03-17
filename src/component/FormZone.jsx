import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const FormZone = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/getAllProjects"
      );
      console.log(response);
    };
    fetchProjects();
  }, []);



//   edit api working


const handleEdit = async (record) => {
  try {
    // Implement your logic to open a modal for editing the project
    // For example, you can use state to manage the modal visibility and edit data

    // After editing, make an HTTP PUT or PATCH request to update the project
    await axios.put(`http://localhost:8080/api/updateProject/${record.key}`, {
      // Pass the updated project data here
      // For example:
      // name: updatedName,
      // description: updatedDescription,
    });

    // After successful update, fetch projects data again to refresh the table
    const response = await axios.get(
      "http://localhost:8080/api/getAllProjects"
    );
    setData(response.data);

    // Optionally, show a success message or perform any other action
  } catch (error) {
    console.error("Error updating project:", error);
    // Optionally, show an error message or perform any other action
  }
};

  const dataSource = [
    {
      key: "1",
      SrNo: "01",
      projectCode: "444",
      projectType: "Manufature",
      projectCost: 45000,
      status: "Done",
      zone: "-",
      circle: "-",
      divigen: "-",
      schedulestartdate: "-",
      scheduleenddate: "-",
      likelycompletiondate: "-",
    },

    // Add more data items as needed
  ];

  const columns = [
    {
      title:"Sr No",
      dataIndex:"SrNo",
      key:"SrNo",
    },
    {
      title: "Project Code",
      dataIndex: "projectCode",
      key: "Project Code",
    },
    {
      title: "Label",
      //   dataIndex: "Zone",
      //   key: "zone",
      render: (text, record) => (
        <div>
          <p>Zone: {record.name}</p>
          <p>Circle: {record.age}</p>
          <p>Divigen: {record.address}</p>
        </div>
      ),
    },

    {
      title: "Project Type",
      dataIndex: "projectType",
      key: "Project Type",
    },
    {
      title: "Schedule",
      //   dataIndex: "Zone",
      //   key: "Zone",
      render: (text, record) => (
        <div>
          <p>Schedule Start Date: {record.schedulestartdate}</p>
          <p>Schedule End Date: {record.scheduleenddate}</p>
          <p>Likely Complition Date: {record.likelycompletiondate}</p>
        </div>
      ),
    },
    {
      title: "Project Cost",
      dataIndex: "projectCost",
      key: "Project Cost",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (record) => {
        return (
          <>
            <EditOutlined
              style={{ color: "green", fontSize: "20px" }}
              onClick={() => handleEdit(record)}
            />
            <DeleteOutlined
              style={{ color: "red", marginLeft: "15px", fontSize: "20px" }}
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

        <Table columns={columns} dataSource={dataSource} bordered></Table>

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
