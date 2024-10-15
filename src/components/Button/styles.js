
import styled from "styled-components"

export const Button = styled.button`
    border: ${(props) => 
    props.theme ==='primario'
    ?'none'
    :'1px solid #181f36' };
    background: ${(props) =>  
    props.theme ==='primario'
     ?'linear-gradient(180deg,#fe7e5d 0%,#ff6378 100%)'
     :'#ccffff' };
    font-size:16px;
    color: ${(props) => 
    props.theme ==='primario'
    ?' #fff'
    :' #181f36' };
    padding:15px 50px;
    width:fit-content;
    cursor:pointer;
    border-radius:30px;

    &:active {
        opacity:0.5;
    }

    &:hover { opacity: 0.8;
   
  }
`


