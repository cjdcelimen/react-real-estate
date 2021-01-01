import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#1F201A' : '#2D2C3C')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 30px;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? '#F3FBFB' : '#9494A4')};
    font-size: ${({ big }) => (big ? '20px' : '14px')};

    &:hover{
        transform: translateY(-2px) ;
    }
`