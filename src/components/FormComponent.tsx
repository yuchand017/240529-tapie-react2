import styled from "styled-components";

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 46px 16px;
    gap: 12px;
`

const InputComponent = styled.div`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    font-weight: 500;
`

const Input = styled.input`
    height: 32px;
    margin-top: 4px;
    border:solid 1px #686868;
    border-radius: 4px;
`

export { Form, InputComponent, Label, Input };