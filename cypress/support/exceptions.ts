class NotImplementedException extends Error {
    constructor(msg:string = "Method is not implemented.") {
      super(msg)
    }
}
export default NotImplementedException