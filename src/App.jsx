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
import { Container, Form } from "react-bootstrap"
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

  // PER I COLLAPSE
  const [openFantasy, setOpenFantasy] = useState(false)
  const [openHistory, setOpenHistory] = useState(false)
  const [openHorror, setOpenHorror] = useState(false)
  const [openRomance, setOpenRomance] = useState(false)
  const [openScifi, setOpenScifi] = useState(false)

  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1 bg-secondary">
        <Welcome />
        <Container className="d-flex flex-column">
          {/* ------------------ */}
          <Button
            className="d-flex justify-content-center mb-3 mt-3 bg-transparent border-0 fs-1 fw-fw-semibold"
            style={{ color: categoryColors.fantasy }}
            onClick={() => setOpenFantasy(!openFantasy)}
            aria-controls="Collapse-fantasy"
            aria-expanded={openFantasy}
          >
            FANTASY
          </Button>
          <Collapse in={openFantasy}>
            <div id="Collapse-fantasy">
              <BookList
                category={fantasy}
                categoryColor={categoryColors.fantasy}
              />
            </div>
          </Collapse>
          {/* ----------------- */}
          <Button
            className="d-flex justify-content-center mb-3 mt-3 bg-transparent border-0 fs-1 fw-fw-semibold"
            style={{ color: categoryColors.history }}
            onClick={() => setOpenHistory(!openHistory)}
            aria-controls="Collapse-history"
            aria-expanded={openHistory}
          >
            HISTORY
          </Button>
          <Collapse in={openHistory}>
            <div id="Collapse-history">
              <BookList
                category={history}
                categoryColor={categoryColors.history}
              />
            </div>
          </Collapse>
          {/* ----------------- */}
          <Button
            className="d-flex justify-content-center mb-3 mt-3 bg-transparent border-0 fs-1 fw-fw-semibold"
            style={{ color: categoryColors.horror }}
            onClick={() => setOpenHorror(!openHorror)}
            aria-controls="Collapse-horror"
            aria-expanded={openHorror}
          >
            HORROR
          </Button>
          <Collapse in={openHorror}>
            <div id="Collapse-horror">
              <BookList
                category={horror}
                categoryColor={categoryColors.horror}
              />
            </div>
          </Collapse>
          {/* ----------------- */}
          <Button
            className="d-flex justify-content-center mb-3 mt-3 bg-transparent border-0 fs-1 fw-fw-semibold"
            style={{ color: categoryColors.romance }}
            onClick={() => setOpenRomance(!openRomance)}
            aria-controls="Collapse-romance"
            aria-expanded={openRomance}
          >
            ROMANCE
          </Button>
          <Collapse in={openRomance}>
            <div id="Collapse-romance">
              <BookList
                category={romance}
                categoryColor={categoryColors.romance}
              />
            </div>
          </Collapse>
          {/* ----------------- */}
          <Button
            className="d-flex justify-content-center mb-3 mt-3 bg-transparent border-0 fs-1 fw-fw-semibold"
            style={{ color: categoryColors.scifi }}
            onClick={() => setOpenScifi(!openScifi)}
            aria-controls="Collapse-scifi"
            aria-expanded={openScifi}
          >
            SCIFI
          </Button>
          <Collapse in={openScifi}>
            <div id="Collapse-scifi">
              <BookList category={scifi} categoryColor={categoryColors.scifi} />
            </div>
          </Collapse>
          {/* ----------------- */}
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
