import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// selectors
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

// styles
import "./CollectionsOverview.styles.scss";

// components
import { CollectionPreview } from "../collectionPreview/CollectionPreview.component";

const CollectionsOverview = ({ collections }) => { console.log(collections); return(

  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)};

const mapStateToprops = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToprops)(CollectionsOverview);
