import PropTypes from 'prop-types'
import { useFormik, Formik } from 'formik'

import {
  Input,
  AddButton,
  Container,
  FormWrapper,
} from './styled'

export const TaskInput = ({ value, onChange, onAdd }) => {
  const formik = useFormik({
    initialValues: {
      text: value,
    },
  })

  return (
    <Container>
      <Formik>
        <FormWrapper onSubmit={onAdd}>
          <Input
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
