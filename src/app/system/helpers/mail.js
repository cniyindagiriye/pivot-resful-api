import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const {
  HOST,
  SERVICE_USERNAME,
  SERVICE_PASSWORD,
  API_VERSION,
  TRANSPORTER_SERVICE,
} = process.env;

/**
 *
 * @param {String} email - Email of Registered user
 * @param {String} firstName - First name of registered user
 * @param {String} token - Generated token
 */
export const sendVerification = async (email, firstName, token) => {
  try {
    const transporter = nodemailer.createTransport({
      service: TRANSPORTER_SERVICE,
      auth: {
        user: SERVICE_USERNAME,
        pass: SERVICE_PASSWORD,
      },
    });
    const mailOptions = {
      from: SERVICE_USERNAME,
      to: email,
      subject: 'Account Verification Link',
      text:
        `Hello ${firstName},\n\n` +
        `Please verify your account by clicking the link: \n${HOST}/api/${API_VERSION}/users/verify/${token}\n\nThank You!\n`,
    };
    await transporter.sendMail(mailOptions);
    return `A verification email has been sent to ${email}. It will be expire after one day. If you not get verification Email click on resend token.`;
  } catch (err) {
    throw err;
  }
};
