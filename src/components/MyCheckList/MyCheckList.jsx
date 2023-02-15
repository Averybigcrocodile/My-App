import React from 'react';
import MyButton from '../MyButton/MyButton';
import Form from '../Form/Form';
import './style/index.css';

const MyCheckList = () => {
    const listNone = <span className='MyCheckListText'>Список відсутній</span>;
    
    return (
        <div className='MyCheckList'>
            <MyButton />
            <Form />
        </div>
    )
}

export default MyCheckList;