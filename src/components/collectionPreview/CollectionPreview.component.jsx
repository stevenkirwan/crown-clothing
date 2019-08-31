import React from 'react';

// styles
import "./CollectionPreview.styles.scss";

// components
import {CollectionItem} from "../collectionItem/CollectionItem.component";

export const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
              {items
              .filter((item, index) => index < 4)
              .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps} />
              ) )}
        </div>
    </div>
)