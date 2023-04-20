/* eslint-disable no-unused-vars */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const uName = signUpUser(firstName, lastName);
  const uPic = uploadPhoto(fileName);

  const info = await Promise.allSettled([uName, uPic])
    .then((response) => response.map((response) => {
      if (response.status !== 'fulfilled') {
        return {
          status: 'rejected',
          value: response.reason.toString(),
        };
      }
      return response;
    }));
  return Promise.resolve(info);
}
