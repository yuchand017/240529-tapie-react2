import { styled } from 'styled-components'
import { useNavigate } from "react-router-dom"
import {useCredential} from "../store"

const HeaderContainer = styled.div`
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
    
    h4 {
        cursor: pointer;
    }
`

function Header() {
    const navigate = useNavigate();
    const setToken = useCredential(state => state.setToken)

    return (
        <HeaderContainer>
            <h4 onClick={() => navigate('/')}>ㅁㄴㅇㄹ</h4>
            <p onClick={
                () => {
                    setToken(null)
                    alert("로그아웃되었습니다.")
                    navigate("/")
                }
            }>로그아웃</p>
        </HeaderContainer>
    )
}

export default Header