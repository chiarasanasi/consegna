import { Col, Card, Row, Button } from "react-bootstrap"
import { Component } from "react"

class AllTheBooks extends Component {
  render() {
    return (
      <>
        <Row className="g-3 d-flex flex-wrap justify-content-center mb-5">
          {this.props.category.slice(0, 6).map((book) => {
            return (
              <Col xs="12" md="4" lg="2" key={book.asin}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    className="object-fit-cover"
                    style={{ height: "350px" }}
                  />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Category : {book.category}</Card.Text>
                    <Card.Text>Price : {book.price}€</Card.Text>
                    <Button variant="primary" className="mt-auto">
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </>
    )
  }
}

export default AllTheBooks
