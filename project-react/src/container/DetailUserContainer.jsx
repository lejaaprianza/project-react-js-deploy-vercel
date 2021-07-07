import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";
import { connect } from "react-redux";
import { getUsersDetail } from "../actions/userAction";
import DetailUserComponent from "../components/DetailUserComponent";

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail User {this.props.match.params.id}</h1>
        <DetailUserComponent />
      </Container>
    );
  }
}

export default connect()(DetailUserContainer);
