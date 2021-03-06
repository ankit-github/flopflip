import { connect } from 'react-redux';
import { compose } from 'recompose';
import { injectFeatureToggle } from '@flopflip/react';
import { STATE_SLICE } from './../store';

export const mapStateToProps = state => ({
  availableFeatureToggles: state[STATE_SLICE].flags,
});

export default (flagName, propKey) =>
  /* istanbul ignore next */
  compose(connect(mapStateToProps), injectFeatureToggle(flagName, propKey));
