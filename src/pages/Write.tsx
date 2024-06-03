import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Header from '../components/Header'
import LoginButton from "../components/LoginButton"
import {useCredential} from "../store"

const Editor = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    
    label {
        font-weight: 500;
        font-size: 16px;
    }
    
    input {
        border: 1px solid #000;
        border-radius: 4px;

        height: 32px;

        margin: 5px 0 10px 0;
    }
    
    textarea {
        border: 1px solid #000;
        border-radius: 4px;

        height: 200px;

        margin: 5px 0 10px 0;
    }
`
function Write() {
    const token = useCredential(state => state.token)
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleWrite = async () => {
        try {
            const response = await fetch("https://board.etty.dev/board/ㅁㄴㅇㄹ/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    title: title,
                    content: content
                })
            })
            const data = await response.json()
            if (response.ok) {
                alert("작성에 성공했습니다")
                navigate("/")
            } else {
                alert(data.message)
            }
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        if (!token) {
            alert("로그인이 필요합니다.")
            navigate("/")
            return
        }
    })

    return (<>
        <Header/>
        <Editor>
            <label>제목</label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} />
            <label>내용</label>
            <textarea
                onChange={(e) => setContent(e.target.value)}/>
            <LoginButton onClick={() => handleWrite()}>작성하기</LoginButton>
        </Editor>
    </>)
}

export default Write