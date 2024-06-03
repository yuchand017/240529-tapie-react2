import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import {useNavigate} from "react-router-dom";

const ButtonContainer = styled.div`
    position: fixed;
    width: 48px;
    height: 48px;
    bottom: 0;
    right: 0;
    margin: 12px 12px;
    font-size: 24px;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;
    
    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const WriteButton = () => {
    const navigate = useNavigate()
    return (
        <ButtonContainer onClick={() => navigate('/write')}>
            <FontAwesomeIcon icon={faPlus} />
        </ButtonContainer>
    )
}

export default WriteButton