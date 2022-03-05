export default class Response {
  static error(res, status, error) {
    return res.status(status).json({
      error,
    });
  }

  static success(res, status, data) {
    return res.status(status).json(data);
  }
}
