import { Row } from "react-bootstrap"

const MyFooter = function () {
  return (
    <>
      <Row className="text-center bg-dark text-danger py-3">
        <p className="m-3">Bookstore - {new Date().getUTCFullYear()}</p>
      </Row>
    </>
  )
}

export default MyFooter
