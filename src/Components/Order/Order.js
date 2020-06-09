import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { setCheckedOutItems } from "../../Redux/Actions";

const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  };
};


class ConnectedOrder extends Component {
  render() {
    let totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return (
      <div style={{ padding: 10 }}>
        <div style={{ fontSize: 24, marginTop: 10 }}>Загальне замовлення</div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Імя товару</TableCell>
              <TableCell>Ціна</TableCell>
              <TableCell>Кількість</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.checkedOutItems.map((item, index) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div
          style={{
            color: "#504F5A",
            marginLeft: 5,
            marginTop: 50,
            fontSize: 22
          }}
        >
          Загальна ціна: {totalPrice} грню
        </div>
        <Button
          color="primary"
          variant="outlined"
          disabled={totalPrice === 0}
          onClick={() => {
            console.log("придбано");
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Придбати
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          disabled={totalPrice === 0}
          onClick={() => {
            this.props.dispatch(setCheckedOutItems([]));
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Відмінити
        </Button>
      </div>
    );
  }
}
const Order = withRouter(connect(mapStateToProps)(ConnectedOrder));

export default Order;
