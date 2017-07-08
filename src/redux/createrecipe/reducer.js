/**
 * User Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

// Set initial state
const initialState = {};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_DETAILS_UPDATE': {
      if (action.data) {
        const input = action.data;
        return {
          ...state,
          firstName: input.firstName,
          lastName: input.lastName,
          signedUp: input.signedUp,
          role: input.role,
        };
      }
      return {};
    }
    case 'CREATE_RECIPE': {
      return {};
    }
    default:
      return state;
  }
}
