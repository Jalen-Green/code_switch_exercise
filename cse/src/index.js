import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card";

const root = ReactDOM.createRoot(document.getElementById("root"));

class RandomUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      brknum: window.innerWidth < 900 ? 3 : 4,
    };
  }

  componentDidMount() {
    this.getUsers(10);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) this.setState({ brknum: 3 });
      else this.setState({ brknum: 4 });
    });
  }

  getUsers(num) {

    let url = "https://random-data-api.com/api/users/random_user?size=" + num;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  getNum() {
    let select = document.getElementById("usramt");
    let val = select.options[select.selectedIndex].text;
    return val;
  }

  insertLnBk(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (i % num === 0) {
        let lnbreak = (
          <div key={"bk" + i} style={{ flexBasis: "100%", height: "10px" }}></div>
        );
        arr.splice(i, 0, lnbreak);
      }
    }
  }

  render() {
    var options = [];

    for (let i = 10; i < 50; i += 5) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    let users = this.state.users;
    users = users.map((val, idx) => {
      return (
        <li key={idx}>
          <Card
            id={idx}
            first={val.first_name}
            last={val.last_name}
            avatar={val.avatar}
            email={val.email}
            phone={val.phone_number}
            gender={val.gender}
          />
        </li>
      );
    });

    this.insertLnBk(users, this.state.brknum);

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ paddingBottom: "30px", paddingTop: "30px" }}>
            <button
              className="usersbutton"
              id="usersbutton"
              onClick={() => this.getUsers(this.getNum())}
            >
              Get Random Users
            </button>
            &emsp;
            <select name="usramt" id="usramt">
              {options}
            </select>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              minWidth: "586px",
            }}
          >
            {users}
          </div>
        </div>
      </div>
    );
  }
}

root.render(<RandomUsers />);
