import { render } from '@redwoodjs/testing/web'

import RobertaBaseSquad2Page from './RobertaBaseSquad2Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RobertaBaseSquad2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RobertaBaseSquad2Page />)
    }).not.toThrow()
  })
})
