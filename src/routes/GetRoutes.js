import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getById } from '../api'
import NestedList from '../components/NestedList';

const GetRoutes = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [uploadData, setUploadData] = useState([])

    useEffect(() => {
        handleGetUploadById();
    }, []);

    const handleGetUploadById = async () => {
        const uploadById = await getById(id);
        setLoading(false);
        setUploadData(uploadById.data.uploads)
    }

    return (
        <div className="col-xs-12">
            {loading
                ? <p className="text-center">Carregando</p>
                : <NestedList data={uploadData} />
            }
        </div>
    )
}

export default GetRoutes
