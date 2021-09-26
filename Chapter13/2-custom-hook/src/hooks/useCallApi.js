import axios from "axios";
import { useEffect, useState } from "react";

const useCallApi = (apiUrl = "") => {
    const [isLoading, setIsLoading] = useState();
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            if (response.status === 200) {
                setData(response.data || null);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { isLoading, data };
}

export default useCallApi;