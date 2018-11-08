exports.Cancel = class CancelError extends Error {}

const BaseError = exports.BaseError = class BaseError extends Error {
  constructor (message, data = null) {
    super(message)
    this.message = message
    this.response = message
    this.data = data
  }
}

// Series 300
exports.MovedPermanently = class MovedPermanently extends BaseError {
  constructor (message, data = {}) {
    message = message || 'Moved Permanently'
    data.location = data.location || ''
    super(message, data)
    this.statusCode = 301
  }
}

exports.Found = class Found extends BaseError {
  constructor (message, data = {}) {
    message = message || 'Found'
    data.location = data.location || ''
    super(message, data)
    this.statusCode = 302
  }
}

exports.NotModified = class NotModified extends BaseError {
  constructor (message, data = {}) {
    message = message || 'NotModified'
    super(message, data)
    this.statusCode = 304
  }
}

// Series 400
exports.Forbidden = class Forbidden extends BaseError {
  constructor (message, data) {
    message = message || 'Forbidden'
    super(message, data)
    this.statusCode = 403
  }
}

exports.FormValidation = class FormValidation extends BaseError {
  constructor (errors, data) {
    const k = Object.keys(errors)[0]
    const primary = errors[k]
    super(primary.error, data)
    this.statusCode = 400
    this.errors = errors
  }
}

exports.BadRequest = class BadRequest extends BaseError {
  constructor (message, data) {
    message = message || 'Bad Request'
    super(message, data)
    this.statusCode = 400
  }
}

exports.NotFound = class NotFound extends BaseError {
  constructor (message, data) {
    message = message || 'Not Found'
    super(message, data)
    this.statusCode = 404
  }
}

exports.MethodNotAllowed = class MethodNotAllowed extends BaseError {
  constructor (message, data) {
    message = message || 'Method not allowed'
    super(message, data)
    this.statusCode = 405
  }
}

exports.RequestTimeout = class RequestTimeout extends BaseError {
  constructor (message, data) {
    message = message || 'Request timeout'
    super(message, data)
    this.statusCode = 408
  }
}

exports.Conflict = class Conflict extends BaseError {
  constructor (message, data) {
    message = message || 'Conflict'
    super(message, data)
    this.statusCode = 409
  }
}

exports.UnprocessableEntity = class UnprocessableEntity extends BaseError {
  constructor (message, data) {
    message = message || 'Unprocessable Entity'
    super(message, data)
    this.statusCode = 422
  }
}

// Series 500
exports.InternalServerError = class InternalServerError extends BaseError {
  constructor (message, data) {
    message = message || 'Internal Server Error'
    super(message, data)
    this.statusCode = 500
  }
}

exports.NotImplemented = class NotImplemented extends BaseError {
  constructor (message, data) {
    message = message || 'Not Implemented'
    super(message, data)
    this.statusCode = 501
  }
}
