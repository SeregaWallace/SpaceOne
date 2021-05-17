import { useEffect, useState } from 'react';
import FetchData from '../../Servise/FetchData.js';


const fetchData = new FetchData();

const UseCalendar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData.getCalendar()
            .then((data) => {
                setData(data);
            })
    }, []);

    const getLaunchInfo = id => data.find(item => item.id === id);

    return { data, getLaunchInfo };
};

export default UseCalendar;