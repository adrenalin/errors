## Classes

<dl>
<dt><a href="#Cancel">Cancel</a></dt>
<dd><p>Cancel an interaction error</p></dd>
<dt><a href="#InvalidArgument">InvalidArgument</a></dt>
<dd><p>Invalid argument</p></dd>
<dt><a href="#HTTPError">HTTPError</a></dt>
<dd><p>HTTP error baseclass</p></dd>
<dt><a href="#OK">OK</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 200 OK</p></dd>
<dt><a href="#Created">Created</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 201 Created</p></dd>
<dt><a href="#Accepted">Accepted</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 202 Accepted</p></dd>
<dt><a href="#NoContent">NoContent</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 204 No content</p></dd>
<dt><a href="#ResetContent">ResetContent</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 205 Reset content</p></dd>
<dt><a href="#PartialContent">PartialContent</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 206 Partial content</p></dd>
<dt><a href="#MultipleChoices">MultipleChoices</a> ⇐ <code><a href="#Redirection">Redirection</a></code></dt>
<dd><p>HTTP/1.1 300 Multiple choices</p></dd>
<dt><a href="#MovedPermanently">MovedPermanently</a> ⇐ <code><a href="#Redirection">Redirection</a></code></dt>
<dd><p>HTTP/1.1 301 Moved permanently</p></dd>
<dt><a href="#Found">Found</a> ⇐ <code><a href="#Redirection">Redirection</a></code></dt>
<dd><p>HTTP/1.1 302 Found</p></dd>
<dt><a href="#SeeOther">SeeOther</a> ⇐ <code><a href="#Redirection">Redirection</a></code></dt>
<dd><p>HTTP/1.1 303 See other</p></dd>
<dt><a href="#NotModified">NotModified</a> ⇐ <code><a href="#Redirection">Redirection</a></code></dt>
<dd><p>HTTP/1.1 304 Not modified</p></dd>
<dt><a href="#BadRequest">BadRequest</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 400 Bad request</p></dd>
<dt><a href="#FormValidation">FormValidation</a> ⇐ <code><a href="#BadRequest">BadRequest</a></code></dt>
<dd><p>Form validation extension for HTTP/1.1 400 Bad request</p></dd>
<dt><a href="#ValidationError">ValidationError</a> ⇐ <code><a href="#BadRequest">BadRequest</a></code></dt>
<dd><p>JSON schema validation error extension for HTTP/1.1 400 Bad Request</p></dd>
<dt><a href="#Unauthorized">Unauthorized</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 401 Unauthorized</p></dd>
<dt><a href="#PaymentRequired">PaymentRequired</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 402 Payment required</p></dd>
<dt><a href="#Forbidden">Forbidden</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 403 Forbidden</p></dd>
<dt><a href="#NotFound">NotFound</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 404 Not found</p></dd>
<dt><a href="#MethodNotAllowed">MethodNotAllowed</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 405 Method not allowed</p></dd>
<dt><a href="#NotAcceptable">NotAcceptable</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 406 Not acceptable</p></dd>
<dt><a href="#ProxyAuthenticationRequired">ProxyAuthenticationRequired</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 407 Proxy authentication required</p></dd>
<dt><a href="#RequestTimeout">RequestTimeout</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 408 Request timeout</p></dd>
<dt><a href="#Conflict">Conflict</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 409 Conflict</p></dd>
<dt><a href="#Gone">Gone</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 410 Gone</p></dd>
<dt><a href="#LengthRequired">LengthRequired</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 411 Length required</p></dd>
<dt><a href="#PreconditionFailed">PreconditionFailed</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 412 Precondition failed</p></dd>
<dt><a href="#PayloadTooLarge">PayloadTooLarge</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 413 Payload too large</p></dd>
<dt><a href="#URITooLong">URITooLong</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 414 URI too long</p></dd>
<dt><a href="#UnsupportedMediaType">UnsupportedMediaType</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 415 Unsupported media type</p></dd>
<dt><a href="#RangeNotSatisfiable">RangeNotSatisfiable</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 416 Range not satisfiable</p></dd>
<dt><a href="#ExpectationFailed">ExpectationFailed</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 417 Expectation failed</p></dd>
<dt><a href="#MisdirectedRequest">MisdirectedRequest</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 421 Misdirected request</p></dd>
<dt><a href="#UnprocessableEntity">UnprocessableEntity</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 422 Unprocessable entity</p></dd>
<dt><a href="#Locked">Locked</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 423 Locked</p></dd>
<dt><a href="#FailedDependency">FailedDependency</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 424 Failed dependency</p></dd>
<dt><a href="#UpgradeRequired">UpgradeRequired</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 426 Upgrade required</p></dd>
<dt><a href="#PreconditionRequired">PreconditionRequired</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 428 Precondition failed</p></dd>
<dt><a href="#TooManyRequests">TooManyRequests</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 429 Too many requests</p></dd>
<dt><a href="#RequestHeaderFieldsTooLarge">RequestHeaderFieldsTooLarge</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 432 Request header fields too large</p></dd>
<dt><a href="#UnavailableForLegalReasons">UnavailableForLegalReasons</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 451 Unavailable for legal reasons</p></dd>
<dt><a href="#InternalServerError">InternalServerError</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 500 Internal server error</p></dd>
<dt><a href="#NotImplemented">NotImplemented</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 501 Not implemented</p></dd>
<dt><a href="#BadGateway">BadGateway</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 502 Bad gateway</p></dd>
<dt><a href="#ServiceUnavailable">ServiceUnavailable</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 503 Service unavailable</p></dd>
<dt><a href="#GatewayTimeout">GatewayTimeout</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 504 Gateway timeout</p></dd>
<dt><a href="#HTTPVersionNotSupported">HTTPVersionNotSupported</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 505 HTTP version not supported</p></dd>
<dt><a href="#NetworkReadTimeout">NetworkReadTimeout</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 508 Network read timeout</p></dd>
<dt><a href="#Cancel">Cancel</a></dt>
<dd><p>Cancel an interaction error</p></dd>
<dt><a href="#InvalidArgument">InvalidArgument</a></dt>
<dd><p>Invalid argument</p></dd>
<dt><a href="#HTTPError">HTTPError</a></dt>
<dd><p>HTTP error baseclass</p></dd>
<dt><a href="#OK">OK</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 200 OK</p></dd>
<dt><a href="#Created">Created</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 201 Created</p></dd>
<dt><a href="#Accepted">Accepted</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 202 Accepted</p></dd>
<dt><a href="#NoContent">NoContent</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 204 No content</p></dd>
<dt><a href="#ResetContent">ResetContent</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 205 Reset content</p></dd>
<dt><a href="#PartialContent">PartialContent</a> ⇐ <code>Success</code></dt>
<dd><p>HTTP/1.1 206 Partial content</p></dd>
<dt><a href="#MultipleChoices">MultipleChoices</a> ⇐ <code><a href="#Redirection">Redirection</a></code></dt>
<dd><p>HTTP/1.1 300 Multiple choices</p></dd>
<dt><a href="#MovedPermanently">MovedPermanently</a> ⇐ <code><a href="#Redirection">Redirection</a></code></dt>
<dd><p>HTTP/1.1 301 Moved permanently</p></dd>
<dt><a href="#Found">Found</a> ⇐ <code><a href="#Redirection">Redirection</a></code></dt>
<dd><p>HTTP/1.1 302 Found</p></dd>
<dt><a href="#SeeOther">SeeOther</a> ⇐ <code><a href="#Redirection">Redirection</a></code></dt>
<dd><p>HTTP/1.1 303 See other</p></dd>
<dt><a href="#NotModified">NotModified</a> ⇐ <code><a href="#Redirection">Redirection</a></code></dt>
<dd><p>HTTP/1.1 304 Not modified</p></dd>
<dt><a href="#BadRequest">BadRequest</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 400 Bad request</p></dd>
<dt><a href="#FormValidation">FormValidation</a> ⇐ <code><a href="#BadRequest">BadRequest</a></code></dt>
<dd><p>Form validation extension for HTTP/1.1 400 Bad request</p></dd>
<dt><a href="#ValidationError">ValidationError</a> ⇐ <code><a href="#BadRequest">BadRequest</a></code></dt>
<dd><p>JSON schema validation error extension for HTTP/1.1 400 Bad Request</p></dd>
<dt><a href="#Unauthorized">Unauthorized</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 401 Unauthorized</p></dd>
<dt><a href="#PaymentRequired">PaymentRequired</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 402 Payment required</p></dd>
<dt><a href="#Forbidden">Forbidden</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 403 Forbidden</p></dd>
<dt><a href="#NotFound">NotFound</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 404 Not found</p></dd>
<dt><a href="#MethodNotAllowed">MethodNotAllowed</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 405 Method not allowed</p></dd>
<dt><a href="#NotAcceptable">NotAcceptable</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 406 Not acceptable</p></dd>
<dt><a href="#ProxyAuthenticationRequired">ProxyAuthenticationRequired</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 407 Proxy authentication required</p></dd>
<dt><a href="#RequestTimeout">RequestTimeout</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 408 Request timeout</p></dd>
<dt><a href="#Conflict">Conflict</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 409 Conflict</p></dd>
<dt><a href="#Gone">Gone</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 410 Gone</p></dd>
<dt><a href="#LengthRequired">LengthRequired</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 411 Length required</p></dd>
<dt><a href="#PreconditionFailed">PreconditionFailed</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 412 Precondition failed</p></dd>
<dt><a href="#PayloadTooLarge">PayloadTooLarge</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 413 Payload too large</p></dd>
<dt><a href="#URITooLong">URITooLong</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 414 URI too long</p></dd>
<dt><a href="#UnsupportedMediaType">UnsupportedMediaType</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 415 Unsupported media type</p></dd>
<dt><a href="#RangeNotSatisfiable">RangeNotSatisfiable</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 416 Range not satisfiable</p></dd>
<dt><a href="#ExpectationFailed">ExpectationFailed</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 417 Expectation failed</p></dd>
<dt><a href="#MisdirectedRequest">MisdirectedRequest</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 421 Misdirected request</p></dd>
<dt><a href="#UnprocessableEntity">UnprocessableEntity</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 422 Unprocessable entity</p></dd>
<dt><a href="#Locked">Locked</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 423 Locked</p></dd>
<dt><a href="#FailedDependency">FailedDependency</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 424 Failed dependency</p></dd>
<dt><a href="#UpgradeRequired">UpgradeRequired</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 426 Upgrade required</p></dd>
<dt><a href="#PreconditionRequired">PreconditionRequired</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 428 Precondition failed</p></dd>
<dt><a href="#TooManyRequests">TooManyRequests</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 429 Too many requests</p></dd>
<dt><a href="#RequestHeaderFieldsTooLarge">RequestHeaderFieldsTooLarge</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 432 Request header fields too large</p></dd>
<dt><a href="#UnavailableForLegalReasons">UnavailableForLegalReasons</a> ⇐ <code><a href="#ClientError">ClientError</a></code></dt>
<dd><p>HTTP/1.1 451 Unavailable for legal reasons</p></dd>
<dt><a href="#InternalServerError">InternalServerError</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 500 Internal server error</p></dd>
<dt><a href="#NotImplemented">NotImplemented</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 501 Not implemented</p></dd>
<dt><a href="#BadGateway">BadGateway</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 502 Bad gateway</p></dd>
<dt><a href="#ServiceUnavailable">ServiceUnavailable</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 503 Service unavailable</p></dd>
<dt><a href="#GatewayTimeout">GatewayTimeout</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 504 Gateway timeout</p></dd>
<dt><a href="#HTTPVersionNotSupported">HTTPVersionNotSupported</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 505 HTTP version not supported</p></dd>
<dt><a href="#NetworkReadTimeout">NetworkReadTimeout</a> ⇐ <code><a href="#ServerError">ServerError</a></code></dt>
<dd><p>HTTP/1.1 508 Network read timeout</p></dd>
</dl>

## Interfaces

<dl>
<dt><a href="#Redirection">Redirection</a> ⇐ <code><a href="#HTTPError">HTTPError</a></code></dt>
<dd><p>Response group for HTTP/1.1 300 Redirection series</p></dd>
<dt><a href="#ClientError">ClientError</a> ⇐ <code><a href="#HTTPError">HTTPError</a></code></dt>
<dd><p>Response group for HTTP/1.1 400 Client error series</p></dd>
<dt><a href="#ServerError">ServerError</a> ⇐ <code><a href="#HTTPError">HTTPError</a></code></dt>
<dd><p>Response group for HTTP/1.1 500 Server error series</p></dd>
<dt><a href="#Redirection">Redirection</a> ⇐ <code><a href="#HTTPError">HTTPError</a></code></dt>
<dd><p>Response group for HTTP/1.1 300 Redirection series</p></dd>
<dt><a href="#ClientError">ClientError</a> ⇐ <code><a href="#HTTPError">HTTPError</a></code></dt>
<dd><p>Response group for HTTP/1.1 400 Client error series</p></dd>
<dt><a href="#ServerError">ServerError</a> ⇐ <code><a href="#HTTPError">HTTPError</a></code></dt>
<dd><p>Response group for HTTP/1.1 500 Server error series</p></dd>
</dl>

<a name="Redirection"></a>

## Redirection ⇐ [<code>HTTPError</code>](#HTTPError)
<p>Response group for HTTP/1.1 300 Redirection series</p>

**Kind**: global interface  
**Summary**: <p>Response group for HTTP/1.1 300 Redirection series</p>.  
**Extends**: [<code>HTTPError</code>](#HTTPError)  

* [Redirection](#Redirection) ⇐ [<code>HTTPError</code>](#HTTPError)
    * _instance_
        * [.Redirection](#Redirection+Redirection)
            * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
            * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
        * [.Redirection](#Redirection+Redirection)
            * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
            * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
    * _static_
        * [.message](#Redirection.message) : <code>string</code>
        * [.message](#Redirection.message) : <code>string</code>

<a name="Redirection+Redirection"></a>

### redirection.Redirection
**Kind**: instance class of [<code>Redirection</code>](#Redirection)  
**Summary**: <p>Accept data argument that passes the required location information to the
HTTP request</p>.  

* [.Redirection](#Redirection+Redirection)
    * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
    * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)

<a name="new_Redirection+Redirection_new"></a>

#### new exports.Redirection(message, data)
<p>Accept data argument that passes the required location information to the
HTTP request</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Error message</p> |
| data | <code>object</code> | <p>Extended data</p> |

<a name="new_Redirection+Redirection_new"></a>

#### new exports.Redirection(message, data)
<p>Accept data argument that passes the required location information to the
HTTP request</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Error message</p> |
| data | <code>object</code> | <p>Extended data</p> |

<a name="Redirection+Redirection"></a>

### redirection.Redirection
**Kind**: instance class of [<code>Redirection</code>](#Redirection)  
**Summary**: <p>Accept data argument that passes the required location information to the
HTTP request</p>.  

* [.Redirection](#Redirection+Redirection)
    * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
    * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)

<a name="new_Redirection+Redirection_new"></a>

#### new exports.Redirection(message, data)
<p>Accept data argument that passes the required location information to the
HTTP request</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Error message</p> |
| data | <code>object</code> | <p>Extended data</p> |

<a name="new_Redirection+Redirection_new"></a>

#### new exports.Redirection(message, data)
<p>Accept data argument that passes the required location information to the
HTTP request</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Error message</p> |
| data | <code>object</code> | <p>Extended data</p> |

<a name="Redirection.message"></a>

### Redirection.message : <code>string</code>
**Kind**: static constant of [<code>Redirection</code>](#Redirection)  
**Default**: <code>&quot;&#x27;Redirection&#x27;&quot;</code>  
<a name="Redirection.message"></a>

### Redirection.message : <code>string</code>
**Kind**: static constant of [<code>Redirection</code>](#Redirection)  
**Default**: <code>&quot;&#x27;Redirection&#x27;&quot;</code>  
<a name="ClientError"></a>

## ClientError ⇐ [<code>HTTPError</code>](#HTTPError)
<p>Response group for HTTP/1.1 400 Client error series</p>

**Kind**: global interface  
**Summary**: <p>Response group for HTTP/1.1 400 Client error series</p>.  
**Extends**: [<code>HTTPError</code>](#HTTPError)  

* [ClientError](#ClientError) ⇐ [<code>HTTPError</code>](#HTTPError)
    * [.message](#ClientError.message) : <code>string</code>
    * [.message](#ClientError.message) : <code>string</code>

<a name="ClientError.message"></a>

### ClientError.message : <code>string</code>
**Kind**: static constant of [<code>ClientError</code>](#ClientError)  
**Default**: <code>&quot;&#x27;Client Error&#x27;&quot;</code>  
<a name="ClientError.message"></a>

### ClientError.message : <code>string</code>
**Kind**: static constant of [<code>ClientError</code>](#ClientError)  
**Default**: <code>&quot;&#x27;Client Error&#x27;&quot;</code>  
<a name="ServerError"></a>

## ServerError ⇐ [<code>HTTPError</code>](#HTTPError)
<p>Response group for HTTP/1.1 500 Server error series</p>

**Kind**: global interface  
**Summary**: <p>Response group for HTTP/1.1 500 Server error series</p>.  
**Extends**: [<code>HTTPError</code>](#HTTPError)  

* [ServerError](#ServerError) ⇐ [<code>HTTPError</code>](#HTTPError)
    * [.message](#ServerError.message) : <code>string</code>
    * [.message](#ServerError.message) : <code>string</code>

<a name="ServerError.message"></a>

### ServerError.message : <code>string</code>
**Kind**: static constant of [<code>ServerError</code>](#ServerError)  
**Default**: <code>&quot;&#x27;Server Error&#x27;&quot;</code>  
<a name="ServerError.message"></a>

### ServerError.message : <code>string</code>
**Kind**: static constant of [<code>ServerError</code>](#ServerError)  
**Default**: <code>&quot;&#x27;Server Error&#x27;&quot;</code>  
<a name="Redirection"></a>

## Redirection ⇐ [<code>HTTPError</code>](#HTTPError)
<p>Response group for HTTP/1.1 300 Redirection series</p>

**Kind**: global interface  
**Summary**: <p>Response group for HTTP/1.1 300 Redirection series</p>.  
**Extends**: [<code>HTTPError</code>](#HTTPError)  

* [Redirection](#Redirection) ⇐ [<code>HTTPError</code>](#HTTPError)
    * _instance_
        * [.Redirection](#Redirection+Redirection)
            * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
            * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
        * [.Redirection](#Redirection+Redirection)
            * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
            * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
    * _static_
        * [.message](#Redirection.message) : <code>string</code>
        * [.message](#Redirection.message) : <code>string</code>

<a name="Redirection+Redirection"></a>

### redirection.Redirection
**Kind**: instance class of [<code>Redirection</code>](#Redirection)  
**Summary**: <p>Accept data argument that passes the required location information to the
HTTP request</p>.  

* [.Redirection](#Redirection+Redirection)
    * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
    * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)

<a name="new_Redirection+Redirection_new"></a>

#### new exports.Redirection(message, data)
<p>Accept data argument that passes the required location information to the
HTTP request</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Error message</p> |
| data | <code>object</code> | <p>Extended data</p> |

<a name="new_Redirection+Redirection_new"></a>

#### new exports.Redirection(message, data)
<p>Accept data argument that passes the required location information to the
HTTP request</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Error message</p> |
| data | <code>object</code> | <p>Extended data</p> |

<a name="Redirection+Redirection"></a>

### redirection.Redirection
**Kind**: instance class of [<code>Redirection</code>](#Redirection)  
**Summary**: <p>Accept data argument that passes the required location information to the
HTTP request</p>.  

* [.Redirection](#Redirection+Redirection)
    * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)
    * [new exports.Redirection(message, data)](#new_Redirection+Redirection_new)

<a name="new_Redirection+Redirection_new"></a>

#### new exports.Redirection(message, data)
<p>Accept data argument that passes the required location information to the
HTTP request</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Error message</p> |
| data | <code>object</code> | <p>Extended data</p> |

<a name="new_Redirection+Redirection_new"></a>

#### new exports.Redirection(message, data)
<p>Accept data argument that passes the required location information to the
HTTP request</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Error message</p> |
| data | <code>object</code> | <p>Extended data</p> |

<a name="Redirection.message"></a>

### Redirection.message : <code>string</code>
**Kind**: static constant of [<code>Redirection</code>](#Redirection)  
**Default**: <code>&quot;&#x27;Redirection&#x27;&quot;</code>  
<a name="Redirection.message"></a>

### Redirection.message : <code>string</code>
**Kind**: static constant of [<code>Redirection</code>](#Redirection)  
**Default**: <code>&quot;&#x27;Redirection&#x27;&quot;</code>  
<a name="ClientError"></a>

## ClientError ⇐ [<code>HTTPError</code>](#HTTPError)
<p>Response group for HTTP/1.1 400 Client error series</p>

**Kind**: global interface  
**Summary**: <p>Response group for HTTP/1.1 400 Client error series</p>.  
**Extends**: [<code>HTTPError</code>](#HTTPError)  

* [ClientError](#ClientError) ⇐ [<code>HTTPError</code>](#HTTPError)
    * [.message](#ClientError.message) : <code>string</code>
    * [.message](#ClientError.message) : <code>string</code>

<a name="ClientError.message"></a>

### ClientError.message : <code>string</code>
**Kind**: static constant of [<code>ClientError</code>](#ClientError)  
**Default**: <code>&quot;&#x27;Client Error&#x27;&quot;</code>  
<a name="ClientError.message"></a>

### ClientError.message : <code>string</code>
**Kind**: static constant of [<code>ClientError</code>](#ClientError)  
**Default**: <code>&quot;&#x27;Client Error&#x27;&quot;</code>  
<a name="ServerError"></a>

## ServerError ⇐ [<code>HTTPError</code>](#HTTPError)
<p>Response group for HTTP/1.1 500 Server error series</p>

**Kind**: global interface  
**Summary**: <p>Response group for HTTP/1.1 500 Server error series</p>.  
**Extends**: [<code>HTTPError</code>](#HTTPError)  

* [ServerError](#ServerError) ⇐ [<code>HTTPError</code>](#HTTPError)
    * [.message](#ServerError.message) : <code>string</code>
    * [.message](#ServerError.message) : <code>string</code>

<a name="ServerError.message"></a>

### ServerError.message : <code>string</code>
**Kind**: static constant of [<code>ServerError</code>](#ServerError)  
**Default**: <code>&quot;&#x27;Server Error&#x27;&quot;</code>  
<a name="ServerError.message"></a>

### ServerError.message : <code>string</code>
**Kind**: static constant of [<code>ServerError</code>](#ServerError)  
**Default**: <code>&quot;&#x27;Server Error&#x27;&quot;</code>  
<a name="Cancel"></a>

## Cancel
<p>Cancel an interaction error</p>

**Kind**: global class  
**Summary**: <p>Cancel an interaction</p>.  

* [Cancel](#Cancel)
    * [new exports.Cancel()](#new_Cancel_new)
    * [new exports.Cancel()](#new_Cancel_new)

<a name="new_Cancel_new"></a>

### new exports.Cancel()
<p>Cancel an interaction</p>

<a name="new_Cancel_new"></a>

### new exports.Cancel()
<p>Cancel an interaction</p>

<a name="HTTPError"></a>

## HTTPError
<p>HTTP error baseclass</p>

**Kind**: global class  
**Summary**: <p>HTTP error</p>.  

* [HTTPError](#HTTPError)
    * [new HTTPError()](#new_HTTPError_new)
    * [new HTTPError()](#new_HTTPError_new)
    * [.Success](#HTTPError.Success) ⇐ [<code>HTTPError</code>](#HTTPError)
        * [new Success()](#new_HTTPError.Success_new)
        * [new Success()](#new_HTTPError.Success_new)
    * [.Success](#HTTPError.Success) ⇐ [<code>HTTPError</code>](#HTTPError)
        * [new Success()](#new_HTTPError.Success_new)
        * [new Success()](#new_HTTPError.Success_new)
    * [.statusCode](#HTTPError.statusCode) ⇒ <code>number</code>
    * [.message](#HTTPError.message) : <code>string</code>
    * [.statusCode](#HTTPError.statusCode) ⇒ <code>number</code>
    * [.message](#HTTPError.message) : <code>string</code>

<a name="new_HTTPError_new"></a>

### new HTTPError()
<p>HTTP error</p>

<a name="new_HTTPError_new"></a>

### new HTTPError()
<p>HTTP error</p>

<a name="HTTPError.Success"></a>

### HTTPError.Success ⇐ [<code>HTTPError</code>](#HTTPError)
<p>HTTP/1.1 200 Success series</p>

**Kind**: static class of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Response group for HTTP/1.1 200 Success series</p>.  
**Extends**: [<code>HTTPError</code>](#HTTPError)  

* [.Success](#HTTPError.Success) ⇐ [<code>HTTPError</code>](#HTTPError)
    * [new Success()](#new_HTTPError.Success_new)
    * [new Success()](#new_HTTPError.Success_new)

<a name="new_HTTPError.Success_new"></a>

#### new Success()
<p>Response group for HTTP/1.1 200 Success series</p>

<a name="new_HTTPError.Success_new"></a>

#### new Success()
<p>Response group for HTTP/1.1 200 Success series</p>

<a name="HTTPError.Success"></a>

### HTTPError.Success ⇐ [<code>HTTPError</code>](#HTTPError)
<p>HTTP/1.1 200 Success series</p>

**Kind**: static class of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Response group for HTTP/1.1 200 Success series</p>.  
**Extends**: [<code>HTTPError</code>](#HTTPError)  

* [.Success](#HTTPError.Success) ⇐ [<code>HTTPError</code>](#HTTPError)
    * [new Success()](#new_HTTPError.Success_new)
    * [new Success()](#new_HTTPError.Success_new)

<a name="new_HTTPError.Success_new"></a>

#### new Success()
<p>Response group for HTTP/1.1 200 Success series</p>

<a name="new_HTTPError.Success_new"></a>

#### new Success()
<p>Response group for HTTP/1.1 200 Success series</p>

<a name="HTTPError.statusCode"></a>

### HTTPError.statusCode ⇒ <code>number</code>
<p>Set the status code so that it can be read without initializing the class</p>

**Kind**: static constant of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Set the status code so that it can be read without initializing the class</p>.  
**Returns**: <code>number</code> - <p>HTTP/1.1 Status code</p>  
<a name="HTTPError.message"></a>

### HTTPError.message : <code>string</code>
<p>Default status message</p>

**Kind**: static constant of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Default status message</p>.  
<a name="HTTPError.statusCode"></a>

### HTTPError.statusCode ⇒ <code>number</code>
<p>Set the status code so that it can be read without initializing the class</p>

**Kind**: static constant of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Set the status code so that it can be read without initializing the class</p>.  
**Returns**: <code>number</code> - <p>HTTP/1.1 Status code</p>  
<a name="HTTPError.message"></a>

### HTTPError.message : <code>string</code>
<p>Default status message</p>

**Kind**: static constant of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Default status message</p>.  
<a name="OK"></a>

## OK ⇐ <code>Success</code>
<p>HTTP/1.1 200 OK</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [OK](#OK) ⇐ <code>Success</code>
    * [.statusCode](#OK.statusCode) : <code>number</code>
    * [.message](#OK.message) : <code>string</code>
    * [.statusCode](#OK.statusCode) : <code>number</code>
    * [.message](#OK.message) : <code>string</code>

<a name="OK.statusCode"></a>

### OK.statusCode : <code>number</code>
**Kind**: static constant of [<code>OK</code>](#OK)  
**Default**: <code>200</code>  
<a name="OK.message"></a>

### OK.message : <code>string</code>
**Kind**: static constant of [<code>OK</code>](#OK)  
**Default**: <code>&quot;&#x27;OK&#x27;&quot;</code>  
<a name="OK.statusCode"></a>

### OK.statusCode : <code>number</code>
**Kind**: static constant of [<code>OK</code>](#OK)  
**Default**: <code>200</code>  
<a name="OK.message"></a>

### OK.message : <code>string</code>
**Kind**: static constant of [<code>OK</code>](#OK)  
**Default**: <code>&quot;&#x27;OK&#x27;&quot;</code>  
<a name="Created"></a>

## Created ⇐ <code>Success</code>
<p>HTTP/1.1 201 Created</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [Created](#Created) ⇐ <code>Success</code>
    * [.statusCode](#Created.statusCode) : <code>number</code>
    * [.message](#Created.message) : <code>string</code>
    * [.statusCode](#Created.statusCode) : <code>number</code>
    * [.message](#Created.message) : <code>string</code>

<a name="Created.statusCode"></a>

### Created.statusCode : <code>number</code>
**Kind**: static constant of [<code>Created</code>](#Created)  
**Default**: <code>201</code>  
<a name="Created.message"></a>

### Created.message : <code>string</code>
**Kind**: static constant of [<code>Created</code>](#Created)  
**Default**: <code>&quot;&#x27;Created&#x27;&quot;</code>  
<a name="Created.statusCode"></a>

### Created.statusCode : <code>number</code>
**Kind**: static constant of [<code>Created</code>](#Created)  
**Default**: <code>201</code>  
<a name="Created.message"></a>

### Created.message : <code>string</code>
**Kind**: static constant of [<code>Created</code>](#Created)  
**Default**: <code>&quot;&#x27;Created&#x27;&quot;</code>  
<a name="Accepted"></a>

## Accepted ⇐ <code>Success</code>
<p>HTTP/1.1 202 Accepted</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [Accepted](#Accepted) ⇐ <code>Success</code>
    * [.statusCode](#Accepted.statusCode) : <code>number</code>
    * [.message](#Accepted.message) : <code>string</code>
    * [.statusCode](#Accepted.statusCode) : <code>number</code>
    * [.message](#Accepted.message) : <code>string</code>

<a name="Accepted.statusCode"></a>

### Accepted.statusCode : <code>number</code>
**Kind**: static constant of [<code>Accepted</code>](#Accepted)  
**Default**: <code>202</code>  
<a name="Accepted.message"></a>

### Accepted.message : <code>string</code>
**Kind**: static constant of [<code>Accepted</code>](#Accepted)  
**Default**: <code>&quot;&#x27;Accepted&#x27;&quot;</code>  
<a name="Accepted.statusCode"></a>

### Accepted.statusCode : <code>number</code>
**Kind**: static constant of [<code>Accepted</code>](#Accepted)  
**Default**: <code>202</code>  
<a name="Accepted.message"></a>

### Accepted.message : <code>string</code>
**Kind**: static constant of [<code>Accepted</code>](#Accepted)  
**Default**: <code>&quot;&#x27;Accepted&#x27;&quot;</code>  
<a name="NoContent"></a>

## NoContent ⇐ <code>Success</code>
<p>HTTP/1.1 204 No content</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [NoContent](#NoContent) ⇐ <code>Success</code>
    * [.statusCode](#NoContent.statusCode) : <code>number</code>
    * [.message](#NoContent.message) : <code>string</code>
    * [.statusCode](#NoContent.statusCode) : <code>number</code>
    * [.message](#NoContent.message) : <code>string</code>

<a name="NoContent.statusCode"></a>

### NoContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>NoContent</code>](#NoContent)  
**Default**: <code>204</code>  
<a name="NoContent.message"></a>

### NoContent.message : <code>string</code>
**Kind**: static constant of [<code>NoContent</code>](#NoContent)  
**Default**: <code>&quot;&#x27;No Content&#x27;&quot;</code>  
<a name="NoContent.statusCode"></a>

### NoContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>NoContent</code>](#NoContent)  
**Default**: <code>204</code>  
<a name="NoContent.message"></a>

### NoContent.message : <code>string</code>
**Kind**: static constant of [<code>NoContent</code>](#NoContent)  
**Default**: <code>&quot;&#x27;No Content&#x27;&quot;</code>  
<a name="ResetContent"></a>

## ResetContent ⇐ <code>Success</code>
<p>HTTP/1.1 205 Reset content</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [ResetContent](#ResetContent) ⇐ <code>Success</code>
    * [.statusCode](#ResetContent.statusCode) : <code>number</code>
    * [.message](#ResetContent.message) : <code>string</code>
    * [.statusCode](#ResetContent.statusCode) : <code>number</code>
    * [.message](#ResetContent.message) : <code>string</code>

<a name="ResetContent.statusCode"></a>

### ResetContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>ResetContent</code>](#ResetContent)  
**Default**: <code>205</code>  
<a name="ResetContent.message"></a>

### ResetContent.message : <code>string</code>
**Kind**: static constant of [<code>ResetContent</code>](#ResetContent)  
**Default**: <code>&quot;&#x27;Reset Content&#x27;&quot;</code>  
<a name="ResetContent.statusCode"></a>

### ResetContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>ResetContent</code>](#ResetContent)  
**Default**: <code>205</code>  
<a name="ResetContent.message"></a>

### ResetContent.message : <code>string</code>
**Kind**: static constant of [<code>ResetContent</code>](#ResetContent)  
**Default**: <code>&quot;&#x27;Reset Content&#x27;&quot;</code>  
<a name="PartialContent"></a>

## PartialContent ⇐ <code>Success</code>
<p>HTTP/1.1 206 Partial content</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [PartialContent](#PartialContent) ⇐ <code>Success</code>
    * [.statusCode](#PartialContent.statusCode) : <code>number</code>
    * [.message](#PartialContent.message) : <code>string</code>
    * [.statusCode](#PartialContent.statusCode) : <code>number</code>
    * [.message](#PartialContent.message) : <code>string</code>

<a name="PartialContent.statusCode"></a>

### PartialContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>PartialContent</code>](#PartialContent)  
**Default**: <code>206</code>  
<a name="PartialContent.message"></a>

### PartialContent.message : <code>string</code>
**Kind**: static constant of [<code>PartialContent</code>](#PartialContent)  
**Default**: <code>&quot;&#x27;Partial content&#x27;&quot;</code>  
<a name="PartialContent.statusCode"></a>

### PartialContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>PartialContent</code>](#PartialContent)  
**Default**: <code>206</code>  
<a name="PartialContent.message"></a>

### PartialContent.message : <code>string</code>
**Kind**: static constant of [<code>PartialContent</code>](#PartialContent)  
**Default**: <code>&quot;&#x27;Partial content&#x27;&quot;</code>  
<a name="NotModified"></a>

## NotModified ⇐ [<code>Redirection</code>](#Redirection)
<p>HTTP/1.1 304 Not modified</p>

**Kind**: global class  
**Extends**: [<code>Redirection</code>](#Redirection)  

* [NotModified](#NotModified) ⇐ [<code>Redirection</code>](#Redirection)
    * _instance_
        * [.Redirection](#Redirection+Redirection)
            * [new exports.Redirection(message, data)](#new_NotModified+Redirection_new)
    * _static_
        * [.statusCode](#NotModified.statusCode) : <code>number</code>
        * [.message](#NotModified.message) : <code>string</code>
        * [.statusCode](#NotModified.statusCode) : <code>number</code>
        * [.message](#NotModified.message) : <code>string</code>

<a name="Redirection+Redirection"></a>

### notModified.Redirection
**Kind**: instance class of [<code>NotModified</code>](#NotModified)  
**Summary**: <p>Accept data argument that passes the required location information to the
HTTP request</p>.  
**Overrides**: [<code>Redirection</code>](#Redirection+Redirection)  
<a name="new_NotModified+Redirection_new"></a>

#### new exports.Redirection(message, data)
<p>Accept data argument that passes the required location information to the
HTTP request</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Error message</p> |
| data | <code>object</code> | <p>Extended data</p> |

<a name="NotModified.statusCode"></a>

### NotModified.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotModified</code>](#NotModified)  
**Default**: <code>304</code>  
<a name="NotModified.message"></a>

### NotModified.message : <code>string</code>
**Kind**: static constant of [<code>NotModified</code>](#NotModified)  
**Default**: <code>&quot;&#x27;NotModified&#x27;&quot;</code>  
<a name="NotModified.statusCode"></a>

### NotModified.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotModified</code>](#NotModified)  
**Default**: <code>304</code>  
<a name="NotModified.message"></a>

### NotModified.message : <code>string</code>
**Kind**: static constant of [<code>NotModified</code>](#NotModified)  
**Default**: <code>&quot;&#x27;NotModified&#x27;&quot;</code>  
<a name="BadRequest"></a>

## BadRequest ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 400 Bad request</p>

**Kind**: global class  
**Summary**: <p>Response for HTTP/1.1 400 Bad request</p>.  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [BadRequest](#BadRequest) ⇐ [<code>ClientError</code>](#ClientError)
    * [new BadRequest()](#new_BadRequest_new)
    * [new BadRequest()](#new_BadRequest_new)
    * [.statusCode](#BadRequest.statusCode) : <code>number</code>
    * [.message](#BadRequest.message) : <code>string</code>
    * [.statusCode](#BadRequest.statusCode) : <code>number</code>
    * [.message](#BadRequest.message) : <code>string</code>

<a name="new_BadRequest_new"></a>

### new BadRequest()
<p>Response for HTTP/1.1 400 Bad request</p>

<a name="new_BadRequest_new"></a>

### new BadRequest()
<p>Response for HTTP/1.1 400 Bad request</p>

<a name="BadRequest.statusCode"></a>

### BadRequest.statusCode : <code>number</code>
**Kind**: static constant of [<code>BadRequest</code>](#BadRequest)  
**Default**: <code>400</code>  
<a name="BadRequest.message"></a>

### BadRequest.message : <code>string</code>
**Kind**: static constant of [<code>BadRequest</code>](#BadRequest)  
**Default**: <code>&quot;&#x27;Bad Request&#x27;&quot;</code>  
<a name="BadRequest.statusCode"></a>

### BadRequest.statusCode : <code>number</code>
**Kind**: static constant of [<code>BadRequest</code>](#BadRequest)  
**Default**: <code>400</code>  
<a name="BadRequest.message"></a>

### BadRequest.message : <code>string</code>
**Kind**: static constant of [<code>BadRequest</code>](#BadRequest)  
**Default**: <code>&quot;&#x27;Bad Request&#x27;&quot;</code>  
<a name="Unauthorized"></a>

## Unauthorized ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 401 Unauthorized</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [Unauthorized](#Unauthorized) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#Unauthorized.statusCode) : <code>number</code>
    * [.message](#Unauthorized.message) : <code>string</code>
    * [.statusCode](#Unauthorized.statusCode) : <code>number</code>
    * [.message](#Unauthorized.message) : <code>string</code>

<a name="Unauthorized.statusCode"></a>

### Unauthorized.statusCode : <code>number</code>
**Kind**: static constant of [<code>Unauthorized</code>](#Unauthorized)  
**Default**: <code>401</code>  
<a name="Unauthorized.message"></a>

### Unauthorized.message : <code>string</code>
**Kind**: static constant of [<code>Unauthorized</code>](#Unauthorized)  
**Default**: <code>&quot;&#x27;Unauthorized&#x27;&quot;</code>  
<a name="Unauthorized.statusCode"></a>

### Unauthorized.statusCode : <code>number</code>
**Kind**: static constant of [<code>Unauthorized</code>](#Unauthorized)  
**Default**: <code>401</code>  
<a name="Unauthorized.message"></a>

### Unauthorized.message : <code>string</code>
**Kind**: static constant of [<code>Unauthorized</code>](#Unauthorized)  
**Default**: <code>&quot;&#x27;Unauthorized&#x27;&quot;</code>  
<a name="PaymentRequired"></a>

## PaymentRequired ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 402 Payment required</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [PaymentRequired](#PaymentRequired) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#PaymentRequired.statusCode) : <code>number</code>
    * [.message](#PaymentRequired.message) : <code>string</code>
    * [.statusCode](#PaymentRequired.statusCode) : <code>number</code>
    * [.message](#PaymentRequired.message) : <code>string</code>

<a name="PaymentRequired.statusCode"></a>

### PaymentRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>PaymentRequired</code>](#PaymentRequired)  
**Default**: <code>402</code>  
<a name="PaymentRequired.message"></a>

### PaymentRequired.message : <code>string</code>
**Kind**: static constant of [<code>PaymentRequired</code>](#PaymentRequired)  
**Default**: <code>&quot;&#x27;Payment Required&#x27;&quot;</code>  
<a name="PaymentRequired.statusCode"></a>

### PaymentRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>PaymentRequired</code>](#PaymentRequired)  
**Default**: <code>402</code>  
<a name="PaymentRequired.message"></a>

### PaymentRequired.message : <code>string</code>
**Kind**: static constant of [<code>PaymentRequired</code>](#PaymentRequired)  
**Default**: <code>&quot;&#x27;Payment Required&#x27;&quot;</code>  
<a name="Forbidden"></a>

## Forbidden ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 403 Forbidden</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [Forbidden](#Forbidden) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#Forbidden.statusCode) : <code>number</code>
    * [.message](#Forbidden.message) : <code>string</code>
    * [.statusCode](#Forbidden.statusCode) : <code>number</code>
    * [.message](#Forbidden.message) : <code>string</code>

<a name="Forbidden.statusCode"></a>

### Forbidden.statusCode : <code>number</code>
**Kind**: static constant of [<code>Forbidden</code>](#Forbidden)  
**Default**: <code>403</code>  
<a name="Forbidden.message"></a>

### Forbidden.message : <code>string</code>
**Kind**: static constant of [<code>Forbidden</code>](#Forbidden)  
**Default**: <code>&quot;&#x27;Forbidden&#x27;&quot;</code>  
<a name="Forbidden.statusCode"></a>

### Forbidden.statusCode : <code>number</code>
**Kind**: static constant of [<code>Forbidden</code>](#Forbidden)  
**Default**: <code>403</code>  
<a name="Forbidden.message"></a>

### Forbidden.message : <code>string</code>
**Kind**: static constant of [<code>Forbidden</code>](#Forbidden)  
**Default**: <code>&quot;&#x27;Forbidden&#x27;&quot;</code>  
<a name="NotFound"></a>

## NotFound ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 404 Not found</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [NotFound](#NotFound) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#NotFound.statusCode) : <code>number</code>
    * [.message](#NotFound.message) : <code>string</code>
    * [.statusCode](#NotFound.statusCode) : <code>number</code>
    * [.message](#NotFound.message) : <code>string</code>

<a name="NotFound.statusCode"></a>

### NotFound.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotFound</code>](#NotFound)  
**Default**: <code>404</code>  
<a name="NotFound.message"></a>

### NotFound.message : <code>string</code>
**Kind**: static constant of [<code>NotFound</code>](#NotFound)  
**Default**: <code>&quot;&#x27;Not Found&#x27;&quot;</code>  
<a name="NotFound.statusCode"></a>

### NotFound.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotFound</code>](#NotFound)  
**Default**: <code>404</code>  
<a name="NotFound.message"></a>

### NotFound.message : <code>string</code>
**Kind**: static constant of [<code>NotFound</code>](#NotFound)  
**Default**: <code>&quot;&#x27;Not Found&#x27;&quot;</code>  
<a name="MethodNotAllowed"></a>

## MethodNotAllowed ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 405 Method not allowed</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [MethodNotAllowed](#MethodNotAllowed) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#MethodNotAllowed.statusCode) : <code>number</code>
    * [.message](#MethodNotAllowed.message) : <code>string</code>
    * [.statusCode](#MethodNotAllowed.statusCode) : <code>number</code>
    * [.message](#MethodNotAllowed.message) : <code>string</code>

<a name="MethodNotAllowed.statusCode"></a>

### MethodNotAllowed.statusCode : <code>number</code>
**Kind**: static constant of [<code>MethodNotAllowed</code>](#MethodNotAllowed)  
**Default**: <code>405</code>  
<a name="MethodNotAllowed.message"></a>

### MethodNotAllowed.message : <code>string</code>
**Kind**: static constant of [<code>MethodNotAllowed</code>](#MethodNotAllowed)  
**Default**: <code>&quot;&#x27;Method not allowed&#x27;&quot;</code>  
<a name="MethodNotAllowed.statusCode"></a>

### MethodNotAllowed.statusCode : <code>number</code>
**Kind**: static constant of [<code>MethodNotAllowed</code>](#MethodNotAllowed)  
**Default**: <code>405</code>  
<a name="MethodNotAllowed.message"></a>

### MethodNotAllowed.message : <code>string</code>
**Kind**: static constant of [<code>MethodNotAllowed</code>](#MethodNotAllowed)  
**Default**: <code>&quot;&#x27;Method not allowed&#x27;&quot;</code>  
<a name="NotAcceptable"></a>

## NotAcceptable ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 406 Not acceptable</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [NotAcceptable](#NotAcceptable) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#NotAcceptable.statusCode) : <code>number</code>
    * [.message](#NotAcceptable.message) : <code>string</code>
    * [.statusCode](#NotAcceptable.statusCode) : <code>number</code>
    * [.message](#NotAcceptable.message) : <code>string</code>

<a name="NotAcceptable.statusCode"></a>

### NotAcceptable.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotAcceptable</code>](#NotAcceptable)  
**Default**: <code>406</code>  
<a name="NotAcceptable.message"></a>

### NotAcceptable.message : <code>string</code>
**Kind**: static constant of [<code>NotAcceptable</code>](#NotAcceptable)  
**Default**: <code>&quot;&#x27;Not Acceptable&#x27;&quot;</code>  
<a name="NotAcceptable.statusCode"></a>

### NotAcceptable.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotAcceptable</code>](#NotAcceptable)  
**Default**: <code>406</code>  
<a name="NotAcceptable.message"></a>

### NotAcceptable.message : <code>string</code>
**Kind**: static constant of [<code>NotAcceptable</code>](#NotAcceptable)  
**Default**: <code>&quot;&#x27;Not Acceptable&#x27;&quot;</code>  
<a name="ProxyAuthenticationRequired"></a>

## ProxyAuthenticationRequired ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 407 Proxy authentication required</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [ProxyAuthenticationRequired](#ProxyAuthenticationRequired) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#ProxyAuthenticationRequired.statusCode) : <code>number</code>
    * [.message](#ProxyAuthenticationRequired.message) : <code>string</code>
    * [.statusCode](#ProxyAuthenticationRequired.statusCode) : <code>number</code>
    * [.message](#ProxyAuthenticationRequired.message) : <code>string</code>

<a name="ProxyAuthenticationRequired.statusCode"></a>

### ProxyAuthenticationRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>ProxyAuthenticationRequired</code>](#ProxyAuthenticationRequired)  
**Default**: <code>407</code>  
<a name="ProxyAuthenticationRequired.message"></a>

### ProxyAuthenticationRequired.message : <code>string</code>
**Kind**: static constant of [<code>ProxyAuthenticationRequired</code>](#ProxyAuthenticationRequired)  
**Default**: <code>&quot;&#x27;Proxy Authentication Required&#x27;&quot;</code>  
<a name="ProxyAuthenticationRequired.statusCode"></a>

### ProxyAuthenticationRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>ProxyAuthenticationRequired</code>](#ProxyAuthenticationRequired)  
**Default**: <code>407</code>  
<a name="ProxyAuthenticationRequired.message"></a>

### ProxyAuthenticationRequired.message : <code>string</code>
**Kind**: static constant of [<code>ProxyAuthenticationRequired</code>](#ProxyAuthenticationRequired)  
**Default**: <code>&quot;&#x27;Proxy Authentication Required&#x27;&quot;</code>  
<a name="Conflict"></a>

## Conflict ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 409 Conflict</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [Conflict](#Conflict) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#Conflict.statusCode) : <code>number</code>
    * [.message](#Conflict.message) : <code>string</code>
    * [.statusCode](#Conflict.statusCode) : <code>number</code>
    * [.message](#Conflict.message) : <code>string</code>

<a name="Conflict.statusCode"></a>

### Conflict.statusCode : <code>number</code>
**Kind**: static constant of [<code>Conflict</code>](#Conflict)  
**Default**: <code>409</code>  
<a name="Conflict.message"></a>

### Conflict.message : <code>string</code>
**Kind**: static constant of [<code>Conflict</code>](#Conflict)  
**Default**: <code>&quot;&#x27;Conflict&#x27;&quot;</code>  
<a name="Conflict.statusCode"></a>

### Conflict.statusCode : <code>number</code>
**Kind**: static constant of [<code>Conflict</code>](#Conflict)  
**Default**: <code>409</code>  
<a name="Conflict.message"></a>

### Conflict.message : <code>string</code>
**Kind**: static constant of [<code>Conflict</code>](#Conflict)  
**Default**: <code>&quot;&#x27;Conflict&#x27;&quot;</code>  
<a name="Gone"></a>

## Gone ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 410 Gone</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [Gone](#Gone) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#Gone.statusCode) : <code>number</code>
    * [.message](#Gone.message) : <code>string</code>
    * [.statusCode](#Gone.statusCode) : <code>number</code>
    * [.message](#Gone.message) : <code>string</code>

<a name="Gone.statusCode"></a>

### Gone.statusCode : <code>number</code>
**Kind**: static constant of [<code>Gone</code>](#Gone)  
**Default**: <code>410</code>  
<a name="Gone.message"></a>

### Gone.message : <code>string</code>
**Kind**: static constant of [<code>Gone</code>](#Gone)  
**Default**: <code>&quot;&#x27;Gone&#x27;&quot;</code>  
<a name="Gone.statusCode"></a>

### Gone.statusCode : <code>number</code>
**Kind**: static constant of [<code>Gone</code>](#Gone)  
**Default**: <code>410</code>  
<a name="Gone.message"></a>

### Gone.message : <code>string</code>
**Kind**: static constant of [<code>Gone</code>](#Gone)  
**Default**: <code>&quot;&#x27;Gone&#x27;&quot;</code>  
<a name="LengthRequired"></a>

## LengthRequired ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 411 Length required</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [LengthRequired](#LengthRequired) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#LengthRequired.statusCode) : <code>number</code>
    * [.message](#LengthRequired.message) : <code>string</code>
    * [.statusCode](#LengthRequired.statusCode) : <code>number</code>
    * [.message](#LengthRequired.message) : <code>string</code>

<a name="LengthRequired.statusCode"></a>

### LengthRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>LengthRequired</code>](#LengthRequired)  
**Default**: <code>411</code>  
<a name="LengthRequired.message"></a>

### LengthRequired.message : <code>string</code>
**Kind**: static constant of [<code>LengthRequired</code>](#LengthRequired)  
**Default**: <code>&quot;&#x27;Length Required&#x27;&quot;</code>  
<a name="LengthRequired.statusCode"></a>

### LengthRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>LengthRequired</code>](#LengthRequired)  
**Default**: <code>411</code>  
<a name="LengthRequired.message"></a>

### LengthRequired.message : <code>string</code>
**Kind**: static constant of [<code>LengthRequired</code>](#LengthRequired)  
**Default**: <code>&quot;&#x27;Length Required&#x27;&quot;</code>  
<a name="PreconditionFailed"></a>

## PreconditionFailed ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 412 Precondition failed</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [PreconditionFailed](#PreconditionFailed) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#PreconditionFailed.statusCode) : <code>number</code>
    * [.message](#PreconditionFailed.message) : <code>string</code>
    * [.message](#PreconditionFailed.message) : <code>string</code>
    * [.statusCode](#PreconditionFailed.statusCode) : <code>number</code>
    * [.message](#PreconditionFailed.message) : <code>string</code>
    * [.message](#PreconditionFailed.message) : <code>string</code>

<a name="PreconditionFailed.statusCode"></a>

### PreconditionFailed.statusCode : <code>number</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>412</code>  
<a name="PreconditionFailed.message"></a>

### PreconditionFailed.message : <code>string</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>&quot;&#x27;Precondition Failed&#x27;&quot;</code>  
<a name="PreconditionFailed.message"></a>

### PreconditionFailed.message : <code>string</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>&quot;&#x27;Precondition Required&#x27;&quot;</code>  
<a name="PreconditionFailed.statusCode"></a>

### PreconditionFailed.statusCode : <code>number</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>412</code>  
<a name="PreconditionFailed.message"></a>

### PreconditionFailed.message : <code>string</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>&quot;&#x27;Precondition Failed&#x27;&quot;</code>  
<a name="PreconditionFailed.message"></a>

### PreconditionFailed.message : <code>string</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>&quot;&#x27;Precondition Required&#x27;&quot;</code>  
<a name="PayloadTooLarge"></a>

## PayloadTooLarge ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 413 Payload too large</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [PayloadTooLarge](#PayloadTooLarge) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#PayloadTooLarge.statusCode) : <code>number</code>
    * [.message](#PayloadTooLarge.message) : <code>string</code>
    * [.statusCode](#PayloadTooLarge.statusCode) : <code>number</code>
    * [.message](#PayloadTooLarge.message) : <code>string</code>

<a name="PayloadTooLarge.statusCode"></a>

### PayloadTooLarge.statusCode : <code>number</code>
**Kind**: static constant of [<code>PayloadTooLarge</code>](#PayloadTooLarge)  
**Default**: <code>413</code>  
<a name="PayloadTooLarge.message"></a>

### PayloadTooLarge.message : <code>string</code>
**Kind**: static constant of [<code>PayloadTooLarge</code>](#PayloadTooLarge)  
**Default**: <code>&quot;&#x27;Payload Too Large&#x27;&quot;</code>  
<a name="PayloadTooLarge.statusCode"></a>

### PayloadTooLarge.statusCode : <code>number</code>
**Kind**: static constant of [<code>PayloadTooLarge</code>](#PayloadTooLarge)  
**Default**: <code>413</code>  
<a name="PayloadTooLarge.message"></a>

### PayloadTooLarge.message : <code>string</code>
**Kind**: static constant of [<code>PayloadTooLarge</code>](#PayloadTooLarge)  
**Default**: <code>&quot;&#x27;Payload Too Large&#x27;&quot;</code>  
<a name="URITooLong"></a>

## URITooLong ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 414 URI too long</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [URITooLong](#URITooLong) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#URITooLong.statusCode) : <code>number</code>
    * [.message](#URITooLong.message) : <code>string</code>
    * [.statusCode](#URITooLong.statusCode) : <code>number</code>
    * [.message](#URITooLong.message) : <code>string</code>

<a name="URITooLong.statusCode"></a>

### URITooLong.statusCode : <code>number</code>
**Kind**: static constant of [<code>URITooLong</code>](#URITooLong)  
**Default**: <code>414</code>  
<a name="URITooLong.message"></a>

### URITooLong.message : <code>string</code>
**Kind**: static constant of [<code>URITooLong</code>](#URITooLong)  
**Default**: <code>&quot;&#x27;URI Too Long&#x27;&quot;</code>  
<a name="URITooLong.statusCode"></a>

### URITooLong.statusCode : <code>number</code>
**Kind**: static constant of [<code>URITooLong</code>](#URITooLong)  
**Default**: <code>414</code>  
<a name="URITooLong.message"></a>

### URITooLong.message : <code>string</code>
**Kind**: static constant of [<code>URITooLong</code>](#URITooLong)  
**Default**: <code>&quot;&#x27;URI Too Long&#x27;&quot;</code>  
<a name="UnsupportedMediaType"></a>

## UnsupportedMediaType ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 415 Unsupported media type</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [UnsupportedMediaType](#UnsupportedMediaType) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#UnsupportedMediaType.statusCode) : <code>number</code>
    * [.message](#UnsupportedMediaType.message) : <code>string</code>
    * [.statusCode](#UnsupportedMediaType.statusCode) : <code>number</code>
    * [.message](#UnsupportedMediaType.message) : <code>string</code>

<a name="UnsupportedMediaType.statusCode"></a>

### UnsupportedMediaType.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnsupportedMediaType</code>](#UnsupportedMediaType)  
**Default**: <code>415</code>  
<a name="UnsupportedMediaType.message"></a>

### UnsupportedMediaType.message : <code>string</code>
**Kind**: static constant of [<code>UnsupportedMediaType</code>](#UnsupportedMediaType)  
**Default**: <code>&quot;&#x27;Unsupported Media Type&#x27;&quot;</code>  
<a name="UnsupportedMediaType.statusCode"></a>

### UnsupportedMediaType.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnsupportedMediaType</code>](#UnsupportedMediaType)  
**Default**: <code>415</code>  
<a name="UnsupportedMediaType.message"></a>

### UnsupportedMediaType.message : <code>string</code>
**Kind**: static constant of [<code>UnsupportedMediaType</code>](#UnsupportedMediaType)  
**Default**: <code>&quot;&#x27;Unsupported Media Type&#x27;&quot;</code>  
<a name="RangeNotSatisfiable"></a>

## RangeNotSatisfiable ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 416 Range not satisfiable</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [RangeNotSatisfiable](#RangeNotSatisfiable) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#RangeNotSatisfiable.statusCode) : <code>number</code>
    * [.message](#RangeNotSatisfiable.message) : <code>string</code>
    * [.statusCode](#RangeNotSatisfiable.statusCode) : <code>number</code>
    * [.message](#RangeNotSatisfiable.message) : <code>string</code>

<a name="RangeNotSatisfiable.statusCode"></a>

### RangeNotSatisfiable.statusCode : <code>number</code>
**Kind**: static constant of [<code>RangeNotSatisfiable</code>](#RangeNotSatisfiable)  
**Default**: <code>416</code>  
<a name="RangeNotSatisfiable.message"></a>

### RangeNotSatisfiable.message : <code>string</code>
**Kind**: static constant of [<code>RangeNotSatisfiable</code>](#RangeNotSatisfiable)  
**Default**: <code>&quot;&#x27;Range Not Satisfiable&#x27;&quot;</code>  
<a name="RangeNotSatisfiable.statusCode"></a>

### RangeNotSatisfiable.statusCode : <code>number</code>
**Kind**: static constant of [<code>RangeNotSatisfiable</code>](#RangeNotSatisfiable)  
**Default**: <code>416</code>  
<a name="RangeNotSatisfiable.message"></a>

### RangeNotSatisfiable.message : <code>string</code>
**Kind**: static constant of [<code>RangeNotSatisfiable</code>](#RangeNotSatisfiable)  
**Default**: <code>&quot;&#x27;Range Not Satisfiable&#x27;&quot;</code>  
<a name="ExpectationFailed"></a>

## ExpectationFailed ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 417 Expectation failed</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [ExpectationFailed](#ExpectationFailed) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#ExpectationFailed.statusCode) : <code>number</code>
    * [.message](#ExpectationFailed.message) : <code>string</code>
    * [.statusCode](#ExpectationFailed.statusCode) : <code>number</code>
    * [.message](#ExpectationFailed.message) : <code>string</code>

<a name="ExpectationFailed.statusCode"></a>

### ExpectationFailed.statusCode : <code>number</code>
**Kind**: static constant of [<code>ExpectationFailed</code>](#ExpectationFailed)  
**Default**: <code>417</code>  
<a name="ExpectationFailed.message"></a>

### ExpectationFailed.message : <code>string</code>
**Kind**: static constant of [<code>ExpectationFailed</code>](#ExpectationFailed)  
**Default**: <code>&quot;&#x27;Expectation Failed&#x27;&quot;</code>  
<a name="ExpectationFailed.statusCode"></a>

### ExpectationFailed.statusCode : <code>number</code>
**Kind**: static constant of [<code>ExpectationFailed</code>](#ExpectationFailed)  
**Default**: <code>417</code>  
<a name="ExpectationFailed.message"></a>

### ExpectationFailed.message : <code>string</code>
**Kind**: static constant of [<code>ExpectationFailed</code>](#ExpectationFailed)  
**Default**: <code>&quot;&#x27;Expectation Failed&#x27;&quot;</code>  
<a name="MisdirectedRequest"></a>

## MisdirectedRequest ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 421 Misdirected request</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [MisdirectedRequest](#MisdirectedRequest) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#MisdirectedRequest.statusCode) : <code>number</code>
    * [.message](#MisdirectedRequest.message) : <code>string</code>
    * [.statusCode](#MisdirectedRequest.statusCode) : <code>number</code>
    * [.message](#MisdirectedRequest.message) : <code>string</code>

<a name="MisdirectedRequest.statusCode"></a>

### MisdirectedRequest.statusCode : <code>number</code>
**Kind**: static constant of [<code>MisdirectedRequest</code>](#MisdirectedRequest)  
**Default**: <code>421</code>  
<a name="MisdirectedRequest.message"></a>

### MisdirectedRequest.message : <code>string</code>
**Kind**: static constant of [<code>MisdirectedRequest</code>](#MisdirectedRequest)  
**Default**: <code>&quot;&#x27;Misdirected Request&#x27;&quot;</code>  
<a name="MisdirectedRequest.statusCode"></a>

### MisdirectedRequest.statusCode : <code>number</code>
**Kind**: static constant of [<code>MisdirectedRequest</code>](#MisdirectedRequest)  
**Default**: <code>421</code>  
<a name="MisdirectedRequest.message"></a>

### MisdirectedRequest.message : <code>string</code>
**Kind**: static constant of [<code>MisdirectedRequest</code>](#MisdirectedRequest)  
**Default**: <code>&quot;&#x27;Misdirected Request&#x27;&quot;</code>  
<a name="UnprocessableEntity"></a>

## UnprocessableEntity ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 422 Unprocessable entity</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [UnprocessableEntity](#UnprocessableEntity) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#UnprocessableEntity.statusCode) : <code>number</code>
    * [.message](#UnprocessableEntity.message) : <code>string</code>
    * [.statusCode](#UnprocessableEntity.statusCode) : <code>number</code>
    * [.message](#UnprocessableEntity.message) : <code>string</code>

<a name="UnprocessableEntity.statusCode"></a>

### UnprocessableEntity.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnprocessableEntity</code>](#UnprocessableEntity)  
**Default**: <code>422</code>  
<a name="UnprocessableEntity.message"></a>

### UnprocessableEntity.message : <code>string</code>
**Kind**: static constant of [<code>UnprocessableEntity</code>](#UnprocessableEntity)  
**Default**: <code>&quot;&#x27;Unprocessable Entity&#x27;&quot;</code>  
<a name="UnprocessableEntity.statusCode"></a>

### UnprocessableEntity.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnprocessableEntity</code>](#UnprocessableEntity)  
**Default**: <code>422</code>  
<a name="UnprocessableEntity.message"></a>

### UnprocessableEntity.message : <code>string</code>
**Kind**: static constant of [<code>UnprocessableEntity</code>](#UnprocessableEntity)  
**Default**: <code>&quot;&#x27;Unprocessable Entity&#x27;&quot;</code>  
<a name="Locked"></a>

## Locked ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 423 Locked</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [Locked](#Locked) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#Locked.statusCode) : <code>number</code>
    * [.message](#Locked.message) : <code>string</code>
    * [.statusCode](#Locked.statusCode) : <code>number</code>
    * [.message](#Locked.message) : <code>string</code>

<a name="Locked.statusCode"></a>

### Locked.statusCode : <code>number</code>
**Kind**: static constant of [<code>Locked</code>](#Locked)  
**Default**: <code>423</code>  
<a name="Locked.message"></a>

### Locked.message : <code>string</code>
**Kind**: static constant of [<code>Locked</code>](#Locked)  
**Default**: <code>&quot;&#x27;Locked&#x27;&quot;</code>  
<a name="Locked.statusCode"></a>

### Locked.statusCode : <code>number</code>
**Kind**: static constant of [<code>Locked</code>](#Locked)  
**Default**: <code>423</code>  
<a name="Locked.message"></a>

### Locked.message : <code>string</code>
**Kind**: static constant of [<code>Locked</code>](#Locked)  
**Default**: <code>&quot;&#x27;Locked&#x27;&quot;</code>  
<a name="FailedDependency"></a>

## FailedDependency ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 424 Failed dependency</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [FailedDependency](#FailedDependency) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#FailedDependency.statusCode) : <code>number</code>
    * [.message](#FailedDependency.message) : <code>string</code>
    * [.statusCode](#FailedDependency.statusCode) : <code>number</code>
    * [.message](#FailedDependency.message) : <code>string</code>

<a name="FailedDependency.statusCode"></a>

### FailedDependency.statusCode : <code>number</code>
**Kind**: static constant of [<code>FailedDependency</code>](#FailedDependency)  
**Default**: <code>424</code>  
<a name="FailedDependency.message"></a>

### FailedDependency.message : <code>string</code>
**Kind**: static constant of [<code>FailedDependency</code>](#FailedDependency)  
**Default**: <code>&quot;&#x27;Failed Dependency&#x27;&quot;</code>  
<a name="FailedDependency.statusCode"></a>

### FailedDependency.statusCode : <code>number</code>
**Kind**: static constant of [<code>FailedDependency</code>](#FailedDependency)  
**Default**: <code>424</code>  
<a name="FailedDependency.message"></a>

### FailedDependency.message : <code>string</code>
**Kind**: static constant of [<code>FailedDependency</code>](#FailedDependency)  
**Default**: <code>&quot;&#x27;Failed Dependency&#x27;&quot;</code>  
<a name="UpgradeRequired"></a>

## UpgradeRequired ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 426 Upgrade required</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [UpgradeRequired](#UpgradeRequired) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#UpgradeRequired.statusCode) : <code>number</code>
    * [.message](#UpgradeRequired.message) : <code>string</code>
    * [.statusCode](#UpgradeRequired.statusCode) : <code>number</code>
    * [.message](#UpgradeRequired.message) : <code>string</code>

<a name="UpgradeRequired.statusCode"></a>

### UpgradeRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>UpgradeRequired</code>](#UpgradeRequired)  
**Default**: <code>426</code>  
<a name="UpgradeRequired.message"></a>

### UpgradeRequired.message : <code>string</code>
**Kind**: static constant of [<code>UpgradeRequired</code>](#UpgradeRequired)  
**Default**: <code>&quot;&#x27;Upgrade Required&#x27;&quot;</code>  
<a name="UpgradeRequired.statusCode"></a>

### UpgradeRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>UpgradeRequired</code>](#UpgradeRequired)  
**Default**: <code>426</code>  
<a name="UpgradeRequired.message"></a>

### UpgradeRequired.message : <code>string</code>
**Kind**: static constant of [<code>UpgradeRequired</code>](#UpgradeRequired)  
**Default**: <code>&quot;&#x27;Upgrade Required&#x27;&quot;</code>  
<a name="PreconditionRequired"></a>

## PreconditionRequired ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 428 Precondition failed</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [PreconditionRequired](#PreconditionRequired) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#PreconditionRequired.statusCode) : <code>number</code>
    * [.statusCode](#PreconditionRequired.statusCode) : <code>number</code>

<a name="PreconditionRequired.statusCode"></a>

### PreconditionRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>PreconditionRequired</code>](#PreconditionRequired)  
**Default**: <code>428</code>  
<a name="PreconditionRequired.statusCode"></a>

### PreconditionRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>PreconditionRequired</code>](#PreconditionRequired)  
**Default**: <code>428</code>  
<a name="TooManyRequests"></a>

## TooManyRequests ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 429 Too many requests</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [TooManyRequests](#TooManyRequests) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#TooManyRequests.statusCode) : <code>number</code>
    * [.message](#TooManyRequests.message) : <code>string</code>
    * [.statusCode](#TooManyRequests.statusCode) : <code>number</code>
    * [.message](#TooManyRequests.message) : <code>string</code>

<a name="TooManyRequests.statusCode"></a>

### TooManyRequests.statusCode : <code>number</code>
**Kind**: static constant of [<code>TooManyRequests</code>](#TooManyRequests)  
**Default**: <code>429</code>  
<a name="TooManyRequests.message"></a>

### TooManyRequests.message : <code>string</code>
**Kind**: static constant of [<code>TooManyRequests</code>](#TooManyRequests)  
**Default**: <code>&quot;&#x27;Too Many Requests&#x27;&quot;</code>  
<a name="TooManyRequests.statusCode"></a>

### TooManyRequests.statusCode : <code>number</code>
**Kind**: static constant of [<code>TooManyRequests</code>](#TooManyRequests)  
**Default**: <code>429</code>  
<a name="TooManyRequests.message"></a>

### TooManyRequests.message : <code>string</code>
**Kind**: static constant of [<code>TooManyRequests</code>](#TooManyRequests)  
**Default**: <code>&quot;&#x27;Too Many Requests&#x27;&quot;</code>  
<a name="RequestHeaderFieldsTooLarge"></a>

## RequestHeaderFieldsTooLarge ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 432 Request header fields too large</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [RequestHeaderFieldsTooLarge](#RequestHeaderFieldsTooLarge) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#RequestHeaderFieldsTooLarge.statusCode) : <code>number</code>
    * [.message](#RequestHeaderFieldsTooLarge.message) : <code>string</code>
    * [.statusCode](#RequestHeaderFieldsTooLarge.statusCode) : <code>number</code>
    * [.message](#RequestHeaderFieldsTooLarge.message) : <code>string</code>

<a name="RequestHeaderFieldsTooLarge.statusCode"></a>

### RequestHeaderFieldsTooLarge.statusCode : <code>number</code>
**Kind**: static constant of [<code>RequestHeaderFieldsTooLarge</code>](#RequestHeaderFieldsTooLarge)  
**Default**: <code>431</code>  
<a name="RequestHeaderFieldsTooLarge.message"></a>

### RequestHeaderFieldsTooLarge.message : <code>string</code>
**Kind**: static constant of [<code>RequestHeaderFieldsTooLarge</code>](#RequestHeaderFieldsTooLarge)  
**Default**: <code>&quot;&#x27;Request Header Fields Too Large&#x27;&quot;</code>  
<a name="RequestHeaderFieldsTooLarge.statusCode"></a>

### RequestHeaderFieldsTooLarge.statusCode : <code>number</code>
**Kind**: static constant of [<code>RequestHeaderFieldsTooLarge</code>](#RequestHeaderFieldsTooLarge)  
**Default**: <code>431</code>  
<a name="RequestHeaderFieldsTooLarge.message"></a>

### RequestHeaderFieldsTooLarge.message : <code>string</code>
**Kind**: static constant of [<code>RequestHeaderFieldsTooLarge</code>](#RequestHeaderFieldsTooLarge)  
**Default**: <code>&quot;&#x27;Request Header Fields Too Large&#x27;&quot;</code>  
<a name="UnavailableForLegalReasons"></a>

## UnavailableForLegalReasons ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 451 Unavailable for legal reasons</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [UnavailableForLegalReasons](#UnavailableForLegalReasons) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#UnavailableForLegalReasons.statusCode) : <code>number</code>
    * [.message](#UnavailableForLegalReasons.message) : <code>string</code>
    * [.statusCode](#UnavailableForLegalReasons.statusCode) : <code>number</code>
    * [.message](#UnavailableForLegalReasons.message) : <code>string</code>

<a name="UnavailableForLegalReasons.statusCode"></a>

### UnavailableForLegalReasons.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnavailableForLegalReasons</code>](#UnavailableForLegalReasons)  
**Default**: <code>451</code>  
<a name="UnavailableForLegalReasons.message"></a>

### UnavailableForLegalReasons.message : <code>string</code>
**Kind**: static constant of [<code>UnavailableForLegalReasons</code>](#UnavailableForLegalReasons)  
**Default**: <code>&quot;&#x27;Unavailable For Legal Reasons&#x27;&quot;</code>  
<a name="UnavailableForLegalReasons.statusCode"></a>

### UnavailableForLegalReasons.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnavailableForLegalReasons</code>](#UnavailableForLegalReasons)  
**Default**: <code>451</code>  
<a name="UnavailableForLegalReasons.message"></a>

### UnavailableForLegalReasons.message : <code>string</code>
**Kind**: static constant of [<code>UnavailableForLegalReasons</code>](#UnavailableForLegalReasons)  
**Default**: <code>&quot;&#x27;Unavailable For Legal Reasons&#x27;&quot;</code>  
<a name="InternalServerError"></a>

## InternalServerError ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 500 Internal server error</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [InternalServerError](#InternalServerError) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#InternalServerError.statusCode) : <code>number</code>
    * [.message](#InternalServerError.message) : <code>string</code>
    * [.statusCode](#InternalServerError.statusCode) : <code>number</code>
    * [.message](#InternalServerError.message) : <code>string</code>

<a name="InternalServerError.statusCode"></a>

### InternalServerError.statusCode : <code>number</code>
**Kind**: static constant of [<code>InternalServerError</code>](#InternalServerError)  
**Default**: <code>500</code>  
<a name="InternalServerError.message"></a>

### InternalServerError.message : <code>string</code>
**Kind**: static constant of [<code>InternalServerError</code>](#InternalServerError)  
**Default**: <code>&quot;&#x27;Internal Server Error&#x27;&quot;</code>  
<a name="InternalServerError.statusCode"></a>

### InternalServerError.statusCode : <code>number</code>
**Kind**: static constant of [<code>InternalServerError</code>](#InternalServerError)  
**Default**: <code>500</code>  
<a name="InternalServerError.message"></a>

### InternalServerError.message : <code>string</code>
**Kind**: static constant of [<code>InternalServerError</code>](#InternalServerError)  
**Default**: <code>&quot;&#x27;Internal Server Error&#x27;&quot;</code>  
<a name="NotImplemented"></a>

## NotImplemented ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 501 Not implemented</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [NotImplemented](#NotImplemented) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#NotImplemented.statusCode) : <code>number</code>
    * [.message](#NotImplemented.message) : <code>string</code>
    * [.statusCode](#NotImplemented.statusCode) : <code>number</code>
    * [.message](#NotImplemented.message) : <code>string</code>

<a name="NotImplemented.statusCode"></a>

### NotImplemented.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotImplemented</code>](#NotImplemented)  
**Default**: <code>501</code>  
<a name="NotImplemented.message"></a>

### NotImplemented.message : <code>string</code>
**Kind**: static constant of [<code>NotImplemented</code>](#NotImplemented)  
**Default**: <code>&quot;&#x27;Not Implemented&#x27;&quot;</code>  
<a name="NotImplemented.statusCode"></a>

### NotImplemented.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotImplemented</code>](#NotImplemented)  
**Default**: <code>501</code>  
<a name="NotImplemented.message"></a>

### NotImplemented.message : <code>string</code>
**Kind**: static constant of [<code>NotImplemented</code>](#NotImplemented)  
**Default**: <code>&quot;&#x27;Not Implemented&#x27;&quot;</code>  
<a name="BadGateway"></a>

## BadGateway ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 502 Bad gateway</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [BadGateway](#BadGateway) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#BadGateway.statusCode) : <code>number</code>
    * [.message](#BadGateway.message) : <code>string</code>
    * [.statusCode](#BadGateway.statusCode) : <code>number</code>
    * [.message](#BadGateway.message) : <code>string</code>

<a name="BadGateway.statusCode"></a>

### BadGateway.statusCode : <code>number</code>
**Kind**: static constant of [<code>BadGateway</code>](#BadGateway)  
**Default**: <code>502</code>  
<a name="BadGateway.message"></a>

### BadGateway.message : <code>string</code>
**Kind**: static constant of [<code>BadGateway</code>](#BadGateway)  
**Default**: <code>&quot;&#x27;Bad Gateway&#x27;&quot;</code>  
<a name="BadGateway.statusCode"></a>

### BadGateway.statusCode : <code>number</code>
**Kind**: static constant of [<code>BadGateway</code>](#BadGateway)  
**Default**: <code>502</code>  
<a name="BadGateway.message"></a>

### BadGateway.message : <code>string</code>
**Kind**: static constant of [<code>BadGateway</code>](#BadGateway)  
**Default**: <code>&quot;&#x27;Bad Gateway&#x27;&quot;</code>  
<a name="ServiceUnavailable"></a>

## ServiceUnavailable ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 503 Service unavailable</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [ServiceUnavailable](#ServiceUnavailable) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#ServiceUnavailable.statusCode) : <code>number</code>
    * [.message](#ServiceUnavailable.message) : <code>string</code>
    * [.statusCode](#ServiceUnavailable.statusCode) : <code>number</code>
    * [.message](#ServiceUnavailable.message) : <code>string</code>

<a name="ServiceUnavailable.statusCode"></a>

### ServiceUnavailable.statusCode : <code>number</code>
**Kind**: static constant of [<code>ServiceUnavailable</code>](#ServiceUnavailable)  
**Default**: <code>503</code>  
<a name="ServiceUnavailable.message"></a>

### ServiceUnavailable.message : <code>string</code>
**Kind**: static constant of [<code>ServiceUnavailable</code>](#ServiceUnavailable)  
**Default**: <code>&quot;&#x27;Service Unavailable&#x27;&quot;</code>  
<a name="ServiceUnavailable.statusCode"></a>

### ServiceUnavailable.statusCode : <code>number</code>
**Kind**: static constant of [<code>ServiceUnavailable</code>](#ServiceUnavailable)  
**Default**: <code>503</code>  
<a name="ServiceUnavailable.message"></a>

### ServiceUnavailable.message : <code>string</code>
**Kind**: static constant of [<code>ServiceUnavailable</code>](#ServiceUnavailable)  
**Default**: <code>&quot;&#x27;Service Unavailable&#x27;&quot;</code>  
<a name="GatewayTimeout"></a>

## GatewayTimeout ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 504 Gateway timeout</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [GatewayTimeout](#GatewayTimeout) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#GatewayTimeout.statusCode) : <code>number</code>
    * [.message](#GatewayTimeout.message) : <code>string</code>
    * [.statusCode](#GatewayTimeout.statusCode) : <code>number</code>
    * [.message](#GatewayTimeout.message) : <code>string</code>

<a name="GatewayTimeout.statusCode"></a>

### GatewayTimeout.statusCode : <code>number</code>
**Kind**: static constant of [<code>GatewayTimeout</code>](#GatewayTimeout)  
**Default**: <code>504</code>  
<a name="GatewayTimeout.message"></a>

### GatewayTimeout.message : <code>string</code>
**Kind**: static constant of [<code>GatewayTimeout</code>](#GatewayTimeout)  
**Default**: <code>&quot;&#x27;Gateway Timeout&#x27;&quot;</code>  
<a name="GatewayTimeout.statusCode"></a>

### GatewayTimeout.statusCode : <code>number</code>
**Kind**: static constant of [<code>GatewayTimeout</code>](#GatewayTimeout)  
**Default**: <code>504</code>  
<a name="GatewayTimeout.message"></a>

### GatewayTimeout.message : <code>string</code>
**Kind**: static constant of [<code>GatewayTimeout</code>](#GatewayTimeout)  
**Default**: <code>&quot;&#x27;Gateway Timeout&#x27;&quot;</code>  
<a name="HTTPVersionNotSupported"></a>

## HTTPVersionNotSupported ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 505 HTTP version not supported</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [HTTPVersionNotSupported](#HTTPVersionNotSupported) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#HTTPVersionNotSupported.statusCode) : <code>number</code>
    * [.message](#HTTPVersionNotSupported.message) : <code>string</code>
    * [.statusCode](#HTTPVersionNotSupported.statusCode) : <code>number</code>
    * [.message](#HTTPVersionNotSupported.message) : <code>string</code>

<a name="HTTPVersionNotSupported.statusCode"></a>

### HTTPVersionNotSupported.statusCode : <code>number</code>
**Kind**: static constant of [<code>HTTPVersionNotSupported</code>](#HTTPVersionNotSupported)  
**Default**: <code>505</code>  
<a name="HTTPVersionNotSupported.message"></a>

### HTTPVersionNotSupported.message : <code>string</code>
**Kind**: static constant of [<code>HTTPVersionNotSupported</code>](#HTTPVersionNotSupported)  
**Default**: <code>&quot;&#x27;HTTP Version Not Supported&#x27;&quot;</code>  
<a name="HTTPVersionNotSupported.statusCode"></a>

### HTTPVersionNotSupported.statusCode : <code>number</code>
**Kind**: static constant of [<code>HTTPVersionNotSupported</code>](#HTTPVersionNotSupported)  
**Default**: <code>505</code>  
<a name="HTTPVersionNotSupported.message"></a>

### HTTPVersionNotSupported.message : <code>string</code>
**Kind**: static constant of [<code>HTTPVersionNotSupported</code>](#HTTPVersionNotSupported)  
**Default**: <code>&quot;&#x27;HTTP Version Not Supported&#x27;&quot;</code>  
<a name="NetworkReadTimeout"></a>

## NetworkReadTimeout ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 508 Network read timeout</p>

**Kind**: global class  
**Summary**: <p>Response for HTTP/1.1 508 Network read timeout</p>.  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [NetworkReadTimeout](#NetworkReadTimeout) ⇐ [<code>ServerError</code>](#ServerError)
    * [new exports.NetworkReadTimeout()](#new_NetworkReadTimeout_new)
    * [new exports.NetworkReadTimeout()](#new_NetworkReadTimeout_new)
    * [.statusCode](#NetworkReadTimeout.statusCode) : <code>number</code>
    * [.message](#NetworkReadTimeout.message) : <code>string</code>
    * [.statusCode](#NetworkReadTimeout.statusCode) : <code>number</code>
    * [.message](#NetworkReadTimeout.message) : <code>string</code>

<a name="new_NetworkReadTimeout_new"></a>

### new exports.NetworkReadTimeout()
<p>Response for HTTP/1.1 508 Network read timeout</p>

<a name="new_NetworkReadTimeout_new"></a>

### new exports.NetworkReadTimeout()
<p>Response for HTTP/1.1 508 Network read timeout</p>

<a name="NetworkReadTimeout.statusCode"></a>

### NetworkReadTimeout.statusCode : <code>number</code>
**Kind**: static constant of [<code>NetworkReadTimeout</code>](#NetworkReadTimeout)  
**Default**: <code>508</code>  
<a name="NetworkReadTimeout.message"></a>

### NetworkReadTimeout.message : <code>string</code>
**Kind**: static constant of [<code>NetworkReadTimeout</code>](#NetworkReadTimeout)  
**Default**: <code>&quot;&#x27;Network read timeout error&#x27;&quot;</code>  
<a name="NetworkReadTimeout.statusCode"></a>

### NetworkReadTimeout.statusCode : <code>number</code>
**Kind**: static constant of [<code>NetworkReadTimeout</code>](#NetworkReadTimeout)  
**Default**: <code>508</code>  
<a name="NetworkReadTimeout.message"></a>

### NetworkReadTimeout.message : <code>string</code>
**Kind**: static constant of [<code>NetworkReadTimeout</code>](#NetworkReadTimeout)  
**Default**: <code>&quot;&#x27;Network read timeout error&#x27;&quot;</code>  
<a name="Cancel"></a>

## Cancel
<p>Cancel an interaction error</p>

**Kind**: global class  
**Summary**: <p>Cancel an interaction</p>.  

* [Cancel](#Cancel)
    * [new exports.Cancel()](#new_Cancel_new)
    * [new exports.Cancel()](#new_Cancel_new)

<a name="new_Cancel_new"></a>

### new exports.Cancel()
<p>Cancel an interaction</p>

<a name="new_Cancel_new"></a>

### new exports.Cancel()
<p>Cancel an interaction</p>

<a name="HTTPError"></a>

## HTTPError
<p>HTTP error baseclass</p>

**Kind**: global class  
**Summary**: <p>HTTP error</p>.  

* [HTTPError](#HTTPError)
    * [new HTTPError()](#new_HTTPError_new)
    * [new HTTPError()](#new_HTTPError_new)
    * [.Success](#HTTPError.Success) ⇐ [<code>HTTPError</code>](#HTTPError)
        * [new Success()](#new_HTTPError.Success_new)
        * [new Success()](#new_HTTPError.Success_new)
    * [.Success](#HTTPError.Success) ⇐ [<code>HTTPError</code>](#HTTPError)
        * [new Success()](#new_HTTPError.Success_new)
        * [new Success()](#new_HTTPError.Success_new)
    * [.statusCode](#HTTPError.statusCode) ⇒ <code>number</code>
    * [.message](#HTTPError.message) : <code>string</code>
    * [.statusCode](#HTTPError.statusCode) ⇒ <code>number</code>
    * [.message](#HTTPError.message) : <code>string</code>

<a name="new_HTTPError_new"></a>

### new HTTPError()
<p>HTTP error</p>

<a name="new_HTTPError_new"></a>

### new HTTPError()
<p>HTTP error</p>

<a name="HTTPError.Success"></a>

### HTTPError.Success ⇐ [<code>HTTPError</code>](#HTTPError)
<p>HTTP/1.1 200 Success series</p>

**Kind**: static class of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Response group for HTTP/1.1 200 Success series</p>.  
**Extends**: [<code>HTTPError</code>](#HTTPError)  

* [.Success](#HTTPError.Success) ⇐ [<code>HTTPError</code>](#HTTPError)
    * [new Success()](#new_HTTPError.Success_new)
    * [new Success()](#new_HTTPError.Success_new)

<a name="new_HTTPError.Success_new"></a>

#### new Success()
<p>Response group for HTTP/1.1 200 Success series</p>

<a name="new_HTTPError.Success_new"></a>

#### new Success()
<p>Response group for HTTP/1.1 200 Success series</p>

<a name="HTTPError.Success"></a>

### HTTPError.Success ⇐ [<code>HTTPError</code>](#HTTPError)
<p>HTTP/1.1 200 Success series</p>

**Kind**: static class of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Response group for HTTP/1.1 200 Success series</p>.  
**Extends**: [<code>HTTPError</code>](#HTTPError)  

* [.Success](#HTTPError.Success) ⇐ [<code>HTTPError</code>](#HTTPError)
    * [new Success()](#new_HTTPError.Success_new)
    * [new Success()](#new_HTTPError.Success_new)

<a name="new_HTTPError.Success_new"></a>

#### new Success()
<p>Response group for HTTP/1.1 200 Success series</p>

<a name="new_HTTPError.Success_new"></a>

#### new Success()
<p>Response group for HTTP/1.1 200 Success series</p>

<a name="HTTPError.statusCode"></a>

### HTTPError.statusCode ⇒ <code>number</code>
<p>Set the status code so that it can be read without initializing the class</p>

**Kind**: static constant of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Set the status code so that it can be read without initializing the class</p>.  
**Returns**: <code>number</code> - <p>HTTP/1.1 Status code</p>  
<a name="HTTPError.message"></a>

### HTTPError.message : <code>string</code>
<p>Default status message</p>

**Kind**: static constant of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Default status message</p>.  
<a name="HTTPError.statusCode"></a>

### HTTPError.statusCode ⇒ <code>number</code>
<p>Set the status code so that it can be read without initializing the class</p>

**Kind**: static constant of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Set the status code so that it can be read without initializing the class</p>.  
**Returns**: <code>number</code> - <p>HTTP/1.1 Status code</p>  
<a name="HTTPError.message"></a>

### HTTPError.message : <code>string</code>
<p>Default status message</p>

**Kind**: static constant of [<code>HTTPError</code>](#HTTPError)  
**Summary**: <p>Default status message</p>.  
<a name="OK"></a>

## OK ⇐ <code>Success</code>
<p>HTTP/1.1 200 OK</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [OK](#OK) ⇐ <code>Success</code>
    * [.statusCode](#OK.statusCode) : <code>number</code>
    * [.message](#OK.message) : <code>string</code>
    * [.statusCode](#OK.statusCode) : <code>number</code>
    * [.message](#OK.message) : <code>string</code>

<a name="OK.statusCode"></a>

### OK.statusCode : <code>number</code>
**Kind**: static constant of [<code>OK</code>](#OK)  
**Default**: <code>200</code>  
<a name="OK.message"></a>

### OK.message : <code>string</code>
**Kind**: static constant of [<code>OK</code>](#OK)  
**Default**: <code>&quot;&#x27;OK&#x27;&quot;</code>  
<a name="OK.statusCode"></a>

### OK.statusCode : <code>number</code>
**Kind**: static constant of [<code>OK</code>](#OK)  
**Default**: <code>200</code>  
<a name="OK.message"></a>

### OK.message : <code>string</code>
**Kind**: static constant of [<code>OK</code>](#OK)  
**Default**: <code>&quot;&#x27;OK&#x27;&quot;</code>  
<a name="Created"></a>

## Created ⇐ <code>Success</code>
<p>HTTP/1.1 201 Created</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [Created](#Created) ⇐ <code>Success</code>
    * [.statusCode](#Created.statusCode) : <code>number</code>
    * [.message](#Created.message) : <code>string</code>
    * [.statusCode](#Created.statusCode) : <code>number</code>
    * [.message](#Created.message) : <code>string</code>

<a name="Created.statusCode"></a>

### Created.statusCode : <code>number</code>
**Kind**: static constant of [<code>Created</code>](#Created)  
**Default**: <code>201</code>  
<a name="Created.message"></a>

### Created.message : <code>string</code>
**Kind**: static constant of [<code>Created</code>](#Created)  
**Default**: <code>&quot;&#x27;Created&#x27;&quot;</code>  
<a name="Created.statusCode"></a>

### Created.statusCode : <code>number</code>
**Kind**: static constant of [<code>Created</code>](#Created)  
**Default**: <code>201</code>  
<a name="Created.message"></a>

### Created.message : <code>string</code>
**Kind**: static constant of [<code>Created</code>](#Created)  
**Default**: <code>&quot;&#x27;Created&#x27;&quot;</code>  
<a name="Accepted"></a>

## Accepted ⇐ <code>Success</code>
<p>HTTP/1.1 202 Accepted</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [Accepted](#Accepted) ⇐ <code>Success</code>
    * [.statusCode](#Accepted.statusCode) : <code>number</code>
    * [.message](#Accepted.message) : <code>string</code>
    * [.statusCode](#Accepted.statusCode) : <code>number</code>
    * [.message](#Accepted.message) : <code>string</code>

<a name="Accepted.statusCode"></a>

### Accepted.statusCode : <code>number</code>
**Kind**: static constant of [<code>Accepted</code>](#Accepted)  
**Default**: <code>202</code>  
<a name="Accepted.message"></a>

### Accepted.message : <code>string</code>
**Kind**: static constant of [<code>Accepted</code>](#Accepted)  
**Default**: <code>&quot;&#x27;Accepted&#x27;&quot;</code>  
<a name="Accepted.statusCode"></a>

### Accepted.statusCode : <code>number</code>
**Kind**: static constant of [<code>Accepted</code>](#Accepted)  
**Default**: <code>202</code>  
<a name="Accepted.message"></a>

### Accepted.message : <code>string</code>
**Kind**: static constant of [<code>Accepted</code>](#Accepted)  
**Default**: <code>&quot;&#x27;Accepted&#x27;&quot;</code>  
<a name="NoContent"></a>

## NoContent ⇐ <code>Success</code>
<p>HTTP/1.1 204 No content</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [NoContent](#NoContent) ⇐ <code>Success</code>
    * [.statusCode](#NoContent.statusCode) : <code>number</code>
    * [.message](#NoContent.message) : <code>string</code>
    * [.statusCode](#NoContent.statusCode) : <code>number</code>
    * [.message](#NoContent.message) : <code>string</code>

<a name="NoContent.statusCode"></a>

### NoContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>NoContent</code>](#NoContent)  
**Default**: <code>204</code>  
<a name="NoContent.message"></a>

### NoContent.message : <code>string</code>
**Kind**: static constant of [<code>NoContent</code>](#NoContent)  
**Default**: <code>&quot;&#x27;No Content&#x27;&quot;</code>  
<a name="NoContent.statusCode"></a>

### NoContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>NoContent</code>](#NoContent)  
**Default**: <code>204</code>  
<a name="NoContent.message"></a>

### NoContent.message : <code>string</code>
**Kind**: static constant of [<code>NoContent</code>](#NoContent)  
**Default**: <code>&quot;&#x27;No Content&#x27;&quot;</code>  
<a name="ResetContent"></a>

## ResetContent ⇐ <code>Success</code>
<p>HTTP/1.1 205 Reset content</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [ResetContent](#ResetContent) ⇐ <code>Success</code>
    * [.statusCode](#ResetContent.statusCode) : <code>number</code>
    * [.message](#ResetContent.message) : <code>string</code>
    * [.statusCode](#ResetContent.statusCode) : <code>number</code>
    * [.message](#ResetContent.message) : <code>string</code>

<a name="ResetContent.statusCode"></a>

### ResetContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>ResetContent</code>](#ResetContent)  
**Default**: <code>205</code>  
<a name="ResetContent.message"></a>

### ResetContent.message : <code>string</code>
**Kind**: static constant of [<code>ResetContent</code>](#ResetContent)  
**Default**: <code>&quot;&#x27;Reset Content&#x27;&quot;</code>  
<a name="ResetContent.statusCode"></a>

### ResetContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>ResetContent</code>](#ResetContent)  
**Default**: <code>205</code>  
<a name="ResetContent.message"></a>

### ResetContent.message : <code>string</code>
**Kind**: static constant of [<code>ResetContent</code>](#ResetContent)  
**Default**: <code>&quot;&#x27;Reset Content&#x27;&quot;</code>  
<a name="PartialContent"></a>

## PartialContent ⇐ <code>Success</code>
<p>HTTP/1.1 206 Partial content</p>

**Kind**: global class  
**Extends**: <code>Success</code>  

* [PartialContent](#PartialContent) ⇐ <code>Success</code>
    * [.statusCode](#PartialContent.statusCode) : <code>number</code>
    * [.message](#PartialContent.message) : <code>string</code>
    * [.statusCode](#PartialContent.statusCode) : <code>number</code>
    * [.message](#PartialContent.message) : <code>string</code>

<a name="PartialContent.statusCode"></a>

### PartialContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>PartialContent</code>](#PartialContent)  
**Default**: <code>206</code>  
<a name="PartialContent.message"></a>

### PartialContent.message : <code>string</code>
**Kind**: static constant of [<code>PartialContent</code>](#PartialContent)  
**Default**: <code>&quot;&#x27;Partial content&#x27;&quot;</code>  
<a name="PartialContent.statusCode"></a>

### PartialContent.statusCode : <code>number</code>
**Kind**: static constant of [<code>PartialContent</code>](#PartialContent)  
**Default**: <code>206</code>  
<a name="PartialContent.message"></a>

### PartialContent.message : <code>string</code>
**Kind**: static constant of [<code>PartialContent</code>](#PartialContent)  
**Default**: <code>&quot;&#x27;Partial content&#x27;&quot;</code>  
<a name="NotModified"></a>

## NotModified ⇐ [<code>Redirection</code>](#Redirection)
<p>HTTP/1.1 304 Not modified</p>

**Kind**: global class  
**Extends**: [<code>Redirection</code>](#Redirection)  

* [NotModified](#NotModified) ⇐ [<code>Redirection</code>](#Redirection)
    * _instance_
        * [.Redirection](#Redirection+Redirection)
            * [new exports.Redirection(message, data)](#new_NotModified+Redirection_new)
    * _static_
        * [.statusCode](#NotModified.statusCode) : <code>number</code>
        * [.message](#NotModified.message) : <code>string</code>
        * [.statusCode](#NotModified.statusCode) : <code>number</code>
        * [.message](#NotModified.message) : <code>string</code>

<a name="Redirection+Redirection"></a>

### notModified.Redirection
**Kind**: instance class of [<code>NotModified</code>](#NotModified)  
**Summary**: <p>Accept data argument that passes the required location information to the
HTTP request</p>.  
**Overrides**: [<code>Redirection</code>](#Redirection+Redirection)  
<a name="new_NotModified+Redirection_new"></a>

#### new exports.Redirection(message, data)
<p>Accept data argument that passes the required location information to the
HTTP request</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Error message</p> |
| data | <code>object</code> | <p>Extended data</p> |

<a name="NotModified.statusCode"></a>

### NotModified.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotModified</code>](#NotModified)  
**Default**: <code>304</code>  
<a name="NotModified.message"></a>

### NotModified.message : <code>string</code>
**Kind**: static constant of [<code>NotModified</code>](#NotModified)  
**Default**: <code>&quot;&#x27;NotModified&#x27;&quot;</code>  
<a name="NotModified.statusCode"></a>

### NotModified.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotModified</code>](#NotModified)  
**Default**: <code>304</code>  
<a name="NotModified.message"></a>

### NotModified.message : <code>string</code>
**Kind**: static constant of [<code>NotModified</code>](#NotModified)  
**Default**: <code>&quot;&#x27;NotModified&#x27;&quot;</code>  
<a name="BadRequest"></a>

## BadRequest ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 400 Bad request</p>

**Kind**: global class  
**Summary**: <p>Response for HTTP/1.1 400 Bad request</p>.  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [BadRequest](#BadRequest) ⇐ [<code>ClientError</code>](#ClientError)
    * [new BadRequest()](#new_BadRequest_new)
    * [new BadRequest()](#new_BadRequest_new)
    * [.statusCode](#BadRequest.statusCode) : <code>number</code>
    * [.message](#BadRequest.message) : <code>string</code>
    * [.statusCode](#BadRequest.statusCode) : <code>number</code>
    * [.message](#BadRequest.message) : <code>string</code>

<a name="new_BadRequest_new"></a>

### new BadRequest()
<p>Response for HTTP/1.1 400 Bad request</p>

<a name="new_BadRequest_new"></a>

### new BadRequest()
<p>Response for HTTP/1.1 400 Bad request</p>

<a name="BadRequest.statusCode"></a>

### BadRequest.statusCode : <code>number</code>
**Kind**: static constant of [<code>BadRequest</code>](#BadRequest)  
**Default**: <code>400</code>  
<a name="BadRequest.message"></a>

### BadRequest.message : <code>string</code>
**Kind**: static constant of [<code>BadRequest</code>](#BadRequest)  
**Default**: <code>&quot;&#x27;Bad Request&#x27;&quot;</code>  
<a name="BadRequest.statusCode"></a>

### BadRequest.statusCode : <code>number</code>
**Kind**: static constant of [<code>BadRequest</code>](#BadRequest)  
**Default**: <code>400</code>  
<a name="BadRequest.message"></a>

### BadRequest.message : <code>string</code>
**Kind**: static constant of [<code>BadRequest</code>](#BadRequest)  
**Default**: <code>&quot;&#x27;Bad Request&#x27;&quot;</code>  
<a name="Unauthorized"></a>

## Unauthorized ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 401 Unauthorized</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [Unauthorized](#Unauthorized) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#Unauthorized.statusCode) : <code>number</code>
    * [.message](#Unauthorized.message) : <code>string</code>
    * [.statusCode](#Unauthorized.statusCode) : <code>number</code>
    * [.message](#Unauthorized.message) : <code>string</code>

<a name="Unauthorized.statusCode"></a>

### Unauthorized.statusCode : <code>number</code>
**Kind**: static constant of [<code>Unauthorized</code>](#Unauthorized)  
**Default**: <code>401</code>  
<a name="Unauthorized.message"></a>

### Unauthorized.message : <code>string</code>
**Kind**: static constant of [<code>Unauthorized</code>](#Unauthorized)  
**Default**: <code>&quot;&#x27;Unauthorized&#x27;&quot;</code>  
<a name="Unauthorized.statusCode"></a>

### Unauthorized.statusCode : <code>number</code>
**Kind**: static constant of [<code>Unauthorized</code>](#Unauthorized)  
**Default**: <code>401</code>  
<a name="Unauthorized.message"></a>

### Unauthorized.message : <code>string</code>
**Kind**: static constant of [<code>Unauthorized</code>](#Unauthorized)  
**Default**: <code>&quot;&#x27;Unauthorized&#x27;&quot;</code>  
<a name="PaymentRequired"></a>

## PaymentRequired ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 402 Payment required</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [PaymentRequired](#PaymentRequired) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#PaymentRequired.statusCode) : <code>number</code>
    * [.message](#PaymentRequired.message) : <code>string</code>
    * [.statusCode](#PaymentRequired.statusCode) : <code>number</code>
    * [.message](#PaymentRequired.message) : <code>string</code>

<a name="PaymentRequired.statusCode"></a>

### PaymentRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>PaymentRequired</code>](#PaymentRequired)  
**Default**: <code>402</code>  
<a name="PaymentRequired.message"></a>

### PaymentRequired.message : <code>string</code>
**Kind**: static constant of [<code>PaymentRequired</code>](#PaymentRequired)  
**Default**: <code>&quot;&#x27;Payment Required&#x27;&quot;</code>  
<a name="PaymentRequired.statusCode"></a>

### PaymentRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>PaymentRequired</code>](#PaymentRequired)  
**Default**: <code>402</code>  
<a name="PaymentRequired.message"></a>

### PaymentRequired.message : <code>string</code>
**Kind**: static constant of [<code>PaymentRequired</code>](#PaymentRequired)  
**Default**: <code>&quot;&#x27;Payment Required&#x27;&quot;</code>  
<a name="Forbidden"></a>

## Forbidden ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 403 Forbidden</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [Forbidden](#Forbidden) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#Forbidden.statusCode) : <code>number</code>
    * [.message](#Forbidden.message) : <code>string</code>
    * [.statusCode](#Forbidden.statusCode) : <code>number</code>
    * [.message](#Forbidden.message) : <code>string</code>

<a name="Forbidden.statusCode"></a>

### Forbidden.statusCode : <code>number</code>
**Kind**: static constant of [<code>Forbidden</code>](#Forbidden)  
**Default**: <code>403</code>  
<a name="Forbidden.message"></a>

### Forbidden.message : <code>string</code>
**Kind**: static constant of [<code>Forbidden</code>](#Forbidden)  
**Default**: <code>&quot;&#x27;Forbidden&#x27;&quot;</code>  
<a name="Forbidden.statusCode"></a>

### Forbidden.statusCode : <code>number</code>
**Kind**: static constant of [<code>Forbidden</code>](#Forbidden)  
**Default**: <code>403</code>  
<a name="Forbidden.message"></a>

### Forbidden.message : <code>string</code>
**Kind**: static constant of [<code>Forbidden</code>](#Forbidden)  
**Default**: <code>&quot;&#x27;Forbidden&#x27;&quot;</code>  
<a name="NotFound"></a>

## NotFound ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 404 Not found</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [NotFound](#NotFound) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#NotFound.statusCode) : <code>number</code>
    * [.message](#NotFound.message) : <code>string</code>
    * [.statusCode](#NotFound.statusCode) : <code>number</code>
    * [.message](#NotFound.message) : <code>string</code>

<a name="NotFound.statusCode"></a>

### NotFound.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotFound</code>](#NotFound)  
**Default**: <code>404</code>  
<a name="NotFound.message"></a>

### NotFound.message : <code>string</code>
**Kind**: static constant of [<code>NotFound</code>](#NotFound)  
**Default**: <code>&quot;&#x27;Not Found&#x27;&quot;</code>  
<a name="NotFound.statusCode"></a>

### NotFound.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotFound</code>](#NotFound)  
**Default**: <code>404</code>  
<a name="NotFound.message"></a>

### NotFound.message : <code>string</code>
**Kind**: static constant of [<code>NotFound</code>](#NotFound)  
**Default**: <code>&quot;&#x27;Not Found&#x27;&quot;</code>  
<a name="MethodNotAllowed"></a>

## MethodNotAllowed ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 405 Method not allowed</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [MethodNotAllowed](#MethodNotAllowed) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#MethodNotAllowed.statusCode) : <code>number</code>
    * [.message](#MethodNotAllowed.message) : <code>string</code>
    * [.statusCode](#MethodNotAllowed.statusCode) : <code>number</code>
    * [.message](#MethodNotAllowed.message) : <code>string</code>

<a name="MethodNotAllowed.statusCode"></a>

### MethodNotAllowed.statusCode : <code>number</code>
**Kind**: static constant of [<code>MethodNotAllowed</code>](#MethodNotAllowed)  
**Default**: <code>405</code>  
<a name="MethodNotAllowed.message"></a>

### MethodNotAllowed.message : <code>string</code>
**Kind**: static constant of [<code>MethodNotAllowed</code>](#MethodNotAllowed)  
**Default**: <code>&quot;&#x27;Method not allowed&#x27;&quot;</code>  
<a name="MethodNotAllowed.statusCode"></a>

### MethodNotAllowed.statusCode : <code>number</code>
**Kind**: static constant of [<code>MethodNotAllowed</code>](#MethodNotAllowed)  
**Default**: <code>405</code>  
<a name="MethodNotAllowed.message"></a>

### MethodNotAllowed.message : <code>string</code>
**Kind**: static constant of [<code>MethodNotAllowed</code>](#MethodNotAllowed)  
**Default**: <code>&quot;&#x27;Method not allowed&#x27;&quot;</code>  
<a name="NotAcceptable"></a>

## NotAcceptable ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 406 Not acceptable</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [NotAcceptable](#NotAcceptable) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#NotAcceptable.statusCode) : <code>number</code>
    * [.message](#NotAcceptable.message) : <code>string</code>
    * [.statusCode](#NotAcceptable.statusCode) : <code>number</code>
    * [.message](#NotAcceptable.message) : <code>string</code>

<a name="NotAcceptable.statusCode"></a>

### NotAcceptable.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotAcceptable</code>](#NotAcceptable)  
**Default**: <code>406</code>  
<a name="NotAcceptable.message"></a>

### NotAcceptable.message : <code>string</code>
**Kind**: static constant of [<code>NotAcceptable</code>](#NotAcceptable)  
**Default**: <code>&quot;&#x27;Not Acceptable&#x27;&quot;</code>  
<a name="NotAcceptable.statusCode"></a>

### NotAcceptable.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotAcceptable</code>](#NotAcceptable)  
**Default**: <code>406</code>  
<a name="NotAcceptable.message"></a>

### NotAcceptable.message : <code>string</code>
**Kind**: static constant of [<code>NotAcceptable</code>](#NotAcceptable)  
**Default**: <code>&quot;&#x27;Not Acceptable&#x27;&quot;</code>  
<a name="ProxyAuthenticationRequired"></a>

## ProxyAuthenticationRequired ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 407 Proxy authentication required</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [ProxyAuthenticationRequired](#ProxyAuthenticationRequired) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#ProxyAuthenticationRequired.statusCode) : <code>number</code>
    * [.message](#ProxyAuthenticationRequired.message) : <code>string</code>
    * [.statusCode](#ProxyAuthenticationRequired.statusCode) : <code>number</code>
    * [.message](#ProxyAuthenticationRequired.message) : <code>string</code>

<a name="ProxyAuthenticationRequired.statusCode"></a>

### ProxyAuthenticationRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>ProxyAuthenticationRequired</code>](#ProxyAuthenticationRequired)  
**Default**: <code>407</code>  
<a name="ProxyAuthenticationRequired.message"></a>

### ProxyAuthenticationRequired.message : <code>string</code>
**Kind**: static constant of [<code>ProxyAuthenticationRequired</code>](#ProxyAuthenticationRequired)  
**Default**: <code>&quot;&#x27;Proxy Authentication Required&#x27;&quot;</code>  
<a name="ProxyAuthenticationRequired.statusCode"></a>

### ProxyAuthenticationRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>ProxyAuthenticationRequired</code>](#ProxyAuthenticationRequired)  
**Default**: <code>407</code>  
<a name="ProxyAuthenticationRequired.message"></a>

### ProxyAuthenticationRequired.message : <code>string</code>
**Kind**: static constant of [<code>ProxyAuthenticationRequired</code>](#ProxyAuthenticationRequired)  
**Default**: <code>&quot;&#x27;Proxy Authentication Required&#x27;&quot;</code>  
<a name="Conflict"></a>

## Conflict ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 409 Conflict</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [Conflict](#Conflict) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#Conflict.statusCode) : <code>number</code>
    * [.message](#Conflict.message) : <code>string</code>
    * [.statusCode](#Conflict.statusCode) : <code>number</code>
    * [.message](#Conflict.message) : <code>string</code>

<a name="Conflict.statusCode"></a>

### Conflict.statusCode : <code>number</code>
**Kind**: static constant of [<code>Conflict</code>](#Conflict)  
**Default**: <code>409</code>  
<a name="Conflict.message"></a>

### Conflict.message : <code>string</code>
**Kind**: static constant of [<code>Conflict</code>](#Conflict)  
**Default**: <code>&quot;&#x27;Conflict&#x27;&quot;</code>  
<a name="Conflict.statusCode"></a>

### Conflict.statusCode : <code>number</code>
**Kind**: static constant of [<code>Conflict</code>](#Conflict)  
**Default**: <code>409</code>  
<a name="Conflict.message"></a>

### Conflict.message : <code>string</code>
**Kind**: static constant of [<code>Conflict</code>](#Conflict)  
**Default**: <code>&quot;&#x27;Conflict&#x27;&quot;</code>  
<a name="Gone"></a>

## Gone ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 410 Gone</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [Gone](#Gone) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#Gone.statusCode) : <code>number</code>
    * [.message](#Gone.message) : <code>string</code>
    * [.statusCode](#Gone.statusCode) : <code>number</code>
    * [.message](#Gone.message) : <code>string</code>

<a name="Gone.statusCode"></a>

### Gone.statusCode : <code>number</code>
**Kind**: static constant of [<code>Gone</code>](#Gone)  
**Default**: <code>410</code>  
<a name="Gone.message"></a>

### Gone.message : <code>string</code>
**Kind**: static constant of [<code>Gone</code>](#Gone)  
**Default**: <code>&quot;&#x27;Gone&#x27;&quot;</code>  
<a name="Gone.statusCode"></a>

### Gone.statusCode : <code>number</code>
**Kind**: static constant of [<code>Gone</code>](#Gone)  
**Default**: <code>410</code>  
<a name="Gone.message"></a>

### Gone.message : <code>string</code>
**Kind**: static constant of [<code>Gone</code>](#Gone)  
**Default**: <code>&quot;&#x27;Gone&#x27;&quot;</code>  
<a name="LengthRequired"></a>

## LengthRequired ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 411 Length required</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [LengthRequired](#LengthRequired) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#LengthRequired.statusCode) : <code>number</code>
    * [.message](#LengthRequired.message) : <code>string</code>
    * [.statusCode](#LengthRequired.statusCode) : <code>number</code>
    * [.message](#LengthRequired.message) : <code>string</code>

<a name="LengthRequired.statusCode"></a>

### LengthRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>LengthRequired</code>](#LengthRequired)  
**Default**: <code>411</code>  
<a name="LengthRequired.message"></a>

### LengthRequired.message : <code>string</code>
**Kind**: static constant of [<code>LengthRequired</code>](#LengthRequired)  
**Default**: <code>&quot;&#x27;Length Required&#x27;&quot;</code>  
<a name="LengthRequired.statusCode"></a>

### LengthRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>LengthRequired</code>](#LengthRequired)  
**Default**: <code>411</code>  
<a name="LengthRequired.message"></a>

### LengthRequired.message : <code>string</code>
**Kind**: static constant of [<code>LengthRequired</code>](#LengthRequired)  
**Default**: <code>&quot;&#x27;Length Required&#x27;&quot;</code>  
<a name="PreconditionFailed"></a>

## PreconditionFailed ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 412 Precondition failed</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [PreconditionFailed](#PreconditionFailed) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#PreconditionFailed.statusCode) : <code>number</code>
    * [.message](#PreconditionFailed.message) : <code>string</code>
    * [.message](#PreconditionFailed.message) : <code>string</code>
    * [.statusCode](#PreconditionFailed.statusCode) : <code>number</code>
    * [.message](#PreconditionFailed.message) : <code>string</code>
    * [.message](#PreconditionFailed.message) : <code>string</code>

<a name="PreconditionFailed.statusCode"></a>

### PreconditionFailed.statusCode : <code>number</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>412</code>  
<a name="PreconditionFailed.message"></a>

### PreconditionFailed.message : <code>string</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>&quot;&#x27;Precondition Failed&#x27;&quot;</code>  
<a name="PreconditionFailed.message"></a>

### PreconditionFailed.message : <code>string</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>&quot;&#x27;Precondition Required&#x27;&quot;</code>  
<a name="PreconditionFailed.statusCode"></a>

### PreconditionFailed.statusCode : <code>number</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>412</code>  
<a name="PreconditionFailed.message"></a>

### PreconditionFailed.message : <code>string</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>&quot;&#x27;Precondition Failed&#x27;&quot;</code>  
<a name="PreconditionFailed.message"></a>

### PreconditionFailed.message : <code>string</code>
**Kind**: static constant of [<code>PreconditionFailed</code>](#PreconditionFailed)  
**Default**: <code>&quot;&#x27;Precondition Required&#x27;&quot;</code>  
<a name="PayloadTooLarge"></a>

## PayloadTooLarge ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 413 Payload too large</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [PayloadTooLarge](#PayloadTooLarge) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#PayloadTooLarge.statusCode) : <code>number</code>
    * [.message](#PayloadTooLarge.message) : <code>string</code>
    * [.statusCode](#PayloadTooLarge.statusCode) : <code>number</code>
    * [.message](#PayloadTooLarge.message) : <code>string</code>

<a name="PayloadTooLarge.statusCode"></a>

### PayloadTooLarge.statusCode : <code>number</code>
**Kind**: static constant of [<code>PayloadTooLarge</code>](#PayloadTooLarge)  
**Default**: <code>413</code>  
<a name="PayloadTooLarge.message"></a>

### PayloadTooLarge.message : <code>string</code>
**Kind**: static constant of [<code>PayloadTooLarge</code>](#PayloadTooLarge)  
**Default**: <code>&quot;&#x27;Payload Too Large&#x27;&quot;</code>  
<a name="PayloadTooLarge.statusCode"></a>

### PayloadTooLarge.statusCode : <code>number</code>
**Kind**: static constant of [<code>PayloadTooLarge</code>](#PayloadTooLarge)  
**Default**: <code>413</code>  
<a name="PayloadTooLarge.message"></a>

### PayloadTooLarge.message : <code>string</code>
**Kind**: static constant of [<code>PayloadTooLarge</code>](#PayloadTooLarge)  
**Default**: <code>&quot;&#x27;Payload Too Large&#x27;&quot;</code>  
<a name="URITooLong"></a>

## URITooLong ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 414 URI too long</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [URITooLong](#URITooLong) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#URITooLong.statusCode) : <code>number</code>
    * [.message](#URITooLong.message) : <code>string</code>
    * [.statusCode](#URITooLong.statusCode) : <code>number</code>
    * [.message](#URITooLong.message) : <code>string</code>

<a name="URITooLong.statusCode"></a>

### URITooLong.statusCode : <code>number</code>
**Kind**: static constant of [<code>URITooLong</code>](#URITooLong)  
**Default**: <code>414</code>  
<a name="URITooLong.message"></a>

### URITooLong.message : <code>string</code>
**Kind**: static constant of [<code>URITooLong</code>](#URITooLong)  
**Default**: <code>&quot;&#x27;URI Too Long&#x27;&quot;</code>  
<a name="URITooLong.statusCode"></a>

### URITooLong.statusCode : <code>number</code>
**Kind**: static constant of [<code>URITooLong</code>](#URITooLong)  
**Default**: <code>414</code>  
<a name="URITooLong.message"></a>

### URITooLong.message : <code>string</code>
**Kind**: static constant of [<code>URITooLong</code>](#URITooLong)  
**Default**: <code>&quot;&#x27;URI Too Long&#x27;&quot;</code>  
<a name="UnsupportedMediaType"></a>

## UnsupportedMediaType ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 415 Unsupported media type</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [UnsupportedMediaType](#UnsupportedMediaType) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#UnsupportedMediaType.statusCode) : <code>number</code>
    * [.message](#UnsupportedMediaType.message) : <code>string</code>
    * [.statusCode](#UnsupportedMediaType.statusCode) : <code>number</code>
    * [.message](#UnsupportedMediaType.message) : <code>string</code>

<a name="UnsupportedMediaType.statusCode"></a>

### UnsupportedMediaType.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnsupportedMediaType</code>](#UnsupportedMediaType)  
**Default**: <code>415</code>  
<a name="UnsupportedMediaType.message"></a>

### UnsupportedMediaType.message : <code>string</code>
**Kind**: static constant of [<code>UnsupportedMediaType</code>](#UnsupportedMediaType)  
**Default**: <code>&quot;&#x27;Unsupported Media Type&#x27;&quot;</code>  
<a name="UnsupportedMediaType.statusCode"></a>

### UnsupportedMediaType.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnsupportedMediaType</code>](#UnsupportedMediaType)  
**Default**: <code>415</code>  
<a name="UnsupportedMediaType.message"></a>

### UnsupportedMediaType.message : <code>string</code>
**Kind**: static constant of [<code>UnsupportedMediaType</code>](#UnsupportedMediaType)  
**Default**: <code>&quot;&#x27;Unsupported Media Type&#x27;&quot;</code>  
<a name="RangeNotSatisfiable"></a>

## RangeNotSatisfiable ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 416 Range not satisfiable</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [RangeNotSatisfiable](#RangeNotSatisfiable) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#RangeNotSatisfiable.statusCode) : <code>number</code>
    * [.message](#RangeNotSatisfiable.message) : <code>string</code>
    * [.statusCode](#RangeNotSatisfiable.statusCode) : <code>number</code>
    * [.message](#RangeNotSatisfiable.message) : <code>string</code>

<a name="RangeNotSatisfiable.statusCode"></a>

### RangeNotSatisfiable.statusCode : <code>number</code>
**Kind**: static constant of [<code>RangeNotSatisfiable</code>](#RangeNotSatisfiable)  
**Default**: <code>416</code>  
<a name="RangeNotSatisfiable.message"></a>

### RangeNotSatisfiable.message : <code>string</code>
**Kind**: static constant of [<code>RangeNotSatisfiable</code>](#RangeNotSatisfiable)  
**Default**: <code>&quot;&#x27;Range Not Satisfiable&#x27;&quot;</code>  
<a name="RangeNotSatisfiable.statusCode"></a>

### RangeNotSatisfiable.statusCode : <code>number</code>
**Kind**: static constant of [<code>RangeNotSatisfiable</code>](#RangeNotSatisfiable)  
**Default**: <code>416</code>  
<a name="RangeNotSatisfiable.message"></a>

### RangeNotSatisfiable.message : <code>string</code>
**Kind**: static constant of [<code>RangeNotSatisfiable</code>](#RangeNotSatisfiable)  
**Default**: <code>&quot;&#x27;Range Not Satisfiable&#x27;&quot;</code>  
<a name="ExpectationFailed"></a>

## ExpectationFailed ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 417 Expectation failed</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [ExpectationFailed](#ExpectationFailed) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#ExpectationFailed.statusCode) : <code>number</code>
    * [.message](#ExpectationFailed.message) : <code>string</code>
    * [.statusCode](#ExpectationFailed.statusCode) : <code>number</code>
    * [.message](#ExpectationFailed.message) : <code>string</code>

<a name="ExpectationFailed.statusCode"></a>

### ExpectationFailed.statusCode : <code>number</code>
**Kind**: static constant of [<code>ExpectationFailed</code>](#ExpectationFailed)  
**Default**: <code>417</code>  
<a name="ExpectationFailed.message"></a>

### ExpectationFailed.message : <code>string</code>
**Kind**: static constant of [<code>ExpectationFailed</code>](#ExpectationFailed)  
**Default**: <code>&quot;&#x27;Expectation Failed&#x27;&quot;</code>  
<a name="ExpectationFailed.statusCode"></a>

### ExpectationFailed.statusCode : <code>number</code>
**Kind**: static constant of [<code>ExpectationFailed</code>](#ExpectationFailed)  
**Default**: <code>417</code>  
<a name="ExpectationFailed.message"></a>

### ExpectationFailed.message : <code>string</code>
**Kind**: static constant of [<code>ExpectationFailed</code>](#ExpectationFailed)  
**Default**: <code>&quot;&#x27;Expectation Failed&#x27;&quot;</code>  
<a name="MisdirectedRequest"></a>

## MisdirectedRequest ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 421 Misdirected request</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [MisdirectedRequest](#MisdirectedRequest) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#MisdirectedRequest.statusCode) : <code>number</code>
    * [.message](#MisdirectedRequest.message) : <code>string</code>
    * [.statusCode](#MisdirectedRequest.statusCode) : <code>number</code>
    * [.message](#MisdirectedRequest.message) : <code>string</code>

<a name="MisdirectedRequest.statusCode"></a>

### MisdirectedRequest.statusCode : <code>number</code>
**Kind**: static constant of [<code>MisdirectedRequest</code>](#MisdirectedRequest)  
**Default**: <code>421</code>  
<a name="MisdirectedRequest.message"></a>

### MisdirectedRequest.message : <code>string</code>
**Kind**: static constant of [<code>MisdirectedRequest</code>](#MisdirectedRequest)  
**Default**: <code>&quot;&#x27;Misdirected Request&#x27;&quot;</code>  
<a name="MisdirectedRequest.statusCode"></a>

### MisdirectedRequest.statusCode : <code>number</code>
**Kind**: static constant of [<code>MisdirectedRequest</code>](#MisdirectedRequest)  
**Default**: <code>421</code>  
<a name="MisdirectedRequest.message"></a>

### MisdirectedRequest.message : <code>string</code>
**Kind**: static constant of [<code>MisdirectedRequest</code>](#MisdirectedRequest)  
**Default**: <code>&quot;&#x27;Misdirected Request&#x27;&quot;</code>  
<a name="UnprocessableEntity"></a>

## UnprocessableEntity ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 422 Unprocessable entity</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [UnprocessableEntity](#UnprocessableEntity) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#UnprocessableEntity.statusCode) : <code>number</code>
    * [.message](#UnprocessableEntity.message) : <code>string</code>
    * [.statusCode](#UnprocessableEntity.statusCode) : <code>number</code>
    * [.message](#UnprocessableEntity.message) : <code>string</code>

<a name="UnprocessableEntity.statusCode"></a>

### UnprocessableEntity.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnprocessableEntity</code>](#UnprocessableEntity)  
**Default**: <code>422</code>  
<a name="UnprocessableEntity.message"></a>

### UnprocessableEntity.message : <code>string</code>
**Kind**: static constant of [<code>UnprocessableEntity</code>](#UnprocessableEntity)  
**Default**: <code>&quot;&#x27;Unprocessable Entity&#x27;&quot;</code>  
<a name="UnprocessableEntity.statusCode"></a>

### UnprocessableEntity.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnprocessableEntity</code>](#UnprocessableEntity)  
**Default**: <code>422</code>  
<a name="UnprocessableEntity.message"></a>

### UnprocessableEntity.message : <code>string</code>
**Kind**: static constant of [<code>UnprocessableEntity</code>](#UnprocessableEntity)  
**Default**: <code>&quot;&#x27;Unprocessable Entity&#x27;&quot;</code>  
<a name="Locked"></a>

## Locked ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 423 Locked</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [Locked](#Locked) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#Locked.statusCode) : <code>number</code>
    * [.message](#Locked.message) : <code>string</code>
    * [.statusCode](#Locked.statusCode) : <code>number</code>
    * [.message](#Locked.message) : <code>string</code>

<a name="Locked.statusCode"></a>

### Locked.statusCode : <code>number</code>
**Kind**: static constant of [<code>Locked</code>](#Locked)  
**Default**: <code>423</code>  
<a name="Locked.message"></a>

### Locked.message : <code>string</code>
**Kind**: static constant of [<code>Locked</code>](#Locked)  
**Default**: <code>&quot;&#x27;Locked&#x27;&quot;</code>  
<a name="Locked.statusCode"></a>

### Locked.statusCode : <code>number</code>
**Kind**: static constant of [<code>Locked</code>](#Locked)  
**Default**: <code>423</code>  
<a name="Locked.message"></a>

### Locked.message : <code>string</code>
**Kind**: static constant of [<code>Locked</code>](#Locked)  
**Default**: <code>&quot;&#x27;Locked&#x27;&quot;</code>  
<a name="FailedDependency"></a>

## FailedDependency ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 424 Failed dependency</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [FailedDependency](#FailedDependency) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#FailedDependency.statusCode) : <code>number</code>
    * [.message](#FailedDependency.message) : <code>string</code>
    * [.statusCode](#FailedDependency.statusCode) : <code>number</code>
    * [.message](#FailedDependency.message) : <code>string</code>

<a name="FailedDependency.statusCode"></a>

### FailedDependency.statusCode : <code>number</code>
**Kind**: static constant of [<code>FailedDependency</code>](#FailedDependency)  
**Default**: <code>424</code>  
<a name="FailedDependency.message"></a>

### FailedDependency.message : <code>string</code>
**Kind**: static constant of [<code>FailedDependency</code>](#FailedDependency)  
**Default**: <code>&quot;&#x27;Failed Dependency&#x27;&quot;</code>  
<a name="FailedDependency.statusCode"></a>

### FailedDependency.statusCode : <code>number</code>
**Kind**: static constant of [<code>FailedDependency</code>](#FailedDependency)  
**Default**: <code>424</code>  
<a name="FailedDependency.message"></a>

### FailedDependency.message : <code>string</code>
**Kind**: static constant of [<code>FailedDependency</code>](#FailedDependency)  
**Default**: <code>&quot;&#x27;Failed Dependency&#x27;&quot;</code>  
<a name="UpgradeRequired"></a>

## UpgradeRequired ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 426 Upgrade required</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [UpgradeRequired](#UpgradeRequired) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#UpgradeRequired.statusCode) : <code>number</code>
    * [.message](#UpgradeRequired.message) : <code>string</code>
    * [.statusCode](#UpgradeRequired.statusCode) : <code>number</code>
    * [.message](#UpgradeRequired.message) : <code>string</code>

<a name="UpgradeRequired.statusCode"></a>

### UpgradeRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>UpgradeRequired</code>](#UpgradeRequired)  
**Default**: <code>426</code>  
<a name="UpgradeRequired.message"></a>

### UpgradeRequired.message : <code>string</code>
**Kind**: static constant of [<code>UpgradeRequired</code>](#UpgradeRequired)  
**Default**: <code>&quot;&#x27;Upgrade Required&#x27;&quot;</code>  
<a name="UpgradeRequired.statusCode"></a>

### UpgradeRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>UpgradeRequired</code>](#UpgradeRequired)  
**Default**: <code>426</code>  
<a name="UpgradeRequired.message"></a>

### UpgradeRequired.message : <code>string</code>
**Kind**: static constant of [<code>UpgradeRequired</code>](#UpgradeRequired)  
**Default**: <code>&quot;&#x27;Upgrade Required&#x27;&quot;</code>  
<a name="PreconditionRequired"></a>

## PreconditionRequired ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 428 Precondition failed</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [PreconditionRequired](#PreconditionRequired) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#PreconditionRequired.statusCode) : <code>number</code>
    * [.statusCode](#PreconditionRequired.statusCode) : <code>number</code>

<a name="PreconditionRequired.statusCode"></a>

### PreconditionRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>PreconditionRequired</code>](#PreconditionRequired)  
**Default**: <code>428</code>  
<a name="PreconditionRequired.statusCode"></a>

### PreconditionRequired.statusCode : <code>number</code>
**Kind**: static constant of [<code>PreconditionRequired</code>](#PreconditionRequired)  
**Default**: <code>428</code>  
<a name="TooManyRequests"></a>

## TooManyRequests ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 429 Too many requests</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [TooManyRequests](#TooManyRequests) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#TooManyRequests.statusCode) : <code>number</code>
    * [.message](#TooManyRequests.message) : <code>string</code>
    * [.statusCode](#TooManyRequests.statusCode) : <code>number</code>
    * [.message](#TooManyRequests.message) : <code>string</code>

<a name="TooManyRequests.statusCode"></a>

### TooManyRequests.statusCode : <code>number</code>
**Kind**: static constant of [<code>TooManyRequests</code>](#TooManyRequests)  
**Default**: <code>429</code>  
<a name="TooManyRequests.message"></a>

### TooManyRequests.message : <code>string</code>
**Kind**: static constant of [<code>TooManyRequests</code>](#TooManyRequests)  
**Default**: <code>&quot;&#x27;Too Many Requests&#x27;&quot;</code>  
<a name="TooManyRequests.statusCode"></a>

### TooManyRequests.statusCode : <code>number</code>
**Kind**: static constant of [<code>TooManyRequests</code>](#TooManyRequests)  
**Default**: <code>429</code>  
<a name="TooManyRequests.message"></a>

### TooManyRequests.message : <code>string</code>
**Kind**: static constant of [<code>TooManyRequests</code>](#TooManyRequests)  
**Default**: <code>&quot;&#x27;Too Many Requests&#x27;&quot;</code>  
<a name="RequestHeaderFieldsTooLarge"></a>

## RequestHeaderFieldsTooLarge ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 432 Request header fields too large</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [RequestHeaderFieldsTooLarge](#RequestHeaderFieldsTooLarge) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#RequestHeaderFieldsTooLarge.statusCode) : <code>number</code>
    * [.message](#RequestHeaderFieldsTooLarge.message) : <code>string</code>
    * [.statusCode](#RequestHeaderFieldsTooLarge.statusCode) : <code>number</code>
    * [.message](#RequestHeaderFieldsTooLarge.message) : <code>string</code>

<a name="RequestHeaderFieldsTooLarge.statusCode"></a>

### RequestHeaderFieldsTooLarge.statusCode : <code>number</code>
**Kind**: static constant of [<code>RequestHeaderFieldsTooLarge</code>](#RequestHeaderFieldsTooLarge)  
**Default**: <code>431</code>  
<a name="RequestHeaderFieldsTooLarge.message"></a>

### RequestHeaderFieldsTooLarge.message : <code>string</code>
**Kind**: static constant of [<code>RequestHeaderFieldsTooLarge</code>](#RequestHeaderFieldsTooLarge)  
**Default**: <code>&quot;&#x27;Request Header Fields Too Large&#x27;&quot;</code>  
<a name="RequestHeaderFieldsTooLarge.statusCode"></a>

### RequestHeaderFieldsTooLarge.statusCode : <code>number</code>
**Kind**: static constant of [<code>RequestHeaderFieldsTooLarge</code>](#RequestHeaderFieldsTooLarge)  
**Default**: <code>431</code>  
<a name="RequestHeaderFieldsTooLarge.message"></a>

### RequestHeaderFieldsTooLarge.message : <code>string</code>
**Kind**: static constant of [<code>RequestHeaderFieldsTooLarge</code>](#RequestHeaderFieldsTooLarge)  
**Default**: <code>&quot;&#x27;Request Header Fields Too Large&#x27;&quot;</code>  
<a name="UnavailableForLegalReasons"></a>

## UnavailableForLegalReasons ⇐ [<code>ClientError</code>](#ClientError)
<p>HTTP/1.1 451 Unavailable for legal reasons</p>

**Kind**: global class  
**Extends**: [<code>ClientError</code>](#ClientError)  

* [UnavailableForLegalReasons](#UnavailableForLegalReasons) ⇐ [<code>ClientError</code>](#ClientError)
    * [.statusCode](#UnavailableForLegalReasons.statusCode) : <code>number</code>
    * [.message](#UnavailableForLegalReasons.message) : <code>string</code>
    * [.statusCode](#UnavailableForLegalReasons.statusCode) : <code>number</code>
    * [.message](#UnavailableForLegalReasons.message) : <code>string</code>

<a name="UnavailableForLegalReasons.statusCode"></a>

### UnavailableForLegalReasons.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnavailableForLegalReasons</code>](#UnavailableForLegalReasons)  
**Default**: <code>451</code>  
<a name="UnavailableForLegalReasons.message"></a>

### UnavailableForLegalReasons.message : <code>string</code>
**Kind**: static constant of [<code>UnavailableForLegalReasons</code>](#UnavailableForLegalReasons)  
**Default**: <code>&quot;&#x27;Unavailable For Legal Reasons&#x27;&quot;</code>  
<a name="UnavailableForLegalReasons.statusCode"></a>

### UnavailableForLegalReasons.statusCode : <code>number</code>
**Kind**: static constant of [<code>UnavailableForLegalReasons</code>](#UnavailableForLegalReasons)  
**Default**: <code>451</code>  
<a name="UnavailableForLegalReasons.message"></a>

### UnavailableForLegalReasons.message : <code>string</code>
**Kind**: static constant of [<code>UnavailableForLegalReasons</code>](#UnavailableForLegalReasons)  
**Default**: <code>&quot;&#x27;Unavailable For Legal Reasons&#x27;&quot;</code>  
<a name="InternalServerError"></a>

## InternalServerError ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 500 Internal server error</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [InternalServerError](#InternalServerError) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#InternalServerError.statusCode) : <code>number</code>
    * [.message](#InternalServerError.message) : <code>string</code>
    * [.statusCode](#InternalServerError.statusCode) : <code>number</code>
    * [.message](#InternalServerError.message) : <code>string</code>

<a name="InternalServerError.statusCode"></a>

### InternalServerError.statusCode : <code>number</code>
**Kind**: static constant of [<code>InternalServerError</code>](#InternalServerError)  
**Default**: <code>500</code>  
<a name="InternalServerError.message"></a>

### InternalServerError.message : <code>string</code>
**Kind**: static constant of [<code>InternalServerError</code>](#InternalServerError)  
**Default**: <code>&quot;&#x27;Internal Server Error&#x27;&quot;</code>  
<a name="InternalServerError.statusCode"></a>

### InternalServerError.statusCode : <code>number</code>
**Kind**: static constant of [<code>InternalServerError</code>](#InternalServerError)  
**Default**: <code>500</code>  
<a name="InternalServerError.message"></a>

### InternalServerError.message : <code>string</code>
**Kind**: static constant of [<code>InternalServerError</code>](#InternalServerError)  
**Default**: <code>&quot;&#x27;Internal Server Error&#x27;&quot;</code>  
<a name="NotImplemented"></a>

## NotImplemented ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 501 Not implemented</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [NotImplemented](#NotImplemented) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#NotImplemented.statusCode) : <code>number</code>
    * [.message](#NotImplemented.message) : <code>string</code>
    * [.statusCode](#NotImplemented.statusCode) : <code>number</code>
    * [.message](#NotImplemented.message) : <code>string</code>

<a name="NotImplemented.statusCode"></a>

### NotImplemented.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotImplemented</code>](#NotImplemented)  
**Default**: <code>501</code>  
<a name="NotImplemented.message"></a>

### NotImplemented.message : <code>string</code>
**Kind**: static constant of [<code>NotImplemented</code>](#NotImplemented)  
**Default**: <code>&quot;&#x27;Not Implemented&#x27;&quot;</code>  
<a name="NotImplemented.statusCode"></a>

### NotImplemented.statusCode : <code>number</code>
**Kind**: static constant of [<code>NotImplemented</code>](#NotImplemented)  
**Default**: <code>501</code>  
<a name="NotImplemented.message"></a>

### NotImplemented.message : <code>string</code>
**Kind**: static constant of [<code>NotImplemented</code>](#NotImplemented)  
**Default**: <code>&quot;&#x27;Not Implemented&#x27;&quot;</code>  
<a name="BadGateway"></a>

## BadGateway ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 502 Bad gateway</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [BadGateway](#BadGateway) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#BadGateway.statusCode) : <code>number</code>
    * [.message](#BadGateway.message) : <code>string</code>
    * [.statusCode](#BadGateway.statusCode) : <code>number</code>
    * [.message](#BadGateway.message) : <code>string</code>

<a name="BadGateway.statusCode"></a>

### BadGateway.statusCode : <code>number</code>
**Kind**: static constant of [<code>BadGateway</code>](#BadGateway)  
**Default**: <code>502</code>  
<a name="BadGateway.message"></a>

### BadGateway.message : <code>string</code>
**Kind**: static constant of [<code>BadGateway</code>](#BadGateway)  
**Default**: <code>&quot;&#x27;Bad Gateway&#x27;&quot;</code>  
<a name="BadGateway.statusCode"></a>

### BadGateway.statusCode : <code>number</code>
**Kind**: static constant of [<code>BadGateway</code>](#BadGateway)  
**Default**: <code>502</code>  
<a name="BadGateway.message"></a>

### BadGateway.message : <code>string</code>
**Kind**: static constant of [<code>BadGateway</code>](#BadGateway)  
**Default**: <code>&quot;&#x27;Bad Gateway&#x27;&quot;</code>  
<a name="ServiceUnavailable"></a>

## ServiceUnavailable ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 503 Service unavailable</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [ServiceUnavailable](#ServiceUnavailable) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#ServiceUnavailable.statusCode) : <code>number</code>
    * [.message](#ServiceUnavailable.message) : <code>string</code>
    * [.statusCode](#ServiceUnavailable.statusCode) : <code>number</code>
    * [.message](#ServiceUnavailable.message) : <code>string</code>

<a name="ServiceUnavailable.statusCode"></a>

### ServiceUnavailable.statusCode : <code>number</code>
**Kind**: static constant of [<code>ServiceUnavailable</code>](#ServiceUnavailable)  
**Default**: <code>503</code>  
<a name="ServiceUnavailable.message"></a>

### ServiceUnavailable.message : <code>string</code>
**Kind**: static constant of [<code>ServiceUnavailable</code>](#ServiceUnavailable)  
**Default**: <code>&quot;&#x27;Service Unavailable&#x27;&quot;</code>  
<a name="ServiceUnavailable.statusCode"></a>

### ServiceUnavailable.statusCode : <code>number</code>
**Kind**: static constant of [<code>ServiceUnavailable</code>](#ServiceUnavailable)  
**Default**: <code>503</code>  
<a name="ServiceUnavailable.message"></a>

### ServiceUnavailable.message : <code>string</code>
**Kind**: static constant of [<code>ServiceUnavailable</code>](#ServiceUnavailable)  
**Default**: <code>&quot;&#x27;Service Unavailable&#x27;&quot;</code>  
<a name="GatewayTimeout"></a>

## GatewayTimeout ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 504 Gateway timeout</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [GatewayTimeout](#GatewayTimeout) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#GatewayTimeout.statusCode) : <code>number</code>
    * [.message](#GatewayTimeout.message) : <code>string</code>
    * [.statusCode](#GatewayTimeout.statusCode) : <code>number</code>
    * [.message](#GatewayTimeout.message) : <code>string</code>

<a name="GatewayTimeout.statusCode"></a>

### GatewayTimeout.statusCode : <code>number</code>
**Kind**: static constant of [<code>GatewayTimeout</code>](#GatewayTimeout)  
**Default**: <code>504</code>  
<a name="GatewayTimeout.message"></a>

### GatewayTimeout.message : <code>string</code>
**Kind**: static constant of [<code>GatewayTimeout</code>](#GatewayTimeout)  
**Default**: <code>&quot;&#x27;Gateway Timeout&#x27;&quot;</code>  
<a name="GatewayTimeout.statusCode"></a>

### GatewayTimeout.statusCode : <code>number</code>
**Kind**: static constant of [<code>GatewayTimeout</code>](#GatewayTimeout)  
**Default**: <code>504</code>  
<a name="GatewayTimeout.message"></a>

### GatewayTimeout.message : <code>string</code>
**Kind**: static constant of [<code>GatewayTimeout</code>](#GatewayTimeout)  
**Default**: <code>&quot;&#x27;Gateway Timeout&#x27;&quot;</code>  
<a name="HTTPVersionNotSupported"></a>

## HTTPVersionNotSupported ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 505 HTTP version not supported</p>

**Kind**: global class  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [HTTPVersionNotSupported](#HTTPVersionNotSupported) ⇐ [<code>ServerError</code>](#ServerError)
    * [.statusCode](#HTTPVersionNotSupported.statusCode) : <code>number</code>
    * [.message](#HTTPVersionNotSupported.message) : <code>string</code>
    * [.statusCode](#HTTPVersionNotSupported.statusCode) : <code>number</code>
    * [.message](#HTTPVersionNotSupported.message) : <code>string</code>

<a name="HTTPVersionNotSupported.statusCode"></a>

### HTTPVersionNotSupported.statusCode : <code>number</code>
**Kind**: static constant of [<code>HTTPVersionNotSupported</code>](#HTTPVersionNotSupported)  
**Default**: <code>505</code>  
<a name="HTTPVersionNotSupported.message"></a>

### HTTPVersionNotSupported.message : <code>string</code>
**Kind**: static constant of [<code>HTTPVersionNotSupported</code>](#HTTPVersionNotSupported)  
**Default**: <code>&quot;&#x27;HTTP Version Not Supported&#x27;&quot;</code>  
<a name="HTTPVersionNotSupported.statusCode"></a>

### HTTPVersionNotSupported.statusCode : <code>number</code>
**Kind**: static constant of [<code>HTTPVersionNotSupported</code>](#HTTPVersionNotSupported)  
**Default**: <code>505</code>  
<a name="HTTPVersionNotSupported.message"></a>

### HTTPVersionNotSupported.message : <code>string</code>
**Kind**: static constant of [<code>HTTPVersionNotSupported</code>](#HTTPVersionNotSupported)  
**Default**: <code>&quot;&#x27;HTTP Version Not Supported&#x27;&quot;</code>  
<a name="NetworkReadTimeout"></a>

## NetworkReadTimeout ⇐ [<code>ServerError</code>](#ServerError)
<p>HTTP/1.1 508 Network read timeout</p>

**Kind**: global class  
**Summary**: <p>Response for HTTP/1.1 508 Network read timeout</p>.  
**Extends**: [<code>ServerError</code>](#ServerError)  

* [NetworkReadTimeout](#NetworkReadTimeout) ⇐ [<code>ServerError</code>](#ServerError)
    * [new exports.NetworkReadTimeout()](#new_NetworkReadTimeout_new)
    * [new exports.NetworkReadTimeout()](#new_NetworkReadTimeout_new)
    * [.statusCode](#NetworkReadTimeout.statusCode) : <code>number</code>
    * [.message](#NetworkReadTimeout.message) : <code>string</code>
    * [.statusCode](#NetworkReadTimeout.statusCode) : <code>number</code>
    * [.message](#NetworkReadTimeout.message) : <code>string</code>

<a name="new_NetworkReadTimeout_new"></a>

### new exports.NetworkReadTimeout()
<p>Response for HTTP/1.1 508 Network read timeout</p>

<a name="new_NetworkReadTimeout_new"></a>

### new exports.NetworkReadTimeout()
<p>Response for HTTP/1.1 508 Network read timeout</p>

<a name="NetworkReadTimeout.statusCode"></a>

### NetworkReadTimeout.statusCode : <code>number</code>
**Kind**: static constant of [<code>NetworkReadTimeout</code>](#NetworkReadTimeout)  
**Default**: <code>508</code>  
<a name="NetworkReadTimeout.message"></a>

### NetworkReadTimeout.message : <code>string</code>
**Kind**: static constant of [<code>NetworkReadTimeout</code>](#NetworkReadTimeout)  
**Default**: <code>&quot;&#x27;Network read timeout error&#x27;&quot;</code>  
<a name="NetworkReadTimeout.statusCode"></a>

### NetworkReadTimeout.statusCode : <code>number</code>
**Kind**: static constant of [<code>NetworkReadTimeout</code>](#NetworkReadTimeout)  
**Default**: <code>508</code>  
<a name="NetworkReadTimeout.message"></a>

### NetworkReadTimeout.message : <code>string</code>
**Kind**: static constant of [<code>NetworkReadTimeout</code>](#NetworkReadTimeout)  
**Default**: <code>&quot;&#x27;Network read timeout error&#x27;&quot;</code>  
