import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// styles
import "./Directory.styles.scss";

// selectors
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

// components
import MenuItem from "../menuItem/MenuItem.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => {
      return <MenuItem id={id} {...otherSectionProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
