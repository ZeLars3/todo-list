import { Component } from 'react'

import { Navbar } from 'components/Navbar'
import Task from 'containers/Task'
import { ErrorBoundary } from 'components/ErrorBoundary'

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ErrorBoundary>
          <Task />
        </ErrorBoundary>
      </>
    )
  }
}
