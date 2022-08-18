import styled from 'styled-components'

const Input = styled.input`
  max-width: 600px;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #e9ecef;
  font-size: 1.5rem;
  color: #212529;
  border: 1px solid #212529;
  background-color: #fff;
  border-radius: 0.25rem;

  &:focus {
    outline: none;
  }

`

const AddButton = styled.button`
  max-width: 200px;
  padding: 0.5rem;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  background-color: #FCD299;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  border-radius: 0.25rem;
  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  max-width: 1000px;
  align-items: center;
  item-align: center;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 3rem;
  grid-gap: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 1px solid orange;
  border-radius: 0.5rem;
`

export { Input, AddButton, Container }
