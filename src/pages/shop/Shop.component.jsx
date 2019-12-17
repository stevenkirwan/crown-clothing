import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// selectors
import { selectCollections } from "../../redux/shop/shop.selectors";

// components
import { CollectionPreview } from "../../components/collectionPreview/CollectionPreview.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToprops = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToprops)(ShopPage);
