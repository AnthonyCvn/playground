import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1>HomePage</h1>
      <p className="font-light">
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p className="font-light">
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
