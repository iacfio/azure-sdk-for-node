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

const models = require('./index');

/**
 * A database restore point.
 *
 * @extends models['ProxyResource']
 */
class RestorePoint extends models['ProxyResource'] {
  /**
   * Create a RestorePoint.
   * @member {string} [restorePointType] The restore point type of the database
   * restore point. Possible values include: 'DISCRETE', 'CONTINUOUS'
   * @member {date} [restorePointCreationDate] Restore point creation time
   * (ISO8601 format). Populated when restorePointType = CONTINUOUS. Null
   * otherwise.
   * @member {date} [earliestRestoreDate] Earliest restore time (ISO8601
   * format). Populated when restorePointType = DISCRETE. Null otherwise.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RestorePoint
   *
   * @returns {object} metadata of RestorePoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RestorePoint',
      type: {
        name: 'Composite',
        className: 'RestorePoint',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          restorePointType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.restorePointType',
            type: {
              name: 'Enum',
              allowedValues: [ 'DISCRETE', 'CONTINUOUS' ]
            }
          },
          restorePointCreationDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.restorePointCreationDate',
            type: {
              name: 'DateTime'
            }
          },
          earliestRestoreDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.earliestRestoreDate',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = RestorePoint;
