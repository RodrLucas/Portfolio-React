import styled from "styled-components";


export const LI = styled.li`
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-left: 2.5rem;
    list-style-type: none;

   a{
       &:hover{
        color: #323D70;
       }
   }

`

//First-Card
export const Button = styled.button`
    width: 11rem;
    height: 3.5rem;
    border: 1px solid #333333;
    margin-top: 2rem;
    cursor: pointer;
    font-size: 1rem;
    margin-left: 1rem;

    &:hover{
        background: #323D70;
    }
    a{
        background: none;
        font-weight: bold;
    }
   
`


//Seccond-Card
export const Subtittle = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 2rem;
    margin-bottom: 2rem;
`

//Third Card
export const Project = styled.a`
    width: 29rem;
    height: 19rem;
    background: #212121;
    border: 1px solid #333333;
    border-radius: 3px;
    padding: 1.5rem 2rem;
    cursor: pointer;
    transform: scale(0.9);
    transition: 0.3s;

    &:hover{
        transform: scale(1);
    }

    h3{
        background: #212121;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1rem;
        color: #FFFFFF;
        margin: 1.5rem 0 .5rem 0;
    }

    p{
        background: #212121; 
        font-size: 1.2rem;
        line-height: 1rem;
        color: #828282;
    }

    img{
        width: 25rem;
    }
`

//Fourth card
export const Services = styled.li`
    width: 28rem;
    height: 18rem;
    background: #212121;
    border: 1px solid #333333;
    border-radius: 3px;
    list-style-type: none;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #828282;
    padding-left: 2rem;


    img{
        display: block;
        margin: 2.5rem 0;
        width: 5rem;
        height: 5rem;
        background: none;
    }

    &:hover{
        border-bottom: 5px solid #323D70
    }
`

//Fifth-card
export const Skills = styled.li`
    width: 150px;
    height: 150px;
    background: #212121;
    border: 1px solid #333333;
    padding: 35px;
    list-style-type: none;

    img{
        background: none;
    }

    &:hover{
        border-bottom: 5px solid #323D70
    }
`

//Sixth Card
export const Work = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12rem;


    img{
        background: none;
        width: 2.5rem;
        height: 2.5rem;
    }

    p{
        font-style: normal;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 1.3rem;
        color: #F9F9F9;
        margin: 1rem 0 .2rem 0;

        &:hover{
            color:#323D70;
        }
    }

    span{
        font-style: normal;
        font-weight: normal;
        font-size: 1.2rem;
        line-height: 1.1rem;
        color: #828282;
    }
`

export const Btn = styled.div`
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    cursor: pointer;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    padding: 1rem;
    box-shadow: 2px -2px 0 1px #FFFFFF inset;
    transform: scale(0.9) rotate(135deg);
    transition: 0.3s;
    background:none;

    &:hover{
        transform: scale(1) rotate(135deg);;
        box-shadow: 2px -2px 0 1px #323D70 inset;
    }

`