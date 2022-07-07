import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto; 
  padding: 2.5rem 1rem;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 32px;
  padding: 1rem;
`
export const Title = styled.p`
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  border-bottom: 1px solid #999;
  width: fit-content;
`
export const H1 = styled.h1`
  width: 100%;
  padding: 0 1.5rem;

  margin-bottom: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`

export const Input = styled.input`
  margin-bottom: 1rem;
  width: 100%;
  border: 0;
  padding: 0.75rem 1rem;
  font-size: 1.3rem;
  border-radius: 32px;
  border-bottom: 1px solid #999;

`

export const Button = styled.button`
  border: 0;
  padding: 0.75rem 1rem;
  font-size: 1.3rem;
  background-color: var(--blue-light);
  color: white;
  border-radius: 32px;
`

export const Table = styled.table`
  margin-top: 2rem;

  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: var(--blue);
    font-weight: 400;
    padding: 1rem 1rem;
    text-align: left;
    line-height: 1.5rem;
    border-bottom: 1px solid #999;
  }
  tr {
    border-radius: 32px;
    background: var(--shape);
    color: '000';
  }
  td {
    padding: 1rem 1rem;
    border: 0;
    border-bottom: 1px solid #999;
  }
`

export const ButtonIcon = styled.button`
  padding: 0 0.5rem;
  height: 3rem;
  background: var(--green);
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    filter: brightness(0.9)
  }


`