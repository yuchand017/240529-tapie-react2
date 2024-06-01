import {useState} from "react";
import {InputComponent, Label, Input, Form} from "../components/FormComponent.tsx"
import LoginButton from "../components/LoginButton.tsx"
import {useCredential} from "../store"
import {useNavigate} from "react-router-dom"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const setToken = useCredential(state => state.setToken)
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await fetch("https://board.etty.dev/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const data = await response.json()
            if (response.ok) {
                alert("로그인에 성공했습니다")
                setToken(data.token)
                navigate("/")
            } else {
                alert(data.message)
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <Form>
                <InputComponent>
                    <Label htmlFor="username">아이디</Label>
                    <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </InputComponent>
                <InputComponent>
                    <Label htmlFor="password">비밀번호</Label>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </InputComponent>
                <LoginButton onClick={handleLogin}>로그인</LoginButton>
            </Form>
        </>
    )
}

export default Login