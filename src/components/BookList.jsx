import { Row, Form, Col } from "react-bootstrap"

import SingleBook from "./SingleBook"
import { Component } from "react"
import CommentArea from "./CommentArea"

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
    selectedBook: null,
  }
  changeSelectedBook = (asin) => {
    this.setState({ selectedBook: asin })
  }

  render() {
    return (
      <>
        <Row>
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={4} className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={this.state.searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Col xs={6} md={8}>
            <Row className="g-3 d-flex flex-wrap justify-content-center mb-5">
              {console.log(
                `Questo è l'array di tutti i libri ${this.props.category[0].category}, di cui io ne visualizzerò solo 10`,
                this.props.category
              )}
              {this.props.category
                .filter((book) =>
                  book.title.toLowerCase().includes(this.state.searchQuery)
                )
                .slice(0, 10)
                .map((book) => (
                  <Col xs={12} sm={12} md={6} lg={4} key={book.asin}>
                    <SingleBook
                      category={book}
                      key={book.asin}
                      categoryColor={this.props.categoryColor}
                      selectedBook={this.state.selectedBook}
                      changeSelectedBook={this.changeSelectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={6} md={4}>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
      </>
    )
  }
}
export default BookList
