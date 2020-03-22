exports.Cancel = class CancelError extends Error {}

/**
 * Invalid argument error
 */
exports.InvalidArgument = class InvalidArgument extends Error {
  /**
   * Set the argument name in constructor
   *
   * @param { string } message        Error message
   * @param { string } name           Argument name
   */
  constructor (message, name) {
    super(message)
    this.name = name
  }
}

const HTTPError = exports.BaseError = exports.HTTPError = class HTTPError extends Error {
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

/**
 * Response group for HTTP/1.1 200 Success series
 */
const Success = exports.Success = class Success extends HTTPError {
  static get message () {
    return 'Success'
  }
}

/**
 * Response for HTTP/1.1 200 OK
 */
exports.OK = class OK extends Success {
  static get statusCode () {
    return 200
  }

  static get message () {
    return 'OK'
  }
}

/**
 * Response for  HTTP/1.1 201 Created
 */
exports.Created = class Created extends Success {
  static get statusCode () {
    return 201
  }

  static get message () {
    return 'Created'
  }
}

/**
 * Response for  HTTP/1.1 202 Accepted
 */
exports.Accepted = class Accepted extends Success {
  static get statusCode () {
    return 202
  }

  static get message () {
    return 'Accepted'
  }
}

/**
 * Response for  HTTP/1.1 204 No content
 */
exports.NoContent = class NoContent extends Success {
  static get statusCode () {
    return 204
  }

  static get message () {
    return 'No Content'
  }
}

/**
 * Response for  HTTP/1.1 205 Reset content
 */
exports.ResetContent = class ResetContent extends Success {
  static get statusCode () {
    return 205
  }

  static get message () {
    return 'Reset Content'
  }
}

/**
 * Response for  HTTP/1.1 206 Partial content
 */
exports.PartialContent = class PartialContent extends Success {
  static get statusCode () {
    return 206
  }

  static get message () {
    return 'Partial content'
  }
}

/**
 * Response group for HTTP/1.1 300 Redirection series
 */
const Redirection = exports.Redirection = class Redirection extends HTTPError {
  static get message () {
    return 'Redirection'
  }

  /**
   * Accept data argument that passes the required location information to the
   * HTTP request
   *
   * @param { string } message        Error message
   * @param { object } data           Extended data
   */
  constructor (message, data = {}) {
    super(message, data)
    this.data.location = data.location || null
  }
}

/**
 * Response for  HTTP/1.1 300 Multiple choices
 */
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

/**
 * Response for  HTTP/1.1 301 Moved permanently
 */
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

/**
 * Response for  HTTP/1.1 302 Found
 */
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

/**
 * Response for  HTTP/1.1 303 See other
 */
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

/**
 * Response for  HTTP/1.1 304 Not modified
 */
exports.NotModified = class NotModified extends Redirection {
  static get statusCode () {
    return 304
  }

  static get message () {
    return 'NotModified'
  }
}

/**
 * Response group for HTTP/1.1 400 Client error series
 */
const ClientError = exports.ClientError = class ClientError extends HTTPError {
  static get message () {
    return 'Client Error'
  }
}

/**
 * Response for  HTTP/1.1 400 Bad request
 */
const BadRequest = exports.BadRequest = class BadRequest extends ClientError {
  static get statusCode () {
    return 400
  }

  static get message () {
    return 'Bad Request'
  }
}

/**
 * Form validation extension for  HTTP/1.1 400 Bad request
 */
exports.FormValidation = class FormValidation extends BadRequest {
  /**
   * Store the error data
   *
   * @param { mixed } errors          Either a string for the message or object with all the errors
   * @param {  }
   */
  constructor (errors, data) {
    let message
    try {
      const k = Object.keys(errors)[0]
      const primary = errors[k]
      message = primary.error
    } catch (err) {
    }

    super(message || FormValidation.message)
    this.errors = errors
    this.data = data
  }
}

/**
 * Response for  HTTP/1.1 401 Unauthorized
 */
exports.Unauthorized = class Unauthorized extends ClientError {
  static get statusCode () {
    return 401
  }

  static get message () {
    return 'Unauthorized'
  }
}

/**
 * Response for  HTTP/1.1 402 Payment required
 */
exports.PaymentRequired = class PaymentRequired extends ClientError {
  static get statusCode () {
    return 402
  }

  static get message () {
    return 'Payment Required'
  }
}

/**
 * Response for  HTTP/1.1 403 Forbidden
 */
exports.Forbidden = class Forbidden extends ClientError {
  static get statusCode () {
    return 403
  }

  static get message () {
    return 'Forbidden'
  }
}

/**
 * Response for  HTTP/1.1 404 Not found
 */
exports.NotFound = class NotFound extends ClientError {
  static get statusCode () {
    return 404
  }

  static get message () {
    return 'Not Found'
  }
}

/**
 * Response for  HTTP/1.1 405 Method not allowed
 */
exports.MethodNotAllowed = class MethodNotAllowed extends ClientError {
  static get statusCode () {
    return 405
  }

  static get message () {
    return 'Method not allowed'
  }
}

/**
 * Response for  HTTP/1.1 406 Not acceptable
 */
exports.NotAcceptable = class NotAcceptable extends ClientError {
  static get statusCode () {
    return 406
  }

  static get message () {
    return 'Not Acceptable'
  }
}

/**
 * Response for  HTTP/1.1 407 Proxy authentication required
 */
exports.ProxyAuthenticationRequired = class ProxyAuthenticationRequired extends ClientError {
  static get statusCode () {
    return 407
  }

  static get message () {
    return 'Proxy Authentication Required'
  }
}

/**
 * Response for  HTTP/1.1 408 Request timeout
 */
exports.RequestTimeout = class RequestTimeout extends ClientError {
  static get statusCode () {
    return 408
  }

  static get message () {
    return 'Request timeout'
  }

  /**
   * Store the error data
   *
   * @param { string } message        Error message
   * @param { object } data           Error details
   */
  constructor (message, data) {
    message = message || RequestTimeout.message
    super(message, data)
  }
}

/**
 * Response for  HTTP/1.1 409 Conflict
 */
exports.Conflict = class Conflict extends ClientError {
  static get statusCode () {
    return 409
  }

  static get message () {
    return 'Conflict'
  }
}

/**
 * Response for  HTTP/1.1 410 Gone
 */
exports.Gone = class Gone extends ClientError {
  static get statusCode () {
    return 410
  }

  static get message () {
    return 'Gone'
  }
}

/**
 * Response for  HTTP/1.1 411 Length required
 */
exports.LengthRequired = class LengthRequired extends ClientError {
  static get statusCode () {
    return 411
  }

  static get message () {
    return 'Length Required'
  }
}

/**
 * Response for  HTTP/1.1 412 Precondition failed
 */
exports.PreconditionFailed = class PreconditionFailed extends ClientError {
  static get statusCode () {
    return 412
  }

  static get message () {
    return 'Precondition Failed'
  }
}

/**
 * Response for  HTTP/1.1 413 Payload too large
 */
exports.PayloadTooLarge = class PayloadTooLarge extends ClientError {
  static get statusCode () {
    return 413
  }

  static get message () {
    return 'Payload Too Large'
  }
}

/**
 * Response for  HTTP/1.1 414 URI too long
 */
exports.URITooLong = class URITooLong extends ClientError {
  static get statusCode () {
    return 414
  }

  static get message () {
    return 'URI Too Long'
  }
}

/**
 * Response for  HTTP/1.1 415 Unsupported media type
 */
exports.UnsupportedMediaType = class UnsupportedMediaType extends ClientError {
  static get statusCode () {
    return 415
  }

  static get message () {
    return 'Unsupported Media Type'
  }
}

/**
 * Response for  HTTP/1.1 416 Range not satisfiable
 */
exports.RangeNotSatisfiable = class RangeNotSatisfiable extends ClientError {
  static get statusCode () {
    return 416
  }

  static get message () {
    return 'Range Not Satisfiable'
  }
}

/**
 * Response for  HTTP/1.1 417 Expectation failed
 */
exports.ExpectationFailed = class ExpectationFailed extends ClientError {
  static get statusCode () {
    return 417
  }

  static get message () {
    return 'Expectation Failed'
  }
}

/**
 * Response for  HTTP/1.1 421 Misdirected request
 */
exports.MisdirectedRequest = class MisdirectedRequest extends ClientError {
  static get statusCode () {
    return 421
  }

  static get message () {
    return 'Misdirected Request'
  }
}

/**
 * Response for  HTTP/1.1 422 Unprocessable entity
 */
exports.UnprocessableEntity = class UnprocessableEntity extends ClientError {
  static get statusCode () {
    return 422
  }

  static get message () {
    return 'Unprocessable Entity'
  }
}

/**
 * Response for  HTTP/1.1 423 Locked
 */
exports.Locked = class Locked extends ClientError {
  static get statusCode () {
    return 423
  }

  static get message () {
    return 'Locked'
  }
}

/**
 * Response for  HTTP/1.1 424 Failed dependency
 */
exports.FailedDependency = class FailedDependency extends ClientError {
  static get statusCode () {
    return 424
  }

  static get message () {
    return 'Failed Dependency'
  }
}

/**
 * Response for  HTTP/1.1 426 Upgrade required
 */
exports.UpgradeRequired = class UpgradeRequired extends ClientError {
  static get statusCode () {
    return 426
  }

  static get message () {
    return 'Upgrade Required'
  }
}

/**
 * Response for  HTTP/1.1 428 Precondition failed
 */
exports.PreconditionRequired = class PreconditionRequired extends ClientError {
  static get statusCode () {
    return 428
  }

  static get message () {
    return 'Precondition Required'
  }
}

/**
 * Response for  HTTP/1.1 429 Too many requests
 */
exports.TooManyRequests = class TooManyRequests extends ClientError {
  static get statusCode () {
    return 429
  }

  static get message () {
    return 'Too Many Requests'
  }
}

/**
 * Response for  HTTP/1.1 432 Request header fields too large
 */
exports.RequestHeaderFieldsTooLarge = class RequestHeaderFieldsTooLarge extends ClientError {
  static get statusCode () {
    return 431
  }

  static get message () {
    return 'Request Header Fields Too Large'
  }
}

/**
 * Response for  HTTP/1.1 451 Unavailable for legal reasons
 */
exports.UnavailableForLegalReasons = class UnavailableForLegalReasons extends ClientError {
  static get statusCode () {
    return 451
  }

  static get message () {
    return 'Unavailable For Legal Reasons'
  }
}

/**
 * Response group for HTTP/1.1 400 Server error series
 */
const ServerError = exports.ServerError = class ServerError extends HTTPError {
  static get message () {
    return 'Server Error'
  }
}

/**
 * Response for  HTTP/1.1 500 Internal server error
 */
exports.InternalServerError = class InternalServerError extends ServerError {
  static get statusCode () {
    return 500
  }

  static get message () {
    return 'Internal Server Error'
  }
}

/**
 * Response for  HTTP/1.1 501 Not implemented
 */
exports.NotImplemented = class NotImplemented extends ServerError {
  static get statusCode () {
    return 501
  }

  static get message () {
    return 'Not Implemented'
  }
}

/**
 * Response for  HTTP/1.1 502 Bad gateway
 */
exports.BadGateway = class BadGateway extends ServerError {
  static get statusCode () {
    return 502
  }

  static get message () {
    return 'Bad Gateway'
  }
}

/**
 * Response for  HTTP/1.1 503 Service unavailable
 */
exports.ServiceUnavailable = class ServiceUnavailable extends ServerError {
  static get statusCode () {
    return 503
  }

  static get message () {
    return 'Service Unavailable'
  }
}

/**
 * Response for  HTTP/1.1 504 Gateway timeout
 */
exports.GatewayTimeout = class GatewayTimeout extends ServerError {
  static get statusCode () {
    return 504
  }

  static get message () {
    return 'Gateway Timeout'
  }
}

/**
 * Response for  HTTP/1.1 505 HTTP version not supported
 */
exports.HTTPVersionNotSupported = class HTTPVersionNotSupported extends ServerError {
  static get statusCode () {
    return 505
  }

  static get message () {
    return 'HTTP Version Not Supported'
  }
}

/**
 * Response for  HTTP/1.1 598 Network read timeout
 */
exports.NetworkReadTimeout = exports.NetworkReadTimeoutError = class NetworkReadTimeout extends ServerError {
  static get statusCode () {
    return 598
  }

  static get message () {
    return 'Network read timeout error'
  }
}
