import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import './style/index.css'

const MyButton = (props) => {
    return (
        <AiFillEdit class='MyBtnImg' onClick={props.onClick} />
    )
}
export default MyButton;