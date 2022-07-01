import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBack: false,
    };
  }

  componentDidMount() {
    let but = document.getElementById("usersbutton");
    but.addEventListener("click", () => {
        this.setState({ showBack: false });
        document.getElementById(this.props.id).style.width = "fit-content";
    });
  }

  render() {
    let disp = this.state.showBack
      ? { display: "block", paddingBottom: "10px" }
      : { display: "none" };

    return (
      <button
        className="cardbutton"
        onClick={() => {
          console.log(this.props.id);
          let card = document.getElementById(this.props.id);
          card.style.width = !this.state.showBack ? "275px" : "fit-content";
          this.setState({ showBack: !this.state.showBack });
        }}
      >
        <div className="card" id={this.props.id}>
          <img className="avatar" src={this.props.avatar} alt=""></img>
          <br />
          <div className="name">
            {this.props.first} {this.props.last}
          </div>
          <br />
          <div className="back" style={disp}>
            <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
              Email:{" "}
            </div>
            {this.props.email}
            <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
              Gender:{" "}
            </div>
            {this.props.gender}
            <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
              Phone Number:
            </div>
            {this.props.phone}
            <br />
          </div>
        </div>
      </button>
    );
  }
}
