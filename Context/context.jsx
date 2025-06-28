import React, { useState } from 'react';
import contextStore from './contextStore';
const Context = (props) => {
    
    let [isEdit, setIsEdit] = useState(false);



    return (
        <contextStore.Provider value = {{isEdit,setIsEdit}}>
            {props.children}
        </contextStore.Provider>
    );
}

export default Context;
