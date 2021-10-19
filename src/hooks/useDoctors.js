import { useEffect, useState } from 'react';

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://nmso2.github.io/fake-data-json/data/writers.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    return [doctors, setDoctors]
};

export default useDoctors;