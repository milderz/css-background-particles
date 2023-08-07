import styled  from 'styled-components'

export const StyledBackground = styled.section`
    background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor}; 
    height: 100vh;



    .particle-container {
        position: absolute;
        /* height: 10px; */
        /* width: 10px; */



        /* border: 1px solid red; */
        animation: rotate 6s linear infinite;
        
        
        span {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: #fff;
        display: inline-block;
        /* filter: blur(4px); */
    }
    }

    @keyframes float {
        0% {
            transform: translateY(0px);
            opacity: 1;
            filter: blur(2px);
        }

        50% {
            transform: translateY(-80px);
            opacity: 0;
            filter: blur(4px);
        }

        100% {
            transform: translateY(0px);
            opacity: 1;
            filter: blur(2px);
        }
    }

    @keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }

    
}

@keyframes rotate {
        0% {
            transform: rotate(0deg);


        }
        100% {
            transform: rotate(360deg);

        }
    }
`