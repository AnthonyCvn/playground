import { render } from '@redwoodjs/testing/web'

import Dropzone from './Dropzone'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Dropzone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Dropzone />)
    }).not.toThrow()
  })
})
