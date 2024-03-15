import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Upload, message } from "antd";

const onFinish = (values) => {
  console.log(values);
  e.preventDefault();
};

const onFinishFailed = (values) => {
  console.log(values);
};

const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function Feasibility() {
  return (
    <div>
      <h3>Feasibility Study</h3>

      <div className="inputstyle">
        <p>
          <span style={{ color: "red" }}>* </span>Upload your documents here
        </p>

        <Form.Item>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
      </div>
    </div>
  );
}

export default Feasibility;
