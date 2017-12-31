import React from 'react';
import { connect } from 'react-redux';
import {setPrincipal, setInterest, setYears} from '../actions';

// Connect this component
export class InterestCalculator extends React.Component {
  
  setPrincipal(principal) {
    this.props.dispatch( setPrincipal(principal) );
  }
  
  setInterest(interest) {
    this.props.dispatch( setInterest(interest) );
  }

  setYears(years) {
    this.props.dispatch( setYears(years) );
  }
  
  render() { 
    return (
        <form className="interest-calculator"
            onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="principal">Principal ($)</label>
                <input type="number" id="principal" value={this.props.principal} min="0"
                 onChange={(e) => this.setPrincipal(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="interest">Interest rate (%)</label>
                <input type="number" id="interest" value={this.props.interest} min="0" max="100" step="0.1" 
                 onChange={(e) => this.setInterest(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="years">Years</label>
                <input type="number" id="years" value={this.props.years} min="0" max="100" 
                 onChange={(e) => this.setYears(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="total">Total</label>
                <output type="number" id="total">${this.props.total(this.props.principal, this.props.interest, this.props.years).toFixed(2) }</output>
            </div>
        </form>
    );
  }
}
  
InterestCalculator.defaultProps = {
    principal: 0,
    interest: 0,
    years: 0,
    total: 0
};

const mapStateToProps = state => ({
    principal: state.principal,
    interest: state.interest,
    years: state.years,
    total: state.total
});

export default connect(mapStateToProps)(InterestCalculator);
