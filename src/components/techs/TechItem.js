import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import { toast } from "materialize-css";

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
    toast({ html: "Technician removed" });
  };

  return (
    <li className="collection-item">
      <div className="">
        {tech.firstName} {tech.lastName}{" "}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func,
};

export default connect(null, {
  deleteTech,
})(TechItem);
