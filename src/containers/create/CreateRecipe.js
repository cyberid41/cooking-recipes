/**
 * Sign Up Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as CreateRecipeActions from '@redux/createrecipe/actions';

// The component we're mapping to
import FormRender from '@helpers/Forms/FormView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
  formType: 'createRecipe',
  formFields: ['Title', 'Body', 'Category', 'Image', 'Ingredients', 'Method'],
  buttonTitle: 'Submit',
  successMessage: 'Perfect, You\'r recipe submitted!',
});

// Any actions to map to the component?
const mapDispatchToProps = {
  submit: CreateRecipeActions.createRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
