import { Row, Form, Col } from "react-bootstrap"

import SingleBook from "./SingleBook"
import { Component } from "react"

// const BookList = function (props) {
//   return (
//     <>
// <Row className="g-3 d-flex flex-wrap justify-content-center mb-5">
//   {props.category.slice(50, 58).map((book) => {
//     return (
//       <SingleBook
//         category={book}
//         key={book.asin}
//         categoryColor={props.categoryColor}
//       />
//     )
//   })}
// </Row>
//     </>
//   )
// }

class BookList extends Component {
  state = {
    searchQuery: "",
  }

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-3 d-flex flex-wrap justify-content-center mb-5">
          {this.props.category
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book) => (
              <Col xs={12} md={4} key={book.asin}>
                <SingleBook
                  category={book}
                  key={book.asin}
                  categoryColor={this.props.categoryColor}
                />
              </Col>
            ))}
        </Row>
      </>
    )
  }
}
export default BookList
