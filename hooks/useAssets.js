import { assets } from '@/pages/api/constants/db';
import axios from 'axios';
import { useEffect, useState } from 'react';

function useAssets() {
    const [list, setList] = useState([]);

    const getAssetList = async () => {
        const { data } = await axios(assets);
        setList(data?.content);
    }

    useEffect(() => {
        getAssetList();
    },[]);
    
    return {
        list
    };
}

export default useAssets;
