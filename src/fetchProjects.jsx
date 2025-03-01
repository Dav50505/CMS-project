import { createClient } from "contentful";
import {useState, useEffect} from "react";

const client = createClient({
    space: "fca0ex95bzlf",
    environment: "master",
    accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries({content_type: "projects"})
            const projects = response.items.map((item) => {
                const {title, url, image} = item.fields;
                const id = image.sys.id;
                const img = image?.fields?.file?.url
                return {title, img, url, id};
            });
            setProjects(projects);

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            
        }
    }

    useEffect(() => {
        getData();
    },[]);
 return {loading, projects};
}
