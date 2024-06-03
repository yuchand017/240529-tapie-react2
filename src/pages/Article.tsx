import { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header"
import {styled} from 'styled-components'
import {useCredential} from "../store";

const ArticleView = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

    h3 {
        font-size: 18px;
    }

    span {
        font-size: 14px;
        color: #686868;
    }

    p {
        margin-top: 16px;
        font-size: 16px;
    }

;
`

function Article() {
    const { id } = useParams()
    const navigate = useNavigate()
    const token = useCredential(state => state.token)
    const [articleData, setArticleData] = useState<{
        id: number,
        title: string,
        content: string,
        writerUsername: string,
    }>();

    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                alert("로그인이 필요합니다.")
                navigate("/")
                return
            }
            const response = await fetch(
                'https://board.etty.dev/board/ㅁㄴㅇㄹ/posts/' + id,
                {
                    headers: {'Authorization': 'Bearer ' + token}
                }
            )
            const responseData = await response.json();
            setArticleData(responseData.data);
        };

        fetchData()
    }, [])
    if (!articleData) {
        alert("게시글을 불러올 수 없습니다")
        return
    }
    if (token !== null) {
        return (
            <>
                <Header />
                <ArticleView>
                    <h3>{articleData.title}</h3>
                    <span>{articleData.writerUsername}</span>
                    <p>{articleData.content}</p>
                </ArticleView>
            </>
        )
    }
}

export default Article