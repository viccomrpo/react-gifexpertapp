import { useEffect, useState } from "react";
import { GetGif } from '../Helpers/GetGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });  
    
    useEffect(()=>{
        GetGif(category).then(images=>{            
            setState({
                data: images,
                loading: false
            });            
        });
    },
    [category]);

    return state; 
}
