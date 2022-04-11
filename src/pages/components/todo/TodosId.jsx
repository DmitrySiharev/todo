import React from "react";
import {useParams} from 'react-router-dom';

const TodosId = () => {
    const {id} = useParams();

    return (
        <h1>This is detail page of post with ID - ({id})</h1>

    )
}

export default TodosId;