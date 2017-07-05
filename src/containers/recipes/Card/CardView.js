/**
 * Recipe View Screen
 *  - The individual recipe screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon, Button, Divider, ButtonGroup } from 'react-native-elements';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Card, Text } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  favourite: {
    position: 'absolute',
    top: -45,
    right: 0,
  },
  buttonGroup: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 0,
    flexDirection: 'row',
    overflow: 'hidden',
    height: 30,
    justifyContent: 'space-between',
  },
});

/* Component ==================================================================== */
class RecipeCard extends Component {
  static componentName = 'RecipeCard';

  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    onPressFavourite: PropTypes.func,
    isFavourite: PropTypes.bool,
  }

  static defaultProps = {
    onPress: null,
    onPressFavourite: null,
    isFavourite: null,
  }

  render = () => {
    const { title, body, image, onPress, onPressFavourite, isFavourite } = this.props;
    return (
      <Card image={image && { uri: image }} >
        <View style={[AppStyles.paddingTextCard]}>
          <Text h3 onPress={onPress} style={{ textDecorationLine: 'none' }}>{title}</Text>
          <Text>{body}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.favourite]}
          >
            <Icon
              raised
              name={'account-circle'}
              containerStyle={{
                backgroundColor: '#FFFFFF',
              }}
            />
          </TouchableOpacity>
        </View>

        <Divider style={{ backgroundColor: '#517fa4', marginBottom: 10, marginTop: 10 }} />
        <View
          style={[styles.buttonGroup]}
        >
          {!!onPressFavourite &&
            <TouchableOpacity
              onPress={onPressFavourite}
            >
              <Icon
                name={'heart'}
                color={isFavourite ? '#e20404' : '#517fa4'}
                type={'font-awesome'}
              />
            </TouchableOpacity>
          }
          <TouchableOpacity>
            <Icon name={'share-square-o'} type={'font-awesome'} color={'#517fa4'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name={'comment'} type={'font-awesome'} color={'#517fa4'} />
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}

/* Export Component ==================================================================== */
export default RecipeCard;
