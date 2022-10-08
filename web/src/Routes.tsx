// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route, Set } from '@redwoodjs/router'

import PlaygroundLayout from 'src/layouts/PlaygroundLayout/PlaygroundLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PlaygroundLayout}>
        <Route path="/roberta-base-squad2" page={RobertaBaseSquad2Page} name="robertaBaseSquad2" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
