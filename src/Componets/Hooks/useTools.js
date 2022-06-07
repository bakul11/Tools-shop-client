import { useEffect, useState } from "react"

const useTools = () => {
    const [tools, setTools] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('https://warm-citadel-67270.herokuapp.com/allTools')
            .then(res => res.json())
            .then(data => {
                setTools(data);
                setLoader(false);
            })
    }, [])
    return [tools, setTools, loader]
}
export default useTools;