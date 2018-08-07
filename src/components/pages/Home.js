import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron,
  Button,
  Container,
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from "reactstrap";
import Yosho from "./Yosho";

const items = [
  {
    src:
      "https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    altText: "SpringImg",
    caption: "Visit famous spots only on Spring season"
  },
  {
    src:
      "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    altText: "SummerImg",
    caption: "Enjoy your holiday with our special Summer offers"
  },
  {
    src:
      "https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    altText: "FallImg",
    caption: "Experience upcoming Fall Festivals"
  },
  {
    src:
      "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    altText: "WinterImg",
    caption: "Celebrate Christmas with your loved ones on Winter"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className="carouselImg"
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
        <Container className="jumbotronmargin">
          <Jumbotron>
            <h1 className="display-3">Plan your adventure with Yosho</h1>
            <p className="lead">Plan, Change, Commit, Go on an Adventure!</p>
            <hr className="my-2" />
            <p className="lead">
              <Button color="Danger">Start Planning</Button>
            </p>
          </Jumbotron>
        </Container>
        <Yosho />
        {/* <Container className="jumbotronmargin">
          <CardDeck>
            <Card>
              <CardBody>
                <CardTitle> Spring Plan </CardTitle>
                <CardText>
                  {" "}
                  Plan for your spring attraction visists here!{" "}
                </CardText>
                <Button>Spring Attractions</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle> Summer Plan </CardTitle>
                <CardText> Plan for your long summer holiday here! </CardText>
                <Button>Summer Specials</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle> Fall Plan </CardTitle>
                <CardText> Plan for your fall festivals here! </CardText>
                <Button>Fall Festivals</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle> Winter Plan </CardTitle>
                <CardText> Plan for your Christmas celebration here! </CardText>
                <Button>Be a Santa 101</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Container> */}
      </div>
    );
  }
}

export default Home;
