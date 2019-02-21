exports.Cancel = class CancelError extends Error {}

const BaseError = exports.BaseError = class BaseError extends Error {
  /**
   * Set the status code so that it can be read without initializing the class
   *
   * @return {number}                 HTTP/1.1 Status code
   */
  static get statusCode () {
    return 500
  }

  /**
   * Default status message
   *
   * @return {string}                 HTTP/1.1 Status message
   */
  static get message () {
    return 'Internal Server Error'
  }

  constructor (message, data = null) {
    super(message)
    this.response = this.message = message || this.constructor.message
    this.statusCode = this.constructor.statusCode
    this.data = data
  }
}

// Series 200
const Success = exports.Success = class Success extends BaseError {
  static get statusCode () {
    return 200
  }

  static get message () {
    return 'Success'
  }
}

exports.OK = class OK extends Success {
  static get statusCode () {
    return 200
  }

  static get message () {
    return 'OK'
  }
}

exports.Created = class Created extends Success {
  static get statusCode () {
    return 201
  }

  static get message () {
    return 'Created'
  }
}

exports.Accepted = class Accepted extends Success {
  static get statusCode () {
    return 202
  }

  static get message () {
    return 'Accepted'
  }
}

exports.NoContent = class NoContent extends Success {
  static get statusCode () {
    return 204
  }

  static get message () {
    return 'No Content'
  }
}

exports.ResetContent = class ResetContent extends Success {
  static get statusCode () {
    return 205
  }

  static get message () {
    return 'Reset Content'
  }
}

exports.PartialContent = class PartialContent extends Success {
  static get statusCode () {
    return 206
  }

  static get message () {
    return 'Partial content'
  }
}

// Series 300
const Redirection = exports.Redirection = class Redirection extends BaseError {
  static get statusCode () {
    return 300
  }

  static get message () {
    return 'Multiple Choices'
  }

  constructor (message, data = {}) {
    super(message, data)
    this.data.location = data.location || ''
  }
}

exports.MultipleChoices = class MultipleChoices extends Redirection {
  static get statusCode () {
    return 300
  }

  static get message () {
    return 'Multiple Choices'
  }

  constructor (message, data = {}) {
    super(message, data)
    this.data.locations = Array.isArray(data.locations) ? data.locations : [data.locations]
  }
}

exports.MovedPermanently = class MovedPermanently extends Redirection {
  static get statusCode () {
    return 301
  }

  static get message () {
    return 'Moved Permanently'
  }

  constructor (message, data = {}) {
    super(message, data)
    this.data.location = data.location || ''
  }
}

exports.Found = class Found extends Redirection {
  static get statusCode () {
    return 302
  }

  static get message () {
    return 'Found'
  }

  constructor (message, data = {}) {
    super(message, data)
    this.data.location = data.location || ''
  }
}

exports.SeeOther = class SeeOther extends Redirection {
  static get statusCode () {
    return 303
  }

  static get message () {
    return 'See Other'
  }

  constructor (message, data = {}) {
    super(message, data)
    this.data.locations = Array.isArray(data.locations) ? data.locations : [data.locations]
  }
}

exports.NotModified = class NotModified extends Redirection {
  static get statusCode () {
    return 304
  }

  static get message () {
    return 'NotModified'
  }
}

// Series 400
const ClientError = exports.ClientError = class ClientError extends BaseError {
  static get statusCode () {
    return 400
  }

  static get message () {
    return 'Client Error'
  }
}

exports.FormValidation = class FormValidation extends ClientError {
  static get statusCode () {
    return 400
  }

  constructor (errors, data) {
    const k = Object.keys(errors)[0]
    const primary = errors[k]
    super(primary.error, data)
    this.errors = errors
  }
}

exports.BadRequest = class BadRequest extends ClientError {
  static get statusCode () {
    return 400
  }

  static get message () {
    return 'Bad Request'
  }
}

exports.Unauthorized = class Unauthorized extends ClientError {
  static get statusCode () {
    return 401
  }

  static get message () {
    return 'Unauthorized'
  }
}

exports.PaymentRequired = class PaymentRequired extends ClientError {
  static get statusCode () {
    return 402
  }

  static get message () {
    return 'Payment Required'
  }
}

exports.Forbidden = class Forbidden extends ClientError {
  static get statusCode () {
    return 403
  }

  static get message () {
    return 'Forbidden'
  }
}

exports.NotFound = class NotFound extends ClientError {
  static get statusCode () {
    return 404
  }

  static get message () {
    return 'Not Found'
  }
}

exports.MethodNotAllowed = class MethodNotAllowed extends ClientError {
  static get statusCode () {
    return 405
  }

  static get message () {
    return 'Method not allowed'
  }
}

exports.NotAcceptable = class NotAcceptable extends ClientError {
  static get statusCode () {
    return 406
  }

  static get message () {
    return 'Not Acceptable'
  }
}

exports.ProxyAuthenticationRequired = class ProxyAuthenticationRequired extends ClientError {
  static get statusCode () {
    return 407
  }

  static get message () {
    return 'Proxy Authentication Required'
  }
}

exports.RequestTimeout = class RequestTimeout extends ClientError {
  static get statusCode () {
    return 408
  }

  static get message () {
    return 'Request timeout'
  }

  constructor (message, data) {
    message = message || 'Request timeout'
    super(message, data)
  }
}

exports.Conflict = class Conflict extends ClientError {
  static get statusCode () {
    return 409
  }

  static get message () {
    return 'Conflict'
  }
}

exports.Gone = class Gone extends ClientError {
  static get statusCode () {
    return 410
  }

  static get message () {
    return 'Gone'
  }
}

exports.LengthRequired = class LengthRequired extends ClientError {
  static get statusCode () {
    return 411
  }

  static get message () {
    return 'Length Required'
  }
}

exports.PreconditionFailed = class PreconditionFailed extends ClientError {
  static get statusCode () {
    return 412
  }

  static get message () {
    return 'Precondition Failed'
  }
}

exports.PayloadTooLarge = class PayloadTooLarge extends ClientError {
  static get statusCode () {
    return 413
  }

  static get message () {
    return 'Payload Too Large'
  }
}

exports.URITooLong = class URITooLong extends ClientError {
  static get statusCode () {
    return 414
  }

  static get message () {
    return 'URI Too Long'
  }
}

exports.UnsupportedMediaType = class UnsupportedMediaType extends ClientError {
  static get statusCode () {
    return 415
  }

  static get message () {
    return 'Unsupported Media Type'
  }
}

exports.RangeNotSatisfiable = class RangeNotSatisfiable extends ClientError {
  static get statusCode () {
    return 416
  }

  static get message () {
    return 'Range Not Satisfiable'
  }
}

exports.ExpectationFailed = class ExpectationFailed extends ClientError {
  static get statusCode () {
    return 417
  }

  static get message () {
    return 'Expectation Failed'
  }
}

exports.MisdirectedRequest = class MisdirectedRequest extends ClientError {
  static get statusCode () {
    return 421
  }

  static get message () {
    return 'Misdirected Request'
  }
}

exports.UnprocessableEntity = class UnprocessableEntity extends ClientError {
  static get statusCode () {
    return 422
  }

  static get message () {
    return 'Unprocessable Entity'
  }
}

exports.Locked = class Locked extends ClientError {
  static get statusCode () {
    return 423
  }

  static get message () {
    return 'Locked'
  }
}

exports.FailedDependency = class FailedDependency extends ClientError {
  static get statusCode () {
    return 424
  }

  static get message () {
    return 'Failed Dependency'
  }
}

exports.UpgradeRequired = class UpgradeRequired extends ClientError {
  static get statusCode () {
    return 426
  }

  static get message () {
    return 'Upgrade Required'
  }
}

exports.PreconditionRequired = class PreconditionRequired extends ClientError {
  static get statusCode () {
    return 428
  }

  static get message () {
    return 'Precondition Required'
  }
}

exports.TooManyRequests = class TooManyRequests extends ClientError {
  static get statusCode () {
    return 429
  }

  static get message () {
    return 'Too Many Requests'
  }
}

exports.RequestHeaderFieldsTooLarge = class RequestHeaderFieldsTooLarge extends ClientError {
  static get statusCode () {
    return 431
  }

  static get message () {
    return 'Request Header Fields Too Large'
  }
}

exports.UnavailableForLegalReasons = class UnavailableForLegalReasons extends ClientError {
  static get statusCode () {
    return 451
  }

  static get message () {
    return 'Unavailable For Legal Reasons'
  }
}

// Series 500
const ServerError = exports.ServerError = class ServerError extends BaseError {
  static get statusCode () {
    return 500
  }

  static get message () {
    return 'Server Error'
  }
}

exports.InternalServerError = class InternalServerError extends ServerError {
  static get statusCode () {
    return 500
  }

  static get message () {
    return 'Internal Server Error'
  }
}

exports.NotImplemented = class NotImplemented extends ServerError {
  static get statusCode () {
    return 501
  }

  static get message () {
    return 'Not Implemented'
  }
}

exports.BadGateway = class BadGateway extends ServerError {
  static get statusCode () {
    return 502
  }

  static get message () {
    return 'Bad Gateway'
  }
}

exports.ServiceUnavailable = class ServiceUnavailable extends ServerError {
  static get statusCode () {
    return 503
  }

  static get message () {
    return 'Service Unavailable'
  }
}

exports.GatewayTimeout = class GatewayTimeout extends ServerError {
  static get statusCode () {
    return 504
  }

  static get message () {
    return 'Gateway Timeout'
  }
}

exports.HTTPVersionNotSupported = class HTTPVersionNotSupported extends ServerError {
  static get statusCode () {
    return 505
  }

  static get message () {
    return 'HTTP Version Not Supported'
  }
}

exports.NetworkReadTimeout = exports.NetworkReadTimeoutError = class NetworkReadTimeout extends ServerError {
  static get statusCode () {
    return 598
  }

  static get message () {
    return 'Network read timeout error'
  }
}
