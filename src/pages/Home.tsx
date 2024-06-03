import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import LoginButton from "../components/LoginButton.tsx"
import Header from "../components/Header.tsx"
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

const Article = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    cursor: pointer;
    
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

    const [articleData, setArticleData] = useState<{
        id: number,
        title: string,
        writerUsername: string,
    }[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://board.etty.dev/board/ㅁㄴㅇㄹ/posts',
                {
                    headers: {'Authorization': 'Bearer ' + token}
                }
            )
            const responseData = await response.json();
            setArticleData(responseData.data);
        };

        fetchData()
    }, [])

    if (token !== null) {
        return (<>
                <Header />
                <div id="article">
                    {articleData.map((item) => (
                        <Article key={item.id} onClick={() => navigate('/article/' + item.id)}>
                            <h4>{item.title}</h4>
                            <p>{item.writerUsername}</p>
                        </Article>
                    ))}
                </div>
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
