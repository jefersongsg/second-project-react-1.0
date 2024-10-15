import styled from "styled-components"

export const Background = styled.div`
    background:linear-gradient(to right, #fe7e5d, #7f3841);
    height:20vw;
    width:90vw;
    //max-width:850px;
    border-radius:30px;

    display:flex;
    align-items:center;
    justify-content: center;

    img{
        max-width:100%;
        max-height:100%;
    }
    @media only screen and (max-width:900px){
        height:35vw;
        width:80vw;
        
    }
   
`