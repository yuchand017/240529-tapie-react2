import Header from "../components/Header"
import { styled } from 'styled-components'

const ArticleView = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    
    h3 {
        font-size: 18px;
    }
    
    p:first-child {
        font-size: 14px;
        color: #686868;
        margin-bottom: 16px;
    }
    
    p {
        font-size: 16px;
    }
    
;
`

function Article() {
    return (
        <>
            <Header />
            <ArticleView>
                <h3>ㅁㄴㅇㄹ</h3>
                <p>A</p>
                <p>안녕하세요 ㅐㄴ얌리노ㅕ할</p>
            </ArticleView>
        </>
    )
}

export default Article