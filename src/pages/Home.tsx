import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import LoginButton from "../components/LoginButton.tsx"
import '../styles/reset.css'
import {useCredential} from "../store"

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    padding: 16px;
    gap: 13px;
`

const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    margin: 0;
    
    p {
        font-size: 14px;
        font-weight: 500;
        color: #686868;
        cursor: pointer;
    }
`

const Article = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    
    &:hover {
        background-color: #EBEBEB;
    }
    
    p {
        color: #686868;
    }
`


function Home() {
    const navigate = useNavigate();
    const token = useCredential(state => state.token)
    const setToken = useCredential(state => state.setToken)

    if (token !== null) {
        return (<>
                <MainHeader>
                    <h4>ㅁㄴㅇㄹ</h4>
                    <p onClick={
                        () => {
                            setToken(null)
                            alert("로그아웃되었습니다.")
                            navigate("/")
                        }
                    }>로그아웃</p>
                </MainHeader>
                <Article>
                    <h4>안녕하세요</h4>
                    <p>로그인 되었습니다.</p>
                </Article>
            </>
        )
    }

    return (
        <HomeContainer>
            <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
            <Link to="/register">
                회원가입 하기
                <FontAwesomeIcon icon={faChevronRight } size="xs"/>
            </Link>
        </HomeContainer>
    )
}

export default Home
