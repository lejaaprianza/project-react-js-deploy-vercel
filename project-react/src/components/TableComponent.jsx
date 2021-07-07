import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col } from "reactstrap";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";
import swal from "sweetalert";
import { deleteUser } from "../actions/userAction";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));
      console.log("test id " + id);
      swal("data berhasil dihapus", {
        icon: "success",
      });
    } else {
      swal("data gagal dihapus");
    }
  });
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "nama",
      text: "Name",
      sort: true,
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "21%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>{" "}
            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>{" "}
            <Button
              color="dark"
              className="mr-2"
              onClick={() => handleClick(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          search
          defaultSorted={defaultSorted}
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={"/create"}>
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faUserPlus} /> Create User
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="mb-2 d-flex justify-content-end">
                    <SearchBar {...props.searchProps} placeholder="Search..." />
                  </div>
                </Col>
              </Row>

              <div>
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? <h1>{props.errorUsersList}</h1> : <Spinner />}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
