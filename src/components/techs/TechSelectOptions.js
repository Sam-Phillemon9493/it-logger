import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => {
      return (
        <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
          {t.firstName} {t.lastName}
        </option>
      );
    })
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

TechSelectOptions.propTypes = {
  techs: PropTypes.object,
};

export default connect(mapStateToProps, {
  getTechs,
})(TechSelectOptions);
