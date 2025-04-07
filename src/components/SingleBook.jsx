import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Component } from "react"
import CommentArea from "./CommentArea "

class SingleBook extends Component {
  state = {
    selected: false,
    color: "white",
    showComments: false,
  }

  selection = () => {
    console.log("sto cliccando sulla card")
    this.setState({ selected: !this.state.selected })
  }

  render() {
    const { categoryColor } = this.props

    return (
      <>
        <Card
          className=" border-3 rounded-3 bg-dark"
          style={{
            border: this.state.selected
              ? `solid ${categoryColor}`
              : "solid #212529",
          }}
          onClick={() => this.setState({ selected: !this.state.selected })}
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
              Category : {this.props.category.category}
            </Card.Text>
            <Card.Text className="text-secondary">
              Price : ${this.props.category.price}
            </Card.Text>
            <Button
              variant="primary"
              className="mt-auto"
              onClick={() =>
                this.setState({ showComments: !this.state.showComments })
              }
            >
              Recensioni
            </Button>
            {this.state.showComments && (
              <div id={`comments-${this.props.category.asin}`}>
                <CommentArea asin={this.props.category.asin} />
              </div>
            )}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
