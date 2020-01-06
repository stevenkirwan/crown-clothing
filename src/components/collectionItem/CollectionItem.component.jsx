import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../customButton/CustomButton.component";

// styles
import {CollectionItemContainer, CollectionItemImage, CollectionItemFooter, CollectionItemButton} from "./CollectionItem.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></CollectionItemImage>
      <CollectionItemFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionItemFooter>
      <CollectionItemButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
