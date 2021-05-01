import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({Categories, setCategories}) => {

    const [InputValue, setInputValue] = useState("");
    const handlerChangetxtSearch = (e) =>{
        setInputValue(e.target.value)
        
    };
    const handlerSubmit = (e) =>{
        e.preventDefault();
        if(InputValue !== "" && Categories.find(x=> x === InputValue) === undefined){
            setCategories([InputValue,...Categories]);
            setInputValue("");
        }
    };
    
    return (
        <>
        <form onSubmit={handlerSubmit}>
            <input className='txtSearch' type="text" value={InputValue} onChange={handlerChangetxtSearch} />
        </form>
        </>
    )
}

AddCategory.propTypes = {
    Categories: PropTypes.array.isRequired,
    setCategories: PropTypes.func.isRequired
};