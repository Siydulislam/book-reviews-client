import { useEffect, useState } from "react";

const useChartsData = () => {

    const [chartsData, setChartsData] = useState([]);

    useEffect(() => {
        fetch('chartsdata.json')
            .then(res => res.json())
            .then(data => setChartsData(data))
    }, []);

    return [chartsData, setChartsData];

}

export default useChartsData;