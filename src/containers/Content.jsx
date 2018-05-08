import React, {Component, Fragment} from 'react';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket';
import RaisedButton from 'material-ui/RaisedButton';

import menuData from './data/menu';

import style from './Content.scss';

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeOrderStep: 0,
      addedToCart: menuData.reduce((data, item) => ({
        ...data,
        [item.name]: false
      }), {})
    };

    console.log(this.state);
  }

  toggleToCart(name) {
    this.setState({
      addedToCart: {
        ...this.state.addedToCart,
        [name]: !this.state.addedToCart[name]
      }
    });
  }

  render() {
    return (
      <div className={style.Content}>
        <Stepper activeStep={this.state.activeOrderStep}>
          <Step>
            <StepLabel>Select food</StepLabel>
          </Step>
          <Step>
            <StepLabel>Order</StepLabel>
          </Step>
          <Step>
            <StepLabel>Profit!</StepLabel>
          </Step>
        </Stepper>
        {
          this.state.activeOrderStep === 0 ? (
            <Fragment>
              <GridList
                cellHeight={180}
                className={style.MenuSelect}
              >
                {menuData.map(data => (
                  <GridTile
                    title={data.name}
                    key={data.name}
                    actionIcon={
                      <IconButton
                        onClick={() => this.toggleToCart(data.name)}
                      >
                        <ShoppingBasket
                          color={this.state.addedToCart[data.name] ? "white" : "#bbb"}
                        />
                      </IconButton>
                    }
                  >
                    <img src={data.image} />
                  </GridTile>
                ))}
              </GridList>
              <RaisedButton
                label="Go to order"
                primary={true}
                style={style}
                onClick={() => {
                  this.setState({
                    activeOrderStep: ++this.state.activeOrderStep
                  });
                }}
              />
            </Fragment>
          ) : null
        }
      </div>
    );
  }
}
