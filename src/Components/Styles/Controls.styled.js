import styled from "styled-components";

export const StyledControls = styled.form`
position: absolute;
background-color: #1a1c20;
top: 50%;
left: 2rem;
transform: translateY(-50%);
width: 32rem;
border-radius: 0.8rem;
border: 2px solid #222325;
padding: 2.8rem;
color: #F7FAFD;
/* box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56); */
z-index: 99;

.form-header {
    color: #696A6E;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
}

.reset-button {
    margin-top: 2rem;
    height: 4rem;
    width: 100%;
    background-color: #2A2D35;
    border: none;
    color: #F7FAFD;
    border-radius: 0.6rem;
    cursor: pointer;
    font-size: 1.3rem;

    svg {
        margin-right: 1.3rem;
    }

    :hover {
        background-color: #006AD4;
    }
}


`;