/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Lists a collection of current quota counter periods associated with the
 * counter-key configured in the policy on the specified service instance. The
 * api does not support paging yet.
 *
 * @param {string} resourceGroupName The name of the resource group.
 *
 * @param {string} serviceName The name of the API Management service.
 *
 * @param {string} quotaCounterKey Quota counter key identifier.This is the
 * result of expression defined in counter-key attribute of the quota-by-key
 * policy.For Example, if you specify counter-key="boo" in the policy, then
 * it’s accessible by "boo" counter key. But if it’s defined as
 * counter-key="@("b"+"a")" then it will be accessible by "ba" key
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link QuotaCounterCollection} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listByService(resourceGroupName, serviceName, quotaCounterKey, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (serviceName === null || serviceName === undefined || typeof serviceName.valueOf() !== 'string') {
      throw new Error('serviceName cannot be null or undefined and it must be of type string.');
    }
    if (serviceName !== null && serviceName !== undefined) {
      if (serviceName.length > 50)
      {
        throw new Error('"serviceName" should satisfy the constraint - "MaxLength": 50');
      }
      if (serviceName.length < 1)
      {
        throw new Error('"serviceName" should satisfy the constraint - "MinLength": 1');
      }
      if (serviceName.match(/^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/) === null)
      {
        throw new Error('"serviceName" should satisfy the constraint - "Pattern": /^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/');
      }
    }
    if (quotaCounterKey === null || quotaCounterKey === undefined || typeof quotaCounterKey.valueOf() !== 'string') {
      throw new Error('quotaCounterKey cannot be null or undefined and it must be of type string.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/quotas/{quotaCounterKey}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{serviceName}', encodeURIComponent(serviceName));
  requestUrl = requestUrl.replace('{quotaCounterKey}', encodeURIComponent(quotaCounterKey));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['QuotaCounterCollection']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Updates all the quota counter values specified with the existing quota
 * counter key to a value in the specified service instance. This should be
 * used for reset of the quota counter values.
 *
 * @param {string} resourceGroupName The name of the resource group.
 *
 * @param {string} serviceName The name of the API Management service.
 *
 * @param {string} quotaCounterKey Quota counter key identifier.This is the
 * result of expression defined in counter-key attribute of the quota-by-key
 * policy.For Example, if you specify counter-key="boo" in the policy, then
 * it’s accessible by "boo" counter key. But if it’s defined as
 * counter-key="@("b"+"a")" then it will be accessible by "ba" key
 *
 * @param {object} parameters The value of the quota counter to be applied to
 * all quota counter periods.
 *
 * @param {number} [parameters.callsCount] Number of times Counter was called.
 *
 * @param {number} [parameters.kbTransferred] Data Transferred in KiloBytes.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _update(resourceGroupName, serviceName, quotaCounterKey, parameters, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (serviceName === null || serviceName === undefined || typeof serviceName.valueOf() !== 'string') {
      throw new Error('serviceName cannot be null or undefined and it must be of type string.');
    }
    if (serviceName !== null && serviceName !== undefined) {
      if (serviceName.length > 50)
      {
        throw new Error('"serviceName" should satisfy the constraint - "MaxLength": 50');
      }
      if (serviceName.length < 1)
      {
        throw new Error('"serviceName" should satisfy the constraint - "MinLength": 1');
      }
      if (serviceName.match(/^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/) === null)
      {
        throw new Error('"serviceName" should satisfy the constraint - "Pattern": /^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/');
      }
    }
    if (quotaCounterKey === null || quotaCounterKey === undefined || typeof quotaCounterKey.valueOf() !== 'string') {
      throw new Error('quotaCounterKey cannot be null or undefined and it must be of type string.');
    }
    if (parameters === null || parameters === undefined) {
      throw new Error('parameters cannot be null or undefined.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/quotas/{quotaCounterKey}';
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{serviceName}', encodeURIComponent(serviceName));
  requestUrl = requestUrl.replace('{quotaCounterKey}', encodeURIComponent(quotaCounterKey));
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PATCH';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (parameters !== null && parameters !== undefined) {
      let requestModelMapper = new client.models['QuotaCounterValueContractProperties']().mapper();
      requestModel = client.serialize(requestModelMapper, parameters, 'parameters');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(parameters, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 204) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a QuotaByCounterKeys. */
class QuotaByCounterKeys {
  /**
   * Create a QuotaByCounterKeys.
   * @param {ApiManagementClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._listByService = _listByService;
    this._update = _update;
  }

  /**
   * Lists a collection of current quota counter periods associated with the
   * counter-key configured in the policy on the specified service instance. The
   * api does not support paging yet.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} serviceName The name of the API Management service.
   *
   * @param {string} quotaCounterKey Quota counter key identifier.This is the
   * result of expression defined in counter-key attribute of the quota-by-key
   * policy.For Example, if you specify counter-key="boo" in the policy, then
   * it’s accessible by "boo" counter key. But if it’s defined as
   * counter-key="@("b"+"a")" then it will be accessible by "ba" key
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<QuotaCounterCollection>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listByServiceWithHttpOperationResponse(resourceGroupName, serviceName, quotaCounterKey, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listByService(resourceGroupName, serviceName, quotaCounterKey, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Lists a collection of current quota counter periods associated with the
   * counter-key configured in the policy on the specified service instance. The
   * api does not support paging yet.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} serviceName The name of the API Management service.
   *
   * @param {string} quotaCounterKey Quota counter key identifier.This is the
   * result of expression defined in counter-key attribute of the quota-by-key
   * policy.For Example, if you specify counter-key="boo" in the policy, then
   * it’s accessible by "boo" counter key. But if it’s defined as
   * counter-key="@("b"+"a")" then it will be accessible by "ba" key
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {QuotaCounterCollection} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link QuotaCounterCollection} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listByService(resourceGroupName, serviceName, quotaCounterKey, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listByService(resourceGroupName, serviceName, quotaCounterKey, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listByService(resourceGroupName, serviceName, quotaCounterKey, options, optionalCallback);
    }
  }

  /**
   * Updates all the quota counter values specified with the existing quota
   * counter key to a value in the specified service instance. This should be
   * used for reset of the quota counter values.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} serviceName The name of the API Management service.
   *
   * @param {string} quotaCounterKey Quota counter key identifier.This is the
   * result of expression defined in counter-key attribute of the quota-by-key
   * policy.For Example, if you specify counter-key="boo" in the policy, then
   * it’s accessible by "boo" counter key. But if it’s defined as
   * counter-key="@("b"+"a")" then it will be accessible by "ba" key
   *
   * @param {object} parameters The value of the quota counter to be applied to
   * all quota counter periods.
   *
   * @param {number} [parameters.callsCount] Number of times Counter was called.
   *
   * @param {number} [parameters.kbTransferred] Data Transferred in KiloBytes.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  updateWithHttpOperationResponse(resourceGroupName, serviceName, quotaCounterKey, parameters, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._update(resourceGroupName, serviceName, quotaCounterKey, parameters, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Updates all the quota counter values specified with the existing quota
   * counter key to a value in the specified service instance. This should be
   * used for reset of the quota counter values.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} serviceName The name of the API Management service.
   *
   * @param {string} quotaCounterKey Quota counter key identifier.This is the
   * result of expression defined in counter-key attribute of the quota-by-key
   * policy.For Example, if you specify counter-key="boo" in the policy, then
   * it’s accessible by "boo" counter key. But if it’s defined as
   * counter-key="@("b"+"a")" then it will be accessible by "ba" key
   *
   * @param {object} parameters The value of the quota counter to be applied to
   * all quota counter periods.
   *
   * @param {number} [parameters.callsCount] Number of times Counter was called.
   *
   * @param {number} [parameters.kbTransferred] Data Transferred in KiloBytes.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  update(resourceGroupName, serviceName, quotaCounterKey, parameters, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._update(resourceGroupName, serviceName, quotaCounterKey, parameters, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._update(resourceGroupName, serviceName, quotaCounterKey, parameters, options, optionalCallback);
    }
  }

}

module.exports = QuotaByCounterKeys;
