import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ItemCard } from "./ItemCard";
import { Api } from "../../Api/Api";
import loadingImg from "../../Img/loadingImg.svg";

import "../../Styles/ReadAll.scss";

export class ReadAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      items: [],
    };
  }

  async componentDidMount() {
    const request = await Api.buildApiGetRequest(Api.readAllUrl());

    const items = await request.json();

    const itemsWithImageUrl = items.filter((item) => Boolean(item.imageUrl));

    this.setState({
      isLoading: false,
      items: itemsWithImageUrl,
      filteredItems: itemsWithImageUrl,
    });
  }

  filterItems = (e) => {
    const searchValue = e.target.value?.toLowerCase();

    const filteredItems = this.state.items.filter((item) =>
      item.name?.toLowerCase().includes(searchValue)
    );

    this.setState({
      filteredItems,
    });
  };

  render() {
    const { isLoading, filteredItems } = this.state;

    if (isLoading) {
      return (
        <Container className="contentArea">
          <Row>
            <img className="loading" src={loadingImg} />
          </Row>
        </Container>
      );
    } else {
      if (filteredItems == false) {
        return (
          <Container className="contentArea">
            <Row>
              <p className="noData">Não há personagens cadastrados!</p>
            </Row>
          </Container>
        );
      } else {
        return (
          <Container className="contentArea">
            <Row>
              {filteredItems.map((item) => (
                <ItemCard item={item} key={item._id} />
              ))}
            </Row>
          </Container>
        );
      }
    }
  }
}
