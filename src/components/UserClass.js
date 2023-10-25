import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }
  async componentDidMount() {
    const request = await fetch("https://api.github.com/users/Realker23");
    const json = await request.json();
    const {name, location} = json;
    this.setState({
      userInfo: json,
    });
  }
  render() {
    console.log(this.state.userInfo);
    const {name, location} = this.state.userInfo;
    return (
      <div>
        <h1> Name : {name} </h1>

        <h2>Location : {location}</h2>
      </div>
    );
  }
}

export default UserClass;
