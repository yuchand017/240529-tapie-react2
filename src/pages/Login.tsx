import styled from "styled-components";
import { Label, Input } from "../components/FormComponent";

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    box-sizing: border-box;
    padding: 16px;
`
function Login() {
    return (
        <LoginForm>
            <Label>아이디</Label>
            <Input type="text"/>
            <Label>비밀번호</Label>
            <Input type="password"/>
        </LoginForm>
    )
}

export default Login