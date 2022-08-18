import { Component } from 'react'

import { Navbar } from './components/Navbar'
import Task from './containers/Task/Task'
import { ErrorBoundary } from './errors'

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
