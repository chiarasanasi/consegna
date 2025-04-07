import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Component } from "react"
import CommentArea from "./CommentArea"

class SingleBook extends Component {
  state = {
    // selected: false,
    color: "white",
    showComments: false,
  }

  render() {
    const { categoryColor } = this.props
    console.log(
      `Asin di ${this.props.category.title}`,
      this.props.category.asin
    )
    return (
      <>
        <Card
          onClick={() =>
            this.props.changeSelectedBook(this.props.category.asin)
          }
          className=" border-3 rounded-3 bg-dark"
          style={{
            border:
              this.props.selectedBook === this.props.category.asin
                ? `solid ${categoryColor}`
                : "solid #212529",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.category.img}
            className="object-fit-cover"
            style={{ height: "360px" }}
          />
          <Card.Body className="d-flex flex-column text-center">
            <Card.Title style={{ color: categoryColor }}>
              {this.props.category.title}
            </Card.Title>
            <Card.Text className="text-white text-uppercase fw-semibold fst-italic">
              categoria : {this.props.category.category}
            </Card.Text>
            <Card.Text className="text-secondary">
              Prezzo : {this.props.category.price}€
            </Card.Text>
            {/* <Button
              variant="primary"
              className="mt-auto"
              onClick={() =>
                this.setState({
                  showComments: !this.state.showComments,
                  selected: !this.state.selected,
                })
              }
            >
              Recensioni
            </Button>
            {this.state.showComments && (
              <div id={`comments-${this.props.category.asin}`}>
                <CommentArea asin={this.props.category.asin} />
              </div>
            )} */}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
