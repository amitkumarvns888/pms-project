import axios from "axios"
import { useEffect, useState } from "react"


const useProjectDetails = (projectId) => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        const fetchProject = async () => {
            const response = await axios.get(`http://localhost:8080/api/getSingleProject/${projectId}`);
            setProject(response.data);
        }

        fetchProject();
    }, [projectId])

    return { project };
}

export default useProjectDetails;