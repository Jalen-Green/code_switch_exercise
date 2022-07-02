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
      ? { opacity: 1, paddingBottom: "10px", height: "136px" }
      : { opacity: 0, height: "0" };

    return (
      <button
        className="cardbutton"
        onClick={() => {
          let card = document.getElementById(this.props.id);
          card.style.width = !this.state.showBack ? "275px" : "206px";
          card.style.height = !this.state.showBack ? "418px" : "272px";
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
            <div style={{ textDecoration: "underline", fontWeight: "bold", height: this.state.showBack ? "unset" : "0px"}}>
              Email:
            </div>
            <div style= {{height: this.state.showBack ? "unset" : "0px"}}>{this.props.email}</div>
            <div style={{ textDecoration: "underline", fontWeight: "bold", height: this.state.showBack ? "unset" : "0px"}}>
              Gender:
            </div>
            <div style= {{height: this.state.showBack ? "unset" : "0px"}}>{this.props.gender}</div>
            <div style={{ textDecoration: "underline", fontWeight: "bold", height: this.state.showBack ? "unset" : "0px"}}>
              Phone Number:
            </div>
            <div style= {{height: this.state.showBack ? "unset" : "0px"}}>{this.props.phone}</div>
            <br />
          </div>
        </div>
      </button>
    );
  }
}
