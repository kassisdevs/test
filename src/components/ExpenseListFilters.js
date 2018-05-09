import React from 'react';
import { connect } from 'react-redux';
import { setTextInput } from '../actions/filters';
import { sortbyAmount, sortbyDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
  this.props.setStartDate(startDate)
  this.props.setEndDate(endDate)
  }
  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }))
  }
  onTextChange = (e) => {
    this.props.setTextInput(e.target.value)
  }
  onFilterChange = (e) => {
    if (e.target.value === 'amount') {
     this.props.sortbyAmount()
    } else if (e.target.value === 'date') {
     this.props.sortbyDate()
    }
   }
  render(props) {
    return (
      <div>
      <input 
      type="text" 
      value={this.props.filters.text} 
      onChange={this.onTextChange} />
      <select 
      value={this.props.filters.sortBy} 
      onChange={this.onFilterChange}>
      <option value="date" >Date</option>
      <option value="amount" >Amount</option>
      </select>
      <DateRangePicker
      startDate={this.props.filters.startDate}
      endDate={this.props.filters.endDate}
      onDatesChange={this.onDatesChange}
      focusedInput={this.state.calenderFocused}
      onFocusChange={this.onFocusChange}
      showClearDates={true}
      numberOfMonths={1}
      isOutsideRange={() => false}
     />
      </div>
     );
  }
}


const mapStateToProps = (state) => ({
  filters: state.filters
  });

const mapDispatchToProps = (dispatch) => ({
  setTextInput: (text) => dispatch(setTextInput(text)),
  sortbyAmount: () => dispatch(sortbyAmount()),
  sortbyDate: () => dispatch(sortbyDate()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))


});

const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;