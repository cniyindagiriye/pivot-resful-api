export class APIError extends Error {
  /**
   * @constructor
   * @param {String} message Error message
   * @param {Object} others Other error properties
   */
  constructor(message, others) {
    let supermessage = message;
    const keys = Object.keys(others);
    if (others) {
      for (let i = 0; i < keys.length; i += 1) {
        const prop = keys[i];
        const separator = !i ? ':: ' : ', ';
        supermessage += separator + others[prop];
      }
    }
    super(supermessage);
  }
}
