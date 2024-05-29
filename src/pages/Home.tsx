import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import LoginButton from "../components/LoginButton.tsx"
import '../styles/reset.css'

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    padding: 16px;
`

function Home() {
    let navigate = useNavigate();
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
