import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }
  render() {
    console.log(this.props.errorResponDataUser);
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal(
          "User created!",
          "Nama: " + this.props.getResponDataUser.nama,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
export default connect(mapStateToProps, null)(CreateUserContainer);
