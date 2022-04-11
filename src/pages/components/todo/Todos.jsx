import React, {useEffect, useState} from "react";
import {v4 as uuid} from 'uuid';
import {Link} from "react-router-dom";
import * as S from './Todos.styled';
import {coolPurple} from '../../../styled/colors';

const Todos = () => {
    const unique_id = uuid();

    const [todo, setTodo] = useState('');
    const [items, setItems] = useState(() => {
        const data = localStorage.getItem("todoo");
        const initialValue = JSON.parse(data);
        return initialValue || "";
    });

    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState(todo);

    useEffect(() => {
        localStorage.setItem("todoo", JSON.stringify(items));
    }, [items]);


    const addItem = () => {

        if (!todo) {
            alert('Add something');
            return;
        }

        const item = {
            id: unique_id,
            value: todo,
            isDone: false
        }

        setItems(prev => [item, ...prev]);
        setTodo('');

    }

    const deleteItem = (id) => {
        const arrayOfTodo = items.filter(el => el.id !== id);
        setItems(arrayOfTodo);
    }

    const handleDone = todo => {
        const todos = [...items];
        todos.map(it => {
            if (it.id === todo.id) {
                it.isDone = !it.isDone;
            }
            return it;
        });

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].isDone) {
                let delItem = todos.splice(i, 1)
                todos.push(...delItem);

            }

        }
        setItems(todos);
    }

    const editText = (id) => {
        const editedText = [...items].map(el => {
            if (el.id === id && editingText) {
                el.value = editingText;
            }
            return el;
        });

        setItems(editedText);
        setTodoEditing(null);
        setEditingText('');
    }

    return (
        <S.Wrapper>
            <Link to="/">
                <S.Arrow
                    color={coolPurple}
                />
            </Link>


            <S.WrapperInputs>
                <h1>{"TODO LIST"}</h1>

                <S.InputText
                    type='text'
                    value={todo}
                    placeholder='Add new task'
                    onChange={(e) => setTodo(e.target.value)}
                />
                <S.ButtonAdd
                    onClick={addItem}
                >
                    &#x002B;
                </S.ButtonAdd>

                <div/>
                <ul>
                    {items.map(el => {
                        return (
                            <S.Lists key={el.id} className='lists'>
                                <input
                                    type="checkbox"
                                    checked={el.isDone}
                                    readOnly={true}
                                    onClick={() => handleDone(el)}
                                />

                                {todoEditing === el.id ? (
                                    <S.InputEdit
                                        type='text'
                                        onChange={(e) => {

                                            setEditingText(e.target.value)
                                        }}
                                        placeholder={el.value}
                                    />
                                ) : (
                                    <S.LinkPage to={el.id}>
                                        <li className={el.isDone ? 'show' : ''}>{el.value}</li>
                                    </S.LinkPage>
                                )}


                                <S.ButtonDelete onClick={() => deleteItem(el.id)}>&#10006;</S.ButtonDelete>

                                {todoEditing === el.id ? (
                                    <S.ButtonEdit onClick={() => editText(el.id)}>&#10003;</S.ButtonEdit>
                                ) : (
                                    <S.ButtonEdit onClick={() => setTodoEditing(el.id)}>&#9998;</S.ButtonEdit>
                                )}
                            </S.Lists>
                        )
                    })}
                </ul>

            </S.WrapperInputs>
        </S.Wrapper>
    )
}

export default Todos;