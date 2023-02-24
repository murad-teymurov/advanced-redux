import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>{cartQuantity}</span>
      <span className={classes.badge}></span>
    </button>
  );
};

export default CartButton;
