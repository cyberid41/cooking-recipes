/**
 * Timeline Scene
 *
    <Timeline text={"Hello World"} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Text } from '@ui/';

/* Component ==================================================================== */
const Timeline = ({ text }) => (
  <View style={[AppStyles.container, AppStyles.containerCentered]}>
    <Text>{text}</Text>
  </View>
);

Timeline.propTypes = { text: PropTypes.string };
Timeline.defaultProps = { text: 'Timeline...' };
Timeline.componentName = 'Timeline';

/* Export Component ==================================================================== */
export default Timeline;
