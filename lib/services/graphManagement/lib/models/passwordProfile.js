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
 * Initializes a new instance of the PasswordProfile class.
 * @constructor
 * The password profile associated with a user.
 *
 * @member {string} password Password
 *
 * @member {boolean} [forceChangePasswordNextLogin] Whether to force a password
 * change on next login.
 *
 */
class PasswordProfile {
  constructor() {
  }

  /**
   * Defines the metadata of PasswordProfile
   *
   * @returns {object} metadata of PasswordProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PasswordProfile',
      type: {
        name: 'Composite',
        className: 'PasswordProfile',
        modelProperties: {
          password: {
            required: true,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          forceChangePasswordNextLogin: {
            required: false,
            serializedName: 'forceChangePasswordNextLogin',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = PasswordProfile;