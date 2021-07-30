import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    background: #ccc;
    position: sticky;
    top:0;
    .nav-ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        width: 200px;

    }
`;