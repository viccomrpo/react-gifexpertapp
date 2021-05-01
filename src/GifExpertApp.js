import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () =>  {

    const [Categories, setCategories] = useState(["Full metal achemist"])


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            
            <AddCategory Categories={Categories} setCategories={setCategories} />

            <ol>
            {
                Categories.map(item=>
                    <GifGrid key={item} category={item}/>
                )
            }
            </ol>            

            
        </>
    );
}    

export default GifExpertApp;