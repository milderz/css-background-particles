import styled from 'styled-components'

export const StyledOptionTab = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 2px solid #222325;

    .option-header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    font-size: 1.2rem;

    
    

}
.title-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}


.chevron-button {

    transform: ${( { optionActive }) => optionActive ? "rotate(180deg)" : "rotate(0edg)"};
    background: none;
    width: 2.8rem;
    border: none;
    color: #F7FAFD;
    cursor: pointer;
    height: 100%;

}

.option-body {
    /* background-color: green; */
    width: 100%;
}

.option-body-text {
    color: #696A6E;
}

label {
    border-bottom: 2px solid #222325;
    width: 100%;
    height: 6rem;

    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    
}



`