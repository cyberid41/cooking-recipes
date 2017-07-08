/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { ErrorMessages, Firebase, FirebaseRef } from '@constants/';

/**
  * Create recipe to Firebase
  */
export function createRecipe(formData = {}) {
  if (Firebase === null) {
    return () => new Promise((resolve, reject) =>
      reject({ message: ErrorMessages.invalidFirebase }));
  }

  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  console.log('ini adalah from data =>', formData);

  const id = formData.Id || '93093b83';
  const title = formData.Title || '';
  const slug = formData.Slug || 'ini-adalah-slug';
  const author = formData.Author || 'cyberid41';
  const image = formData.Title || 'https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-3.jpg?alt=media&token=ad0c1913-fd82-48fa-937c-4298875544fa';
  const body = formData.Body || '';
  const category = formData.Category || '';
  const ingredients = formData.Ingredients.split(',') || [];
  const method = formData.Method.split(',') || [];

  // Set the email against user account
  return () => FirebaseRef.child('recipes').push().set({
    id, title, body, category, ingredients, method, author, image, slug,
  });
}
