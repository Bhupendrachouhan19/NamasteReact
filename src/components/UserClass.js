import React from "react";

class UserClass extends React.Component {
  constructor (props) {
    super(props)
    this.firstName = this.props.first_name;
    console.log(props)
  }

  render() {
    const firstname = this.firstName
    
    return (
      <div className="user-container">
        <h2 className="user user-name">{firstname} Chouhan</h2>
        <h3 className="user user-location">Location: Bhilai</h3>
        <h3 className="user user-social">instagram : @thebhupi</h3>
        <p className="user-bio-para">Comming from UserClass.js</p>
      </div>
    );
  }
}

export default UserClass;