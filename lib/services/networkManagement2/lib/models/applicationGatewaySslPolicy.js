/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ApplicationGatewaySslPolicy class.
 * @constructor
 * Application gateway SSL policy.
 *
 * @member {array} [disabledSslProtocols] SSL protocols to be disabled on
 * application gateway.
 *
 */
class ApplicationGatewaySslPolicy {
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationGatewaySslPolicy
   *
   * @returns {object} metadata of ApplicationGatewaySslPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewaySslPolicy',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewaySslPolicy',
        modelProperties: {
          disabledSslProtocols: {
            required: false,
            serializedName: 'disabledSslProtocols',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewaySslPolicy;