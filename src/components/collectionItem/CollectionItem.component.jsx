import React from 'react';

// styles
import "./collectionItem.styles.scss";

export const CollectionItem =({id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image" style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)