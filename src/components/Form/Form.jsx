import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import './style/index.css'

const Form = () => {
    const doneList = <AiOutlineCheck className='doneList' />;
    const delList = <AiOutlineClose className='delList' />;

    const [value, setValue] = useState('');

    

    return (
        <div className='myLink'>
            <div classList='myLinkText'>
                <textarea value={value} onChange={(event) => setValue(event.target.value)} />
            </div>
            <div className='iconsForm'>{doneList}{delList}</div>
        </div>
    )
}

export default Form;