import React, { Component } from 'react';
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './containers/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './containers/ItemDetails/ItemDetails';
import PromoCodeDiscount from './containers/PromoCode/PromoCode';
import './App.css';

// Import redux provider
import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

class App extends Component {
  state = {
    total: 102.96,
    taxes: 0,
    pickupSavings: -3.85,
    estimatedTotal: 0,
    oldprice: 0,
    disablePromoButton: false,
    zipCode: 94085,
    taxRate: 0.09,
    imgURL:'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'
  }

  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.pickupSavings) * this.state.taxRate },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes,
          oldprice:
            this.state.total + this.state.pickupSavings + this.state.taxes,
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <div className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} 
          zipCode={this.state.zipCode}/>
          <hr />
          <EstimatedTotal 
          price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails 
          oldprice={this.state.oldprice.toFixed(2)}
          price={this.state.estimatedTotal.toFixed(2)} 
          imgURL={this.state.imgURL}/>
          <hr />
          <PromoCodeDiscount
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {
  handleChange
})(App);
