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

/**
 * @class
 * Initializes a new instance of the KeyVerifyResult class.
 * @constructor
 * The key verify result.
 *
 * @member {boolean} [value] True if the signature is verified, otherwise
 * false.
 *
 */
class KeyVerifyResult {
  constructor() {
  }

  /**
   * Defines the metadata of KeyVerifyResult
   *
   * @returns {object} metadata of KeyVerifyResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyVerifyResult',
      type: {
        name: 'Composite',
        className: 'KeyVerifyResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = KeyVerifyResult;