import PropTypes from 'prop-types'
import { useFormik } from 'formik'

import { Input, AddButton, Container } from './styled'

export const TaskInput = ({ value, onChange, onAdd }) => {
  const formik = useFormik({
    initialValues: {
      text: value,
    },
    onSubmit: values => {
      onAdd
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="task"
          type="text"
          placeholder="Add a task"
          value={formik.values.text}
          onChange={onChange}
        />
        <AddButton type="submit">Add</AddButton>
      </form>
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
