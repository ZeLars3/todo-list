import styled from 'styled-components'
import { MdOutlineClear } from 'react-icons/md'
import { BsCheckCircle } from 'react-icons/bs'

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 950px;
  margin: 0 auto;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  color: #212529;
  border-bottom: 1px solid #212529;
  background-color: ${props =>
    props.$isCompleted ? 'Lightgray' : '#fff'};
  text-decoration: ${props =>
    props.$isCompleted ? 'line-through' : 'none'};

  &:hover {
    background-color: Seashell;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledIconUpate = styled(BsCheckCircle)`
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  font-size: 1.5rem;
  color: ${props =>
    props.$isCompleted ? 'green' : '#212529'};

  &:hover {
    transform: scale(1.05);
  }
`

export const StyledIconRemove = styled(MdOutlineClear)`
  margin-left: 1.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  font-size: 1.7rem;
  color: red;

  &:hover {
    transform: scale(1.05);
  }
`
