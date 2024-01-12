/**
 * Cancel an interaction
 *
 * @class Cancel an interaction error
 */
exports.Cancel = exports.CancelError = class CancelError extends Error {}

/**
 * Invalid argument
 * @class Invalid argument
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

/**
 * HTTP error
 *
 * @namespace HTTPError
 * @interface HTTPError
 * @class HTTP error baseclass
 */
const HTTPError = exports.BaseError = exports.HTTPError = class HTTPError extends Error {
  /**
   * Set the status code so that it can be read without initializing the class
   *
   * @const { number }                HTTPError.statusCode
   * @return { number }               HTTP/1.1 Status code
   */
  static get statusCode () {
    return 500
  }

  /**
   * Default status message
   *
   * @const { string }                HTTPError.message HTTP/1.1 Status message
   */
  static get message () {
    return 'Internal Server Error'
  }

  /**
   * Generic HTTP status code error
   *
   * @param { string } message        Error message
   * @param { array|object } [data]   Error data
   */
  constructor (message, data = null) {
    super(message)
    this.response = this.message = message || this.constructor.message
    this.statusCode = this.constructor.statusCode
    this.data = data
  }
}

/**
 * Response group for HTTP/1.1 200 Success series
 *
 * @memberof HTTPError
 * @namespace HTTPError.Success
 * @class HTTP/1.1 200 Success series
 * @extends HTTPError
 */
const Success = exports.Success = class Success extends HTTPError {
  /**
   * Default status message
   *
   * @const { string }                Success.message HTTP/1.1 Status message
   */
  static get message () {
    return 'Success'
  }
}

/**
 * Response for HTTP/1.1 200 OK
 *
 * @class HTTP/1.1 200 OK
 * @extends Success
 */
exports.OK = class OK extends Success {
  /**
   * @const { number } OK.statusCode
   * @default 200
   */
  static get statusCode () {
    return 200
  }

  /**
   * @const { string } OK.message
   * @default 'OK'
   */
  static get message () {
    return 'OK'
  }
}

/**
 * Response for HTTP/1.1 201 Created
 *
 * @class HTTP/1.1 201 Created
 * @extends Success
 */
exports.Created = class Created extends Success {
  /**
   * @const { number } Created.statusCode
   * @default 201
   */
  static get statusCode () {
    return 201
  }

  /**
   * @const { string } Created.message
   * @default 'Created'
   */
  static get message () {
    return 'Created'
  }
}

/**
 * Response for HTTP/1.1 202 Accepted
 *
 * @class HTTP/1.1 202 Accepted
 * @extends Success
 */
exports.Accepted = class Accepted extends Success {
  /**
   * @const { number } Accepted.statusCode
   * @default 202
   */
  static get statusCode () {
    return 202
  }

  /**
   * @const { string } Accepted.message
   * @default 'Accepted'
   */
  static get message () {
    return 'Accepted'
  }
}

/**
 * Response for HTTP/1.1 204 No content
 *
 * @class HTTP/1.1 204 No content
 * @extends Success
 */
exports.NoContent = class NoContent extends Success {
  /**
   * @const { number } NoContent.statusCode
   * @default 204
   */
  static get statusCode () {
    return 204
  }

  /**
   * @const { string } NoContent.message
   * @default 'No Content'
   */
  static get message () {
    return 'No Content'
  }
}

/**
 * Response for HTTP/1.1 205 Reset content
 *
 * @class HTTP/1.1 205 Reset content
 * @extends Success
 */
exports.ResetContent = class ResetContent extends Success {
  /**
   * @const { number } ResetContent.statusCode
   * @default 205
   */
  static get statusCode () {
    return 205
  }

  /**
   * @const { string } ResetContent.message
   * @default 'Reset Content'
   */
  static get message () {
    return 'Reset Content'
  }
}

/**
 * Response for HTTP/1.1 206 Partial content
 *
 * @class HTTP/1.1 206 Partial content
 * @extends Success
 */
exports.PartialContent = class PartialContent extends Success {
  /**
   * @const { number } PartialContent.statusCode
   * @default 206
   */
  static get statusCode () {
    return 206
  }

  /**
   * @const { string } PartialContent.message
   * @default 'Partial content'
   */
  static get message () {
    return 'Partial content'
  }
}

/**
 * Response group for HTTP/1.1 300 Redirection series
 *
 * @interface Redirection
 * @extends HTTPError
 */
const Redirection = exports.Redirection = class Redirection extends HTTPError {
  /**
   * @const { string } Redirection.message
   * @default 'Redirection'
   */
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
 * Response for HTTP/1.1 300 Multiple choices
 *
 * @class HTTP/1.1 300 Multiple choices
 * @extends Redirection
 */
exports.MultipleChoices = class MultipleChoices extends Redirection {
  /**
   * @const { number } MultipleChoices.statusCode
   * @default 300
   */
  static get statusCode () {
    return 300
  }

  /**
   * @const { string } MultipleChoices.message
   * @default 'Multiple Choices'
   */
  static get message () {
    return 'Multiple Choices'
  }

  constructor (message, data = {}) {
    super(message, data)
    this.data.locations = Array.isArray(data.locations) ? data.locations : [data.locations]
  }
}

/**
 * Response for HTTP/1.1 301 Moved permanently
 *
 * @class HTTP/1.1 301 Moved permanently
 * @extends Redirection
 */
exports.MovedPermanently = class MovedPermanently extends Redirection {
  /**
   * @const { number } MovedPermanently.statusCode
   * @default 301
   */
  static get statusCode () {
    return 301
  }

  /**
   * @const { string } MovedPermanently.message
   * @default 'Moved Permanently'
   */
  static get message () {
    return 'Moved Permanently'
  }

  constructor (message, data = {}) {
    super(message, data)
    this.data.location = data.location || ''
  }
}

/**
 * Response for HTTP/1.1 302 Found
 *
 * @class HTTP/1.1 302 Found
 * @extends Redirection
 */
exports.Found = class Found extends Redirection {
  /**
   * @const { number } Found.statusCode
   * @default 302
   */
  static get statusCode () {
    return 302
  }

  /**
   * @const { string } Found.message
   * @default 'Found'
   */
  static get message () {
    return 'Found'
  }

  constructor (message, data = {}) {
    super(message, data)
    this.data.location = data.location || ''
  }
}

/**
 * Response for HTTP/1.1 303 See other
 *
 * @class HTTP/1.1 303 See other
 * @extends Redirection
 */
exports.SeeOther = class SeeOther extends Redirection {
  /**
   * @const { number } SeeOther.statusCode
   * @default 303
   */
  static get statusCode () {
    return 303
  }

  /**
   * @const { string } SeeOther.message
   * @default 'See Other'
   */
  static get message () {
    return 'See Other'
  }

  constructor (message, data = {}) {
    super(message, data)
    this.data.locations = Array.isArray(data.locations) ? data.locations : [data.locations]
  }
}

/**
 * Response for HTTP/1.1 304 Not modified
 *
 * @class HTTP/1.1 304 Not modified
 * @extends Redirection
 */
exports.NotModified = class NotModified extends Redirection {
  /**
   * @const { number } NotModified.statusCode
   * @default 304
   */
  static get statusCode () {
    return 304
  }

  /**
   * @const { string } NotModified.message
   * @default 'NotModified'
   */
  static get message () {
    return 'NotModified'
  }
}

/**
 * Response group for HTTP/1.1 400 Client error series
 *
 * @interface ClientError
 * @extends HTTPError
 */
const ClientError = exports.ClientError = class ClientError extends HTTPError {
  /**
   * @const { string } ClientError.message
   * @default 'Client Error'
   */
  static get message () {
    return 'Client Error'
  }
}

/**
 * Response for HTTP/1.1 400 Bad request
 *
 * @class HTTP/1.1 400 Bad request
 * @extends ClientError
 */
const BadRequest = exports.BadRequest = class BadRequest extends ClientError {
  /**
   * @const { number } BadRequest.statusCode
   * @default 400
   */
  static get statusCode () {
    return 400
  }

  /**
   * @const { string } BadRequest.message
   * @default 'Bad Request'
   */
  static get message () {
    return 'Bad Request'
  }
}

/**
 * Form validation extension for HTTP/1.1 400 Bad request
 *
 * @class Form validation extension for HTTP/1.1 400 Bad request
 * @extends BadRequest
 */
exports.FormValidation = class FormValidation extends BadRequest {
  /**
   * Store the error data
   *
   * @param { mixed } errors          Either a string for the message or object with all the errors
   * @param { array|object } [data]   Input data
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
 * JSON schema validation error extension for HTTP/1.1 400 Bad Request
 *
 * @class JSON schema validation error extension for HTTP/1.1 400 Bad Request
 * @extends BadRequest
 */
exports.ValidationError = class ValidationError extends BadRequest {
  /**
   * Store the error data
   *
   * @param { mixed } errors          Either a string for the message or object with all the errors
   * @param {  }
   */
  constructor (message, results) {
    super(message)
    this.errors = results
  }
}

/**
 * Response for HTTP/1.1 401 Unauthorized
 *
 * @class HTTP/1.1 401 Unauthorized
 * @extends ClientError
 */
exports.Unauthorized = class Unauthorized extends ClientError {
  /**
   * @const { number } Unauthorized.statusCode
   * @default 401
   */
  static get statusCode () {
    return 401
  }

  /**
   * @const { string } Unauthorized.message
   * @default 'Unauthorized'
   */
  static get message () {
    return 'Unauthorized'
  }
}

/**
 * Response for HTTP/1.1 402 Payment required
 *
 * @class HTTP/1.1 402 Payment required
 * @extends ClientError
 */
exports.PaymentRequired = class PaymentRequired extends ClientError {
  /**
   * @const { number } PaymentRequired.statusCode
   * @default 402
   */
  static get statusCode () {
    return 402
  }

  /**
   * @const { string } PaymentRequired.message
   * @default 'Payment Required'
   */
  static get message () {
    return 'Payment Required'
  }
}

/**
 * Response for HTTP/1.1 403 Forbidden
 *
 * @class HTTP/1.1 403 Forbidden
 * @extends ClientError
 */
exports.Forbidden = class Forbidden extends ClientError {
  /**
   * @const { number } Forbidden.statusCode
   * @default 403
   */
  static get statusCode () {
    return 403
  }

  /**
   * @const { string } Forbidden.message
   * @default 'Forbidden'
   */
  static get message () {
    return 'Forbidden'
  }
}

/**
 * Response for HTTP/1.1 404 Not found
 *
 * @class HTTP/1.1 404 Not found
 * @extends ClientError
 */
exports.NotFound = class NotFound extends ClientError {
  /**
   * @const { number } NotFound.statusCode
   * @default 404
   */
  static get statusCode () {
    return 404
  }

  /**
   * @const { string } NotFound.message
   * @default 'Not Found'
   */
  static get message () {
    return 'Not Found'
  }
}

/**
 * Response for HTTP/1.1 405 Method not allowed
 *
 * @class HTTP/1.1 405 Method not allowed
 * @extends ClientError
 */
exports.MethodNotAllowed = class MethodNotAllowed extends ClientError {
  /**
   * @const { number } MethodNotAllowed.statusCode
   * @default 405
   */
  static get statusCode () {
    return 405
  }

  /**
   * @const { string } MethodNotAllowed.message
   * @default 'Method not allowed'
   */
  static get message () {
    return 'Method not allowed'
  }
}

/**
 * Response for HTTP/1.1 406 Not acceptable
 *
 * @class HTTP/1.1 406 Not acceptable
 * @extends ClientError
 */
exports.NotAcceptable = class NotAcceptable extends ClientError {
  /**
   * @const { number } NotAcceptable.statusCode
   * @default 406
   */
  static get statusCode () {
    return 406
  }

  /**
   * @const { string } NotAcceptable.message
   * @default 'Not Acceptable'
   */
  static get message () {
    return 'Not Acceptable'
  }
}

/**
 * Response for HTTP/1.1 407 Proxy authentication required
 *
 * @class HTTP/1.1 407 Proxy authentication required
 * @extends ClientError
 */
exports.ProxyAuthenticationRequired = class ProxyAuthenticationRequired extends ClientError {
  /**
   * @const { number } ProxyAuthenticationRequired.statusCode
   * @default 407
   */
  static get statusCode () {
    return 407
  }

  /**
   * @const { string } ProxyAuthenticationRequired.message
   * @default 'Proxy Authentication Required'
   */
  static get message () {
    return 'Proxy Authentication Required'
  }
}

/**
 * Response for HTTP/1.1 408 Request timeout
 *
 * @class HTTP/1.1 408 Request timeout
 * @extends ClientError
 */
exports.RequestTimeout = class RequestTimeout extends ClientError {
  /**
   * @const { number } RequestTimeout.statusCode
   * @default 408
   */
  static get statusCode () {
    return 408
  }

  /**
   * @const { string } RequestTimeout.message
   * @default 'Request timeout'
   */
  static get message () {
    return 'Request timeout'
  }

  /**
   * Store the error data
   *
   * @param { string } message        Error message
   * @param { object } [data]         Error details
   */
  constructor (message, data) {
    message = message || RequestTimeout.message
    super(message, data)
  }
}

/**
 * Response for HTTP/1.1 409 Conflict
 *
 * @class HTTP/1.1 409 Conflict
 * @extends ClientError
 */
exports.Conflict = class Conflict extends ClientError {
  /**
   * @const { number } Conflict.statusCode
   * @default 409
   */
  static get statusCode () {
    return 409
  }

  /**
   * @const { string } Conflict.message
   * @default 'Conflict'
   */
  static get message () {
    return 'Conflict'
  }
}

/**
 * Response for HTTP/1.1 410 Gone
 *
 * @class HTTP/1.1 410 Gone
 * @extends ClientError
 */
exports.Gone = class Gone extends ClientError {
  /**
   * @const { number } Gone.statusCode
   * @default 410
   */
  static get statusCode () {
    return 410
  }

  /**
   * @const { string } Gone.message
   * @default 'Gone'
   */
  static get message () {
    return 'Gone'
  }
}

/**
 * Response for HTTP/1.1 411 Length required
 *
 * @class HTTP/1.1 411 Length required
 * @extends ClientError
 */
exports.LengthRequired = class LengthRequired extends ClientError {
  /**
   * @const { number } LengthRequired.statusCode
   * @default 411
   */
  static get statusCode () {
    return 411
  }

  /**
   * @const { string } LengthRequired.message
   * @default 'Length Required'
   */
  static get message () {
    return 'Length Required'
  }
}

/**
 * Response for HTTP/1.1 412 Precondition failed
 *
 * @class HTTP/1.1 412 Precondition failed
 * @extends ClientError
 */
exports.PreconditionFailed = class PreconditionFailed extends ClientError {
  /**
   * @const { number } PreconditionFailed.statusCode
   * @default 412
   */
  static get statusCode () {
    return 412
  }

  /**
   * @const { string } PreconditionFailed.message
   * @default 'Precondition Failed'
   */
  static get message () {
    return 'Precondition Failed'
  }
}

/**
 * Response for HTTP/1.1 413 Payload too large
 *
 * @class HTTP/1.1 413 Payload too large
 * @extends ClientError
 */
exports.PayloadTooLarge = class PayloadTooLarge extends ClientError {
  /**
   * @const { number } PayloadTooLarge.statusCode
   * @default 413
   */
  static get statusCode () {
    return 413
  }

  /**
   * @const { string } PayloadTooLarge.message
   * @default 'Payload Too Large'
   */
  static get message () {
    return 'Payload Too Large'
  }
}

/**
 * Response for HTTP/1.1 414 URI too long
 *
 * @class HTTP/1.1 414 URI too long
 * @extends ClientError
 */
exports.URITooLong = class URITooLong extends ClientError {
  /**
   * @const { number } URITooLong.statusCode
   * @default 414
   */
  static get statusCode () {
    return 414
  }

  /**
   * @const { string } URITooLong.message
   * @default 'URI Too Long'
   */
  static get message () {
    return 'URI Too Long'
  }
}

/**
 * Response for HTTP/1.1 415 Unsupported media type
 *
 * @class HTTP/1.1 415 Unsupported media type
 * @extends ClientError
 */
exports.UnsupportedMediaType = class UnsupportedMediaType extends ClientError {
  /**
   * @const { number } UnsupportedMediaType.statusCode
   * @default 415
   */
  static get statusCode () {
    return 415
  }

  /**
   * @const { string } UnsupportedMediaType.message
   * @default 'Unsupported Media Type'
   */
  static get message () {
    return 'Unsupported Media Type'
  }
}

/**
 * Response for HTTP/1.1 416 Range not satisfiable
 *
 * @class HTTP/1.1 416 Range not satisfiable
 * @extends ClientError
 */
exports.RangeNotSatisfiable = class RangeNotSatisfiable extends ClientError {
  /**
   * @const { number } RangeNotSatisfiable.statusCode
   * @default 416
   */
  static get statusCode () {
    return 416
  }

  /**
   * @const { string } RangeNotSatisfiable.message
   * @default 'Range Not Satisfiable'
   */
  static get message () {
    return 'Range Not Satisfiable'
  }
}

/**
 * Response for HTTP/1.1 417 Expectation failed
 *
 * @class HTTP/1.1 417 Expectation failed
 * @extends ClientError
 */
exports.ExpectationFailed = class ExpectationFailed extends ClientError {
  /**
   * @const { number } ExpectationFailed.statusCode
   * @default 417
   */
  static get statusCode () {
    return 417
  }

  /**
   * @const { string } ExpectationFailed.message
   * @default 'Expectation Failed'
   */
  static get message () {
    return 'Expectation Failed'
  }
}

/**
 * Response for HTTP/1.1 421 Misdirected request
 *
 * @class HTTP/1.1 421 Misdirected request
 * @extends ClientError
 */
exports.MisdirectedRequest = class MisdirectedRequest extends ClientError {
  /**
   * @const { number } MisdirectedRequest.statusCode
   * @default 421
   */
  static get statusCode () {
    return 421
  }

  /**
   * @const { string } MisdirectedRequest.message
   * @default 'Misdirected Request'
   */
  static get message () {
    return 'Misdirected Request'
  }
}

/**
 * Response for HTTP/1.1 422 Unprocessable entity
 *
 * @class HTTP/1.1 422 Unprocessable entity
 * @extends ClientError
 */
exports.UnprocessableEntity = class UnprocessableEntity extends ClientError {
  /**
   * @const { number } UnprocessableEntity.statusCode
   * @default 422
   */
  static get statusCode () {
    return 422
  }

  /**
   * @const { string } UnprocessableEntity.message
   * @default 'Unprocessable Entity'
   */
  static get message () {
    return 'Unprocessable Entity'
  }
}

/**
 * Response for HTTP/1.1 423 Locked
 *
 * @class HTTP/1.1 423 Locked
 * @extends ClientError
 */
exports.Locked = class Locked extends ClientError {
  /**
   * @const { number } Locked.statusCode
   * @default 423
   */
  static get statusCode () {
    return 423
  }

  /**
   * @const { string } Locked.message
   * @default 'Locked'
   */
  static get message () {
    return 'Locked'
  }
}

/**
 * Response for HTTP/1.1 424 Failed dependency
 *
 * @class HTTP/1.1 424 Failed dependency
 * @extends ClientError
 */
exports.FailedDependency = class FailedDependency extends ClientError {
  /**
   * @const { number } FailedDependency.statusCode
   * @default 424
   */
  static get statusCode () {
    return 424
  }

  /**
   * @const { string } FailedDependency.message
   * @default 'Failed Dependency'
   */
  static get message () {
    return 'Failed Dependency'
  }
}

/**
 * Response for HTTP/1.1 426 Upgrade required
 *
 * @class HTTP/1.1 426 Upgrade required
 * @extends ClientError
 */
exports.UpgradeRequired = class UpgradeRequired extends ClientError {
  /**
   * @const { number } UpgradeRequired.statusCode
   * @default 426
   */
  static get statusCode () {
    return 426
  }

  /**
   * @const { string } UpgradeRequired.message
   * @default 'Upgrade Required'
   */
  static get message () {
    return 'Upgrade Required'
  }
}

/**
 * Response for HTTP/1.1 428 Precondition failed
 *
 * @class HTTP/1.1 428 Precondition failed
 * @extends ClientError
 */
exports.PreconditionRequired = class PreconditionRequired extends ClientError {
  /**
   * @const { number } PreconditionRequired.statusCode
   * @default 428
   */
  static get statusCode () {
    return 428
  }

  /**
   * @const { string } PreconditionFailed.message
   * @default 'Precondition Required'
   */
  static get message () {
    return 'Precondition Required'
  }
}

/**
 * Response for HTTP/1.1 429 Too many requests
 *
 * @class HTTP/1.1 429 Too many requests
 * @extends ClientError
 */
exports.TooManyRequests = class TooManyRequests extends ClientError {
  /**
   * @const { number } TooManyRequests.statusCode
   * @default 429
   */
  static get statusCode () {
    return 429
  }

  /**
   * @const { string } TooManyRequests.message
   * @default 'Too Many Requests'
   */
  static get message () {
    return 'Too Many Requests'
  }
}

/**
 * Response for HTTP/1.1 432 Request header fields too large
 *
 * @class HTTP/1.1 432 Request header fields too large
 * @extends ClientError
 */
exports.RequestHeaderFieldsTooLarge = class RequestHeaderFieldsTooLarge extends ClientError {
  /**
   * @const { number } RequestHeaderFieldsTooLarge.statusCode
   * @default 431
   */
  static get statusCode () {
    return 431
  }

  /**
   * @const { string } RequestHeaderFieldsTooLarge.message
   * @default 'Request Header Fields Too Large'
   */
  static get message () {
    return 'Request Header Fields Too Large'
  }
}

/**
 * Response for HTTP/1.1 451 Unavailable for legal reasons
 *
 * @class HTTP/1.1 451 Unavailable for legal reasons
 * @extends ClientError
 */
exports.UnavailableForLegalReasons = class UnavailableForLegalReasons extends ClientError {
  /**
   * @const { number } UnavailableForLegalReasons.statusCode
   * @default 451
   */
  static get statusCode () {
    return 451
  }

  /**
   * @const { string } UnavailableForLegalReasons.message
   * @default 'Unavailable For Legal Reasons'
   */
  static get message () {
    return 'Unavailable For Legal Reasons'
  }
}

/**
 * Response group for HTTP/1.1 500 Server error series
 *
 * @interface ServerError
 * @extends HTTPError
 */
const ServerError = exports.ServerError = class ServerError extends HTTPError {
  /**
   * @const { string } ServerError.message
   * @default 'Server Error'
   */
  static get message () {
    return 'Server Error'
  }
}

/**
 * Response for HTTP/1.1 500 Internal server error
 *
 * @class HTTP/1.1 500 Internal server error
 * @extends ServerError
 */
exports.InternalServerError = class InternalServerError extends ServerError {
  /**
   * @const { number } InternalServerError.statusCode
   * @default 500
   */
  static get statusCode () {
    return 500
  }

  /**
   * @const { string } InternalServerError.message
   * @default 'Internal Server Error'
   */
  static get message () {
    return 'Internal Server Error'
  }
}

/**
 * Response for HTTP/1.1 501 Not implemented
 *
 * @class HTTP/1.1 501 Not implemented
 * @extends ServerError
 */
exports.NotImplemented = class NotImplemented extends ServerError {
  /**
   * @const { number } NotImplemented.statusCode
   * @default 501
   */
  static get statusCode () {
    return 501
  }

  /**
   * @const { string } NotImplemented.message
   * @default 'Not Implemented'
   */
  static get message () {
    return 'Not Implemented'
  }
}

/**
 * Response for HTTP/1.1 502 Bad gateway
 *
 * @class HTTP/1.1 502 Bad gateway
 * @extends ServerError
 */
exports.BadGateway = class BadGateway extends ServerError {
  /**
   * @const { number } BadGateway.statusCode
   * @default 502
   */
  static get statusCode () {
    return 502
  }

  /**
   * @const { string } BadGateway.message
   * @default 'Bad Gateway'
   */
  static get message () {
    return 'Bad Gateway'
  }
}

/**
 * Response for HTTP/1.1 503 Service unavailable
 *
 * @class HTTP/1.1 503 Service unavailable
 * @extends ServerError
 */
exports.ServiceUnavailable = class ServiceUnavailable extends ServerError {
  /**
   * @const { number } ServiceUnavailable.statusCode
   * @default 503
   */
  static get statusCode () {
    return 503
  }

  /**
   * @const { string } ServiceUnavailable.message
   * @default 'Service Unavailable'
   */
  static get message () {
    return 'Service Unavailable'
  }
}

/**
 * Response for HTTP/1.1 504 Gateway timeout
 *
 * @class HTTP/1.1 504 Gateway timeout
 * @extends ServerError
 */
exports.GatewayTimeout = class GatewayTimeout extends ServerError {
  /**
   * @const { number } GatewayTimeout.statusCode
   * @default 504
   */
  static get statusCode () {
    return 504
  }

  /**
   * @const { string } GatewayTimeout.message
   * @default 'Gateway Timeout'
   */
  static get message () {
    return 'Gateway Timeout'
  }
}

/**
 * Response for HTTP/1.1 505 HTTP version not supported
 *
 * @class HTTP/1.1 505 HTTP version not supported
 * @extends ServerError
 */
exports.HTTPVersionNotSupported = class HTTPVersionNotSupported extends ServerError {
  /**
   * @const { number } HTTPVersionNotSupported.statusCode
   * @default 505
   */
  static get statusCode () {
    return 505
  }

  /**
   * @const { string } HTTPVersionNotSupported.message
   * @default 'HTTP Version Not Supported'
   */
  static get message () {
    return 'HTTP Version Not Supported'
  }
}

/**
 * Response for HTTP/1.1 508 Network read timeout
 *
 * @class HTTP/1.1 508 Network read timeout
 * @extends ServerError
 */
exports.NetworkReadTimeout = exports.NetworkReadTimeoutError = class NetworkReadTimeout extends ServerError {
  /**
   * @const { number } NetworkReadTimeout.statusCode
   * @default 508
   */
  static get statusCode () {
    return 508
  }

  /**
   * @const { string } NetworkReadTimeout.message
   * @default 'Network read timeout error'
   */
  static get message () {
    return 'Network read timeout error'
  }
}
