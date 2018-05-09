import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarfocused: false,
      error: ''
    };
  }
  onChangeDes = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onChangeNote = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }));
  };
  onChangeAmount = (e) => {
    const amount = e.target.value
  if (amount.match(/^\d*(\.\d{0,2})?$/)) {
    this.setState(() => ({ amount }))
    }
  };
  onChangeDate = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarfocused: focused }));
  };
  onSubmitForm = (e) => {
    if (!this.state.description || !this.state.amount) {
     this.setState(() => ({ error: 'Please enter a valid description and amount' }));
    } else {
     this.setState(() => ({ error: '' }));
     this.props.onSubmit({
      description: this.state.description,
      amount: Number(this.state.amount) * 100,
      note: this.state.note,
      createdAt: this.state.createdAt.valueOf()
     });
    }
    e.preventDefault();
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.onSubmitForm}>
      <input
      type="text"
      value={this.state.description}
      placeholder="description"
      onChange={this.onChangeDes}
      />
      <input
      type="number"
      placeholder="amount"
      value={this.state.amount}
      onChange={this.onChangeAmount}
      />
      <SingleDatePicker
       date={this.state.createdAt}
       onDateChange={this.onChangeDate}
       focused={this.state.calendarfocused}
       onFocusChange={this.onFocusChange}
       numberOfMonths={1}
       isOutsideRange={() => false}
      />
      <textarea
      placeholder="note"
      value={this.state.note}
      onChange={this.onChangeNote}
      >
      </textarea>
      <button
      
      >
      Add Expense</button>

      </form>
      </div>
    )
  }
}