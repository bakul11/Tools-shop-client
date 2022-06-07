import { useEffect, useState } from "react"

const useTools = () => {
    const [tools, setTools] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('https://afternoon-refuge-96808.herokuapp.com/allTools')
            .then(res => res.json())
            .then(data => {
                setTools(data);
                setLoader(false);
            })
    }, [])
    return [tools, setTools, loader]
}
export default useTools;