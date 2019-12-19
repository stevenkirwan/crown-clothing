import React from "react";
import { Route } from "react-router-dom";

// components
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.components";
import CollectionPage from "../collection/Collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
