import { Link, routes } from '@redwoodjs/router'

type PlaygroundLayoutProps = {
  children?: React.ReactNode
}

const PlaygroundLayout = ({ children }: PlaygroundLayoutProps) => {
  return (
    <>
      <header>
        <h1>UX ❤️ AI</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.robertaBaseSquad2()}>Roberta Base Squad 2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default PlaygroundLayout
