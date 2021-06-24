import { Component } from "react";

import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

import juImg from "../../Img/ju.jpg";

import "../../Styles/About.scss";

export class About extends Component {
  render() {
    return (
      <Card>
        <Card.Img src={juImg} />
        <Card.Body>
          <Card.Title>Juliane Monteiro Pires</Card.Title>
          <Card.Text>
            Olá, tudo bem? 😄 <br />
            <br />
            Sou Graduanda em Ciência da Computação na UFRPE e Desenvolvedora
            Front End Jr na Mobix, amando descobrir tantos conceitos e
            aplicações que a tecnologia tem a nos oferecer.
            <br />
            <br />
            Com foco em ser frontend developer javascript (porém TShaped).
            <br />
            <br />
            Recifense nata e apaixonada, projeto de gamer, cantora de karaokê e
            tocadora de triângulo.
            <br />
            <br />
            Rumo ao próximo nível sempre!
            <br />
            <br />
            ✔️ Séries, filmes e músicas
            <br />
            ✔️ Jogos de mundo aberto e com bastante história
            <br />
            ✔️ Karatê
            <br />
            ✔️ Gatos, cachorros e todo tipo de pet
            <br />
            ✔️ Cantar no chuveiro
            <br />
            ✔️ Livros
            <br />
            ✔️ Séries sobre filosofia
            <br />
            ✔️ Triângulo + Violão e (um dia) Sanfona
            <br />
          </Card.Text>
          <Link
            className="btn btn-primary"
            to={{ pathname: "https://github.com/JulianePires" }}
            target="_blank"
          >
            Visite o meu GitHub
          </Link>
        </Card.Body>
      </Card>
    );
  }
}
