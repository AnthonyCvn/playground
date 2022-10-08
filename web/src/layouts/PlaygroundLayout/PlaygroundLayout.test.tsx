import { render } from '@redwoodjs/testing/web'

import PlaygroundLayout from './PlaygroundLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlaygroundLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlaygroundLayout />)
    }).not.toThrow()
  })
})
