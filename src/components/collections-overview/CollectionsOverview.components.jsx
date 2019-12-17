import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// selectors
import { selectCollections } from "../../redux/shop/shop.selectors";

// styles
import "./CollectionsOverview.styles.scss";

// components
import { CollectionPreview } from "../collectionPreview/CollectionPreview.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToprops = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToprops)(CollectionsOverview);
