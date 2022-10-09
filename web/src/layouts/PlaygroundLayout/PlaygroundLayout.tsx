import { Link, routes } from '@redwoodjs/router'

type PlaygroundLayoutProps = {
  children?: React.ReactNode
}

const PlaygroundLayout = ({ children }: PlaygroundLayoutProps) => {
  return (
    <>
      <header className="relative flex items-center justify-between bg-blue-600 py-4 px-8 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 transition duration-100 hover:text-blue-100"
            to={routes.home()}
          >
            AIX
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="rounded py-2 px-4 transition duration-100 hover:bg-blue-600"
                to={routes.robertaBaseSquad2()}
              >
                Q & A
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mx-auto mt-4 max-w-4xl rounded-b bg-white p-12 shadow">
        {children}
      </main>
    </>
  )
}

export default PlaygroundLayout
