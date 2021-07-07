import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { getUsersDetail, putUserUpdate } from "../actions/userAction";
import { connect } from "react-redux";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }
  handleSubmit(data) {
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
  }
  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal(
          "User updated!",
          "Nama: " + this.props.getResponDataUser.nama,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
export default connect(mapStateToProps, null)(EditUserContainer);
