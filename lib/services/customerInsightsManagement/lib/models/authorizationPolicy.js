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
 * Initializes a new instance of the AuthorizationPolicy class.
 * @constructor
 * The authorization policy.
 *
 * @member {string} [policyName] Name of the policy.
 *
 * @member {array} permissions The permissions associated with the policy.
 *
 * @member {string} [primaryKey] Primary key assiciated with the policy.
 *
 * @member {string} [secondaryKey] Secondary key assiciated with the policy.
 *
 */
class AuthorizationPolicy {
  constructor() {
  }

  /**
   * Defines the metadata of AuthorizationPolicy
   *
   * @returns {object} metadata of AuthorizationPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AuthorizationPolicy',
      type: {
        name: 'Composite',
        className: 'AuthorizationPolicy',
        modelProperties: {
          policyName: {
            required: false,
            readOnly: true,
            serializedName: 'policyName',
            type: {
              name: 'String'
            }
          },
          permissions: {
            required: true,
            serializedName: 'permissions',
            constraints: {
              UniqueItems: true
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PermissionTypesElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'Read', 'Write', 'Manage' ]
                  }
              }
            }
          },
          primaryKey: {
            required: false,
            serializedName: 'primaryKey',
            type: {
              name: 'String'
            }
          },
          secondaryKey: {
            required: false,
            serializedName: 'secondaryKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AuthorizationPolicy;