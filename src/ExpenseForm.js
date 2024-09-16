import { Component } from "react";
import "./ExpenseForm.css";

class ExpenseTracker extends Component {
  state = {
    amount: "",
    date: "",
    description: "",
    expensesList: [],
    onClickform: false,
  };

  onGiveAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  onGiveDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  onGiveDate = (event) => {
    this.setState({ date: event.target.value });
  };

  onClickForm = (event) => {
    event.preventDefault();
    this.setState({ onClickform: true });
    const { amount, description, date } = this.state;
    const Details = { description: description, amount: amount, date: date };
    this.setState((prevState) => ({
      expensesList: [...prevState.expensesList, Details],
    }));
  };

  onClickDelete = () => {
    const { expensesList, amount } = this.state;
    const FilteredList = expensesList.filter(
      (eachItem) => eachItem.amount !== amount
    );
    this.setState({ expensesList: FilteredList });
  };

  render() {
    const { expensesList } = this.state;
    console.log(expensesList);
    return (
      <div className="main-container">
        <h1>Expense Tracker</h1>
        <form className="Form-container" onSubmit={this.onClickForm}>
          <p className="para">Description</p>
          <input
            type="text"
            placeholder="Description"
            className="input-style"
            onChange={this.onGiveDescription}
          />
          <p className="para">Amount</p>
          <input
            type="text"
            placeholder="Amount"
            className="input-style"
            onChange={this.onGiveAmount}
          />
          <p className="para">Date</p>
          <input
            type="date"
            placeholder="Date"
            className="input-style"
            onChange={this.onGiveDate}
          />
          <button className="submit-button">Submit</button>
        </form>
        {expensesList.length === 0 ? (
          ""
        ) : (
          <ul>
            {expensesList.map((eachItem, index) => (
              <li key={eachItem.index} className="list-container">
                <p>{eachItem.description}</p>
                <p>{eachItem.amount}</p>
                <p>{eachItem.date}</p>
                <button onClick={this.onClickDelete}>delete</button>
                <button>Edit</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ExpenseTracker;
