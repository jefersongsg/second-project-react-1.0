import styled from "styled-components"

export const Title = styled.div`
    color:#fff;
    text-align: center;
    font-size:38px;
    font-style:normal;
    font-weight:600;
    margin-top:10px;
`
export const Container = styled.div`
    background-color:#181f36;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    padding:20px;
`
export const ContainerUsers = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
    margin:40px 0;

@media 
    (max-width:750px) {
    grid-template-columns:1fr;
    padding: 6px;
    gap: 37px; }
`
export const CardUsers = styled.div`
    background-color: #e93a3a;
    padding:10px;
    border-radius:46px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
    max-width:100vh;

h3{
    color:#fff;
    font-size:20px;
    margin-bottom:3px;
    text-transform:capitalize;
  }

p {
    color:#fff;
    font-size:14px;
    font-weight:200;
  }
  `

export const Avatar = styled.img`
    height:40px;
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left:30px;

&:hover {
    opacity:0.8;
}
&:active {
    opacity:0,5;
}
`



