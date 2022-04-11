import {useNavigate} from 'react-router-dom';
import * as S from './Home.styled';
import {coolPurple, coolYellow} from "../styled/colors";

function Home() {
    let navigate = useNavigate();

    return (
        <S.Wrapper>
            <h1>Home page</h1>

            <S.Buttons>
                <S.ButtonClick
                    onClick={() => navigate('/todos')}
                    color={coolPurple}
                >
                    Todos
                </S.ButtonClick>
                <S.ButtonClick
                    onClick={() => navigate('/photos')}
                    color={coolYellow}
                >
                    Photos
                </S.ButtonClick>
            </S.Buttons>

        </S.Wrapper>
    )
}

export default Home;