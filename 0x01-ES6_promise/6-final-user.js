import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

export async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const [userResult, photoResult] = await Promise.all([userPromise, photoPromise]);

    const resultArray = [
      { name: 'user', status: userResult.status, value: userResult.value },
      { name: 'photo', status: photoResult.status, value: photoResult.value },
    ];

    return resultArray;
  } catch (error) {
    const errorArray = [
      { name: 'user', status: 'rejected', reason: error.message },
      { name: 'photo', status: 'rejected', reason: error.message },
    ];

    return errorArray;
  }
}
