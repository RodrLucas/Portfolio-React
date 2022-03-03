import styled from "styled-components";

export const Container = styled.div`

`

export const Header = styled.header`
   nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 35px;
    margin-bottom: 250px;
    
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
    }
   }
`
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 34px;
`
export const LI = styled.li`
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 23px;
    margin-left: 45px;
    list-style-type: none;

   a{
       &:hover{
        color: #323D70;
       }
   }

`


export const Main = styled.main`

`

//First-Card
export const H2 = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 47px;

   &:hover{
       color: #323D70;
       cursor: pointer;
   }
`

export const P = styled.p`
    margin-top: 45px;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 23px;
    color: #828282;
`

export const Button = styled.button`
    width: 200px;
    height: 58px;
    border: 1px solid #333333;
    margin-top: 35px;
    cursor: pointer;
    font-size: 17px;
    margin-left: 10px;

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
    font-size: 40px;
    line-height: 42px;
    margin-bottom: 30px;
`

//Third Card
export const Project = styled.a`
    width: 450px;
    height: 300px;
    background: #212121;
    border: 1px solid #333333;
    border-radius: 3px;
    padding: 20px 25px;
    cursor: pointer;
    transform: scale(0.9);
    transition: 0.3s;

    &:hover{
        transform: scale(1);
    }

    h3{
        background: #212121;
        font-weight: 500;
        font-size: 25px;
        line-height: 23px;
        color: #FFFFFF;
        margin: 23px 0 6px 0;
    }

    p{
        background: #212121; 
        font-size: 20px;
        line-height: 18px;
        color: #828282;
    }

    img{
        width: 395px;
    }
`

//Fourth card
export const Services = styled.li`
    width: 450px;
    height: 300px;
    background: #212121;
    border: 1px solid #333333;
    border-radius: 3px;
    list-style-type: none;

    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    color: #828282;
    padding-left: 30px;
    img{
        display: block;
        margin: 44px 0;
        width: 100px;
        height: 100px;
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
    width: 180px;


    img{
        background: none;
        width: 45px;
        height: 45px;
    }

    p{
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 23px;
        color: #F9F9F9;
        margin: 15px 0 5px 0;

        &:hover{
            color:#323D70;
        }
    }

    span{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 21px;
        color: #828282;
    }
`

export const Footer = styled.footer`
    margin-top: 185px;

    div{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #212121;
    }

    p{
        background: none;
        font-size: 18px;

        strong{
            background: none;
            color: #323D70;
        }
    }
`

export const Btn = styled.div`
    position: fixed;
    bottom: 80px;
    right: 50px;
    cursor: pointer;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    padding: 30px;
    box-shadow: 2px -2px 0 1px #FFFFFF inset;
    transform: scale(0.9) rotate(135deg);
    transition: 0.3s;

    &:hover{
        transform: scale(1) rotate(135deg);;
        box-shadow: 2px -2px 0 1px #323D70 inset;
    }

`