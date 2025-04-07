import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
// import AllTheBooks from "./components/AllTheBooks"
import fantasy from "./data/fantasy.json"
import history from "./data/history.json"
import horror from "./data/horror.json"
import romance from "./data/romance.json"
import scifi from "./data/scifi.json"
import { Container } from "react-bootstrap"
import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"

import { useState } from "react"
import Button from "react-bootstrap/Button"
import Collapse from "react-bootstrap/Collapse"

function App() {
  const categoryColors = {
    fantasy: "rgb(255, 165, 0)",
    history: "rgb(51, 206, 51)",
    horror: "rgb(139, 0, 0)",
    romance: "rgb(255, 105, 180)",
    scifi: "rgb(0, 191, 255)",
  }
  const [open, setOpen] = useState(false)

  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1 bg-secondary">
        <Welcome />
        <Container className="d-flex flex-column">
          <Button
            className="d-flex justify-content-center mb-3 mt-3 bg-transparent border-0 fs-1 fw-fw-semibold"
            style={{ color: categoryColors.fantasy }}
          >
            FANTASY
          </Button>

          <BookList category={fantasy} categoryColor={categoryColors.fantasy} />

          {/* <Button
            className="d-flex justify-content-center mb-3 mt-3 bg-transparent border-0 fs-1 fw-fw-semibold"
            style={{ color: categoryColors.history }}
          >
            HISTORY
          </Button>

          <BookList category={history} categoryColor={categoryColors.history} />

          <Button
            className="d-flex justify-content-center mb-3 mt-3 bg-transparent border-0 fs-1 fw-fw-semibold"
            style={{ color: categoryColors.horror }}
          >
            HORROR
          </Button>

          <BookList category={horror} categoryColor={categoryColors.horror} />

          <Button
            className="d-flex justify-content-center mb-3 mt-3 bg-transparent border-0 fs-1 fw-fw-semibold"
            style={{ color: categoryColors.romance }}
          >
            ROMANCE
          </Button>

          <BookList category={romance} categoryColor={categoryColors.romance} />

          <Button
            className="d-flex justify-content-center mb-3 mt-3 bg-transparent border-0 fs-1 fw-fw-semibold"
            style={{ color: categoryColors.scifi }}
          >
            SCIFI
          </Button>

          <BookList category={scifi} categoryColor={categoryColors.scifi} /> */}
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
