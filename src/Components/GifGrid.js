import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
/* import { GetGif } from '../Helpers/GetGifs';*/
import { GifGridItem } from './GifGridItem'; 

export const GifGrid = ({category}) => {

   
   const {data:images, loading} = useFetchGifs(category);

    
    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Loading...</p> }            
            { <div className='card-grid'>
                {
                    images.map((img)=>{
                        return <GifGridItem                             
                            key={img.id} 
                            {...img} 
                        />
                    })
                }                   
            </div> }
        </>        
    )
}
