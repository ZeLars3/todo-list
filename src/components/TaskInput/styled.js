import styled from 'styled-components'

export const Input = styled.input`
  max-width: 600px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  border-bottom: 1px solid #e9ecef;
  font-size: 1.5rem;
  color: #212529;
  border: 1px solid #212529;
  background-color: #fff;

  &:focus {
    outline: none;
  }
`

export const AddButton = styled.button`
  max-width: 200px;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: all 0.4s ease-in-out;
  font-size: 1.5rem;
  color: #fff;
  background-color: #fcd299;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  max-width: 1000px;
  align-items: center;
  item-align: center;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 3rem;
  grid-gap: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 1px solid orange;
`
