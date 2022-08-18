import styled from 'styled-components'

import { NoTaskTitle } from '../../containers/Task/index'

const TasksTitle = styled(NoTaskTitle)``

const TasksContainer = styled.div`
  border: 1px solid orange;
  height: 100vh;
  padding: 1.5rem;
  border-radius: 0.5rem;
  max-width: 1000px;
  overflow-y: auto;
  margin: 0 auto;
`

export { TasksTitle, TasksContainer }
