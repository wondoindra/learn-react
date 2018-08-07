import React from "react";
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from "reactstrap";

const Yosho = props => {
  return (
    <Container className="jumbotronmargin">
      <CardDeck>
        <Card body outline color="success">
          <CardBody>
            <CardTitle> Spring Plan </CardTitle>
            <CardText> Plan for your spring attraction visists here! </CardText>
            <Button color="success">Spring Attractions</Button>
          </CardBody>
        </Card>
        <Card body outline color="warning">
          <CardBody>
            <CardTitle> Summer Plan </CardTitle>
            <CardText> Plan for your long summer holiday here! </CardText>
            <Button color="warning">Summer Specials</Button>
          </CardBody>
        </Card>
        <Card body outline color="danger">
          <CardBody>
            <CardTitle> Fall Plan </CardTitle>
            <CardText> Plan for your fall festivals here! </CardText>
            <Button color="danger">Fall Festivals</Button>
          </CardBody>
        </Card>
        <Card body outline color="info">
          <CardBody>
            <CardTitle> Winter Plan </CardTitle>
            <CardText> Plan for your Christmas celebration here! </CardText>
            <Button color="info">Be a Santa 101</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default Yosho;
