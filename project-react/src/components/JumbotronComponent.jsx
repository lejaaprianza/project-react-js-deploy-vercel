import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.users.title,
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">
            This is the basic react project with redux that can be the fundamental of react js
          </p>
          <hr className="my-2" />
          <p>
            under constructions
          </p>
          <p className="lead">
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps)(JumbotronComponent);
