import styled from 'styled-components'

import { NoTaskTitle } from '../../containers/Task/styled'

export const TasksTitle = styled(NoTaskTitle)``

export const TasksContainer = styled.div`
  height: 100vh;
  padding: 1.5rem;
  border-radius: 0.5rem;
  max-width: 1000px;
  overflow-y: auto;
  margin: 0 auto;
  border: 1px solid orange;
`
