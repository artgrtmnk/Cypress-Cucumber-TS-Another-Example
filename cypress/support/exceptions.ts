class NotImplementedException extends Error {
  constructor(msg = 'Method is not implemented.') {
    super(msg);
  }
}
export default NotImplementedException;
