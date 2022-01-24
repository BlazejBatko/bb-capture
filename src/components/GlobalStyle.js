import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    @media (max-width: 1300px){
        
    }

}

*:focus {
    outline: none;
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #C5501A;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #C5501A;
        color: white;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
    
}
h3{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
}
h4{
    font-weight: bold;
    color:#C5501A;
    font-size: 2rem;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%
}
span{
    padding: 2rem 0rem;
    font-weight: bold;
    background: linear-gradient(90deg, rgba(197,80,26,1) 40%, rgba(49,34,27,1) 100%, rgba(27,27,27,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
a{
    font-size: 1.1rem;
}

`;

export default GlobalStyle;
