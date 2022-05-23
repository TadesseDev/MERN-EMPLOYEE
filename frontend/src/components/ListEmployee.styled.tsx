import styled from 'styled-components'

export const Employee = styled.div`
    font-size: 1.2rem;
    border: 1px solid silver;
    display: flex;
    justify-content: space-around;
    padding: 1vw;
    margin: 1vw;
`

export const EmployeeEdit = styled.form`
max-width: 400px;
display: flex;
flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: #efecec;
    gap: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
        transform: translate(-50%, -50%);
    box-shadow: 10px 10px 200px 200px silver;
    padding: 20px;
    
`