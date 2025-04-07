import { Alert, Container } from "react-bootstrap"

const Welcome = function () {
  return (
    <>
      <Container>
        <Alert variant="warning" className="my-3 text-center">
          <Alert.Heading className="d-flex align-items-center justify-content-center">
            Benvenuto in BookStore!
            <img
              src="/assets/bookstore.svg"
              width="25"
              height="25"
              className="ms-2"
            ></img>
          </Alert.Heading>
          <p>
            Questa è la tua occasione per diventare una persona acculturata
            scegliendo un fantastico libro da leggere. Segui il tuo instinto,
            ciao!
          </p>
          <hr />
          <p className="mb-0">
            Ti avviso, probabilmente questa pagina sarà fatta un pò col cu*o,
            perdonami.
          </p>
        </Alert>
      </Container>
    </>
  )
}

export default Welcome
