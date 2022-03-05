import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Create token for user email verification
 * @param {Number} userId - user ID
 * @param {Boolean} active - Is user active
 */
export const signInToken = (userId) => {
  const { SECRET_KEY, TOKEN_EXPIRATION } = process.env;
  return {
    token: jwt.sign({ userId }, SECRET_KEY, {
      expiresIn: TOKEN_EXPIRATION,
    }),
    tokenExpiration: TOKEN_EXPIRATION,
  };
};
