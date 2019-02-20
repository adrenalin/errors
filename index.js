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

// Series 300
exports.MultipleChoices = class MultipleChoices extends BaseError {
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

exports.MovedPermanently = class MovedPermanently extends BaseError {
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

exports.Found = class Found extends BaseError {
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

exports.SeeOther = class SeeOther extends BaseError {
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

exports.NotModified = class NotModified extends BaseError {
  static get statusCode () {
    return 304
  }

  static get message () {
    return 'NotModified'
  }
}

// Series 400
exports.Forbidden = class Forbidden extends BaseError {
  static get statusCode () {
    return 403
  }

  static get message () {
    return 'Forbidden'
  }
}

exports.FormValidation = class FormValidation extends BaseError {
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

exports.BadRequest = class BadRequest extends BaseError {
  static get statusCode () {
    return 400
  }

  static get message () {
    return 'Bad Request'
  }
}

exports.NotFound = class NotFound extends BaseError {
  static get statusCode () {
    return 404
  }

  static get message () {
    return 'Not Found'
  }
}

exports.MethodNotAllowed = class MethodNotAllowed extends BaseError {
  static get statusCode () {
    return 405
  }

  static get message () {
    return 'Method not allowed'
  }
}

exports.RequestTimeout = class RequestTimeout extends BaseError {
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

exports.Conflict = class Conflict extends BaseError {
  static get statusCode () {
    return 409
  }

  static get message () {
    return 'Conflict'
  }
}

exports.UnprocessableEntity = class UnprocessableEntity extends BaseError {
  static get statusCode () {
    return 422
  }

  static get message () {
    return 'Unprocessable Entity'
  }
}

// Series 500
exports.InternalServerError = class InternalServerError extends BaseError {
  static get statusCode () {
    return 500
  }

  static get message () {
    return 'Internal Server Error'
  }
}

exports.NotImplemented = class NotImplemented extends BaseError {
  static get statusCode () {
    return 501
  }

  static get message () {
    return 'Not Implemented'
  }
}

exports.BadGateway = class BadGateway extends BaseError {
  static get statusCode () {
    return 502
  }

  static get message () {
    return 'Bad Gateway'
  }
}

exports.ServiceUnavailable = class ServiceUnavailable extends BaseError {
  static get statusCode () {
    return 503
  }

  static get message () {
    return 'Service Unavailable'
  }
}

exports.GatewayTimeout = class GatewayTimeout extends BaseError {
  static get statusCode () {
    return 504
  }

  static get message () {
    return 'Gateway Timeout'
  }
}

exports.HTTPVersionNotSupported = class HTTPVersionNotSupported extends BaseError {
  static get statusCode () {
    return 505
  }

  static get message () {
    return 'HTTP Version Not Supported'
  }
}

exports.NetworkReadTimeout = exports.NetworkReadTimeoutError = class NetworkReadTimeout extends BaseError {
  static get statusCode () {
    return 598
  }

  static get message () {
    return 'Network read timeout error'
  }
}
