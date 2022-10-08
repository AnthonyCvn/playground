import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RobertaBaseSquad2Page = () => {
  return (
    <>
      <MetaTags
        title="RobertaBaseSquad2"
        description="RobertaBaseSquad2 page"
      />

      <h1>RobertaBaseSquad2Page</h1>
      <p>
        This site was created to demonstrate my mastery of Redwood: Look on my
        works, ye mighty, and despair!
      </p>
      <Link to={routes.home()}>Return home</Link>
    </>
  )
}

export default RobertaBaseSquad2Page
