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
 * Initializes a new instance of the TroubleshootingRecommendedActions class.
 * @constructor
 * Recommended actions based on discovered issues.
 *
 * @member {string} [actionId] ID of the recommended action.
 *
 * @member {string} [actionText] Description of recommended actions.
 *
 * @member {string} [actionUri] The uri linking to a documentation for the
 * recommended troubleshooting actions.
 *
 * @member {string} [actionUriText] The information from the URI for the
 * recommended troubleshooting actions.
 *
 */
class TroubleshootingRecommendedActions {
  constructor() {
  }

  /**
   * Defines the metadata of TroubleshootingRecommendedActions
   *
   * @returns {object} metadata of TroubleshootingRecommendedActions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TroubleshootingRecommendedActions',
      type: {
        name: 'Composite',
        className: 'TroubleshootingRecommendedActions',
        modelProperties: {
          actionId: {
            required: false,
            serializedName: 'actionId',
            type: {
              name: 'String'
            }
          },
          actionText: {
            required: false,
            serializedName: 'actionText',
            type: {
              name: 'String'
            }
          },
          actionUri: {
            required: false,
            serializedName: 'actionUri',
            type: {
              name: 'String'
            }
          },
          actionUriText: {
            required: false,
            serializedName: 'actionUriText',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TroubleshootingRecommendedActions;