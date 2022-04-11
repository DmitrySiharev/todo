import React, {useState, useRef, useEffect} from "react";
import * as S from './Photos.styled';
import {Link} from "react-router-dom";
import {coolYellow} from "../../../styled/colors";

const Photos = () => {
    const [inputId, setInputId] = useState(1);
    const [imgs, setImgs] = useState([]);
    const input = useRef();

    const prevCountRef = useRef();
    useEffect(() => {
        prevCountRef.current = inputId;
    }, [inputId]);

    const submitInput = () => {
        if (+input.current.value <= 0 || +input.current.value > 100) {
            alert("Enter id from 1 to 100");
        } else {
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${inputId}`)
                .then(response => response.json())
                .then(json => setImgs(json))
        }
    }

    return (
        <S.Wrapper>

            <Link to="/">
                <S.Arrow
                    color={coolYellow}
                />
            </Link>

            <h1>{"PHOTOS"}</h1>

            <S.WrapperInput>
                <input
                    placeholder={"Enter photo ID (between 1 and 100):"}
                    type="number"
                    name="quantity"
                    ref={input}
                    onChange={e => setInputId(e.target.value)}
                />
                <S.Button
                    onClick={submitInput}
                    disabled={inputId === prevCountRef.current}
                >
                    GO
                </S.Button>
            </S.WrapperInput>


            <S.WrapperPhotos>
                {imgs.map(el => {
                    return (
                        <S.WrapperImgs key={el.id}>
                            <div>
                                <p>{el.title}</p>
                            </div>
                            <img src={el.url} alt={el.title}/>
                        </S.WrapperImgs>

                    )
                })}
            </S.WrapperPhotos>


        </S.Wrapper>
    )
}

export default Photos;