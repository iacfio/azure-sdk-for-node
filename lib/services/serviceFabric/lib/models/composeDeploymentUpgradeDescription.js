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
 * Describes the parameters for a compose deployment upgrade.
 *
 */
class ComposeDeploymentUpgradeDescription {
  /**
   * Create a ComposeDeploymentUpgradeDescription.
   * @member {string} deploymentName
   * @member {string} composeFileContent The content of the compose file that
   * describes the deployment to create.
   * @member {object} [registryCredential]
   * @member {string} [registryCredential.registryUserName] The user name to
   * connect to container registry.
   * @member {string} [registryCredential.registryPassword] The password for
   * supplied username to connect to container registry.
   * @member {boolean} [registryCredential.passwordEncrypted] Indicates that
   * supplied container registry password is encrypted.
   * @member {string} upgradeKind Possible values include: 'Invalid',
   * 'Rolling'. Default value: 'Rolling' .
   * @member {string} [rollingUpgradeMode] Possible values include: 'Invalid',
   * 'UnmonitoredAuto', 'UnmonitoredManual', 'Monitored'. Default value:
   * 'UnmonitoredAuto' .
   * @member {number} [upgradeReplicaSetCheckTimeoutInSeconds]
   * @member {boolean} [forceRestart]
   * @member {object} [monitoringPolicy]
   * @member {string} [monitoringPolicy.failureAction] Possible values include:
   * 'Invalid', 'Rollback', 'Manual'
   * @member {string} [monitoringPolicy.healthCheckWaitDurationInMilliseconds]
   * @member {string}
   * [monitoringPolicy.healthCheckStableDurationInMilliseconds]
   * @member {string} [monitoringPolicy.healthCheckRetryTimeoutInMilliseconds]
   * @member {string} [monitoringPolicy.upgradeTimeoutInMilliseconds]
   * @member {string} [monitoringPolicy.upgradeDomainTimeoutInMilliseconds]
   * @member {object} [applicationHealthPolicy]
   * @member {boolean} [applicationHealthPolicy.considerWarningAsError]
   * Indicates whether warnings are treated with the same severity as errors.
   * @member {number}
   * [applicationHealthPolicy.maxPercentUnhealthyDeployedApplications] The
   * maximum allowed percentage of unhealthy deployed applications. Allowed
   * values are Byte values from zero to 100.
   * The percentage represents the maximum tolerated percentage of deployed
   * applications that can be unhealthy before the application is considered in
   * error.
   * This is calculated by dividing the number of unhealthy deployed
   * applications over the number of nodes where the application is currently
   * deployed on in the cluster.
   * The computation rounds up to tolerate one failure on small numbers of
   * nodes. Default percentage is zero.
   * @member {object} [applicationHealthPolicy.defaultServiceTypeHealthPolicy]
   * @member {number}
   * [applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyPartitionsPerService]
   * The maximum allowed percentage of unhealthy partitions per service.
   * Allowed values are Byte values from zero to 100
   *
   * The percentage represents the maximum tolerated percentage of partitions
   * that can be unhealthy before the service is considered in error.
   * If the percentage is respected but there is at least one unhealthy
   * partition, the health is evaluated as Warning.
   * The percentage is calculated by dividing the number of unhealthy
   * partitions over the total number of partitions in the service.
   * The computation rounds up to tolerate one failure on small numbers of
   * partitions. Default percentage is zero.
   * @member {number}
   * [applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyReplicasPerPartition]
   * The maximum allowed percentage of unhealthy replicas per partition.
   * Allowed values are Byte values from zero to 100.
   *
   * The percentage represents the maximum tolerated percentage of replicas
   * that can be unhealthy before the partition is considered in error.
   * If the percentage is respected but there is at least one unhealthy
   * replica, the health is evaluated as Warning.
   * The percentage is calculated by dividing the number of unhealthy replicas
   * over the total number of replicas in the partition.
   * The computation rounds up to tolerate one failure on small numbers of
   * replicas. Default percentage is zero.
   * @member {number}
   * [applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyServices]
   * The maximum maximum allowed percentage of unhealthy services. Allowed
   * values are Byte values from zero to 100.
   *
   * The percentage represents the maximum tolerated percentage of services
   * that can be unhealthy before the application is considered in error.
   * If the percentage is respected but there is at least one unhealthy
   * service, the health is evaluated as Warning.
   * This is calculated by dividing the number of unhealthy services of the
   * specific service type over the total number of services of the specific
   * service type.
   * The computation rounds up to tolerate one failure on small numbers of
   * services. Default percentage is zero.
   * @member {array} [applicationHealthPolicy.serviceTypeHealthPolicyMap]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComposeDeploymentUpgradeDescription
   *
   * @returns {object} metadata of ComposeDeploymentUpgradeDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComposeDeploymentUpgradeDescription',
      type: {
        name: 'Composite',
        className: 'ComposeDeploymentUpgradeDescription',
        modelProperties: {
          deploymentName: {
            required: true,
            serializedName: 'DeploymentName',
            type: {
              name: 'String'
            }
          },
          composeFileContent: {
            required: true,
            serializedName: 'ComposeFileContent',
            type: {
              name: 'String'
            }
          },
          registryCredential: {
            required: false,
            serializedName: 'RegistryCredential',
            type: {
              name: 'Composite',
              className: 'RegistryCredential'
            }
          },
          upgradeKind: {
            required: true,
            serializedName: 'UpgradeKind',
            defaultValue: 'Rolling',
            type: {
              name: 'String'
            }
          },
          rollingUpgradeMode: {
            required: false,
            serializedName: 'RollingUpgradeMode',
            defaultValue: 'UnmonitoredAuto',
            type: {
              name: 'String'
            }
          },
          upgradeReplicaSetCheckTimeoutInSeconds: {
            required: false,
            serializedName: 'UpgradeReplicaSetCheckTimeoutInSeconds',
            type: {
              name: 'Number'
            }
          },
          forceRestart: {
            required: false,
            serializedName: 'ForceRestart',
            type: {
              name: 'Boolean'
            }
          },
          monitoringPolicy: {
            required: false,
            serializedName: 'MonitoringPolicy',
            type: {
              name: 'Composite',
              className: 'MonitoringPolicyDescription'
            }
          },
          applicationHealthPolicy: {
            required: false,
            serializedName: 'ApplicationHealthPolicy',
            type: {
              name: 'Composite',
              className: 'ApplicationHealthPolicy'
            }
          }
        }
      }
    };
  }
}

module.exports = ComposeDeploymentUpgradeDescription;
