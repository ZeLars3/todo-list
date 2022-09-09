import PropTypes from 'prop-types'
import { useRef } from 'react'
import { useFormik, Formik } from 'formik'

import {
  Input,
  AddButton,
  Container,
  FormWrapper,
} from './styled'

export const TaskInput = ({ value, onChange, onAdd }) => {
  const inputRef = useRef(null)
  const formik = useFormik({
    initialValues: {
      text: value,
    },
  })

  const onSubmit = () => {
    onAdd(),
    inputRef.current.value = ''
  }

  return (
    <Container>
      <Formik>
        <FormWrapper onSubmit={onSubmit}>
          <Input
            ref={inputRef}
            id="task"
            type="text"
            placeholder="Add a task"
            value={formik.text}
            onChange={onChange}
          />
          <AddButton type="submit">Add</AddButton>
        </FormWrapper>
      </Formik>
    </Container>
  )
}

TaskInput.propTypes = {
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  value: PropTypes.string,
}

TaskInput.defaultProps = {
  onChange: () => {},
  onAdd: () => {},
  value: '',
}
