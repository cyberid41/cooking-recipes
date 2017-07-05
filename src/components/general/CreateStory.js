/**
 * CreateStory Scene
 *
    <CreateStory text={"Hello World"} />
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
const CreateStory = ({ text }) => (
  <View style={[AppStyles.container, AppStyles.containerCentered]}>
    <Text>{text}</Text>
  </View>
);

CreateStory.propTypes = { text: PropTypes.string };
CreateStory.defaultProps = { text: 'Create your story...' };
CreateStory.componentName = 'CreateStory';

/* Export Component ==================================================================== */
export default CreateStory;
