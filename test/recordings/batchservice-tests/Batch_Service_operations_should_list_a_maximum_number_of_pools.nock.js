// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2017-05-01.5.0&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool1\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D4A457BC7ADED2\",\"lastModified\":\"2017-05-26T16:53:29.7361618Z\",\"creationTime\":\"2017-05-26T16:44:53.6675143Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-05-26T16:44:53.6675143Z\",\"allocationState\":\"stopping\",\"allocationStateTransitionTime\":\"2017-05-26T16:53:29.7361618Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":3,\"targetDedicatedNodes\":2,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"userAccounts\":[\r\n        {\r\n          \"name\":\"nonAdminUser\",\"elevationLevel\":\"nonadmin\"\r\n        }\r\n      ],\"metadata\":[\r\n        {\r\n          \"name\":\"foo2\",\"value\":\"bar2\"\r\n        }\r\n      ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools?api-version=2017-05-01.5.0&maxresults=1&$skiptoken=WATV2:0aC%5EW/cuTOCfeI5m%5EItsk7DqmM3xjtbD15hI3m83drZXJ5dY1hKYQSdzTTWVDmWkR3uEviZMCQBRnvM1goLLTX0NfRN83UyPQX1CnloSyGoeLM8%5Ek9aBnQDi9Gt%5Ev1ReJjnc3eOoLoW3tmyaquzlECq%5E2yXwZbxTCXoSCMLIBi%5EpjSV8PM5q%5E5JaCN4jwSK0cIlXrRAoyrbsu3OtVcug39WO17JnusKg%5EgohJ5kRdAMkEC4nH9M1RIZm/gterVBZxGTM%5Efr2EbBEsy2pjW2cddvZ6zuupEYy8IEq093y29g=:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'df576df4-6f22-493b-b8e3-feeeb7506790',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:53:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2017-05-01.5.0&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool1\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D4A457BC7ADED2\",\"lastModified\":\"2017-05-26T16:53:29.7361618Z\",\"creationTime\":\"2017-05-26T16:44:53.6675143Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-05-26T16:44:53.6675143Z\",\"allocationState\":\"stopping\",\"allocationStateTransitionTime\":\"2017-05-26T16:53:29.7361618Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":3,\"targetDedicatedNodes\":2,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"userAccounts\":[\r\n        {\r\n          \"name\":\"nonAdminUser\",\"elevationLevel\":\"nonadmin\"\r\n        }\r\n      ],\"metadata\":[\r\n        {\r\n          \"name\":\"foo2\",\"value\":\"bar2\"\r\n        }\r\n      ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools?api-version=2017-05-01.5.0&maxresults=1&$skiptoken=WATV2:0aC%5EW/cuTOCfeI5m%5EItsk7DqmM3xjtbD15hI3m83drZXJ5dY1hKYQSdzTTWVDmWkR3uEviZMCQBRnvM1goLLTX0NfRN83UyPQX1CnloSyGoeLM8%5Ek9aBnQDi9Gt%5Ev1ReJjnc3eOoLoW3tmyaquzlECq%5E2yXwZbxTCXoSCMLIBi%5EpjSV8PM5q%5E5JaCN4jwSK0cIlXrRAoyrbsu3OtVcug39WO17JnusKg%5EgohJ5kRdAMkEC4nH9M1RIZm/gterVBZxGTM%5Efr2EbBEsy2pjW2cddvZ6zuupEYy8IEq093y29g=:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'df576df4-6f22-493b-b8e3-feeeb7506790',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:53:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2017-05-01.5.0&maxresults=1&$skiptoken=WATV2:0aC%5EW/cuTOCfeI5m%5EItsk7DqmM3xjtbD15hI3m83drZXJ5dY1hKYQSdzTTWVDmWkR3uEviZMCQBRnvM1goLLTX0NfRN83UyPQX1CnloSyGoeLM8%5Ek9aBnQDi9Gt%5Ev1ReJjnc3eOoLoW3tmyaquzlECq%5E2yXwZbxTCXoSCMLIBi%5EpjSV8PM5q%5E5JaCN4jwSK0cIlXrRAoyrbsu3OtVcug39WO17JnusKg%5EgohJ5kRdAMkEC4nH9M1RIZm/gterVBZxGTM%5Efr2EbBEsy2pjW2cddvZ6zuupEYy8IEq093y29g=:1$1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool2\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2\",\"eTag\":\"0x8D4A457BD5F0996\",\"lastModified\":\"2017-05-26T16:53:31.2314774Z\",\"creationTime\":\"2017-05-26T16:53:30.31421Z\",\"state\":\"upgrading\",\"stateTransitionTime\":\"2017-05-26T16:53:31.2314774Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2017-05-26T16:53:30.4731439Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":0,\"targetDedicatedNodes\":0,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"WA-GUEST-OS-4.32_201605-01\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2030c942-884c-43c8-b16f-c007a07f8202',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:53:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2017-05-01.5.0&maxresults=1&$skiptoken=WATV2:0aC%5EW/cuTOCfeI5m%5EItsk7DqmM3xjtbD15hI3m83drZXJ5dY1hKYQSdzTTWVDmWkR3uEviZMCQBRnvM1goLLTX0NfRN83UyPQX1CnloSyGoeLM8%5Ek9aBnQDi9Gt%5Ev1ReJjnc3eOoLoW3tmyaquzlECq%5E2yXwZbxTCXoSCMLIBi%5EpjSV8PM5q%5E5JaCN4jwSK0cIlXrRAoyrbsu3OtVcug39WO17JnusKg%5EgohJ5kRdAMkEC4nH9M1RIZm/gterVBZxGTM%5Efr2EbBEsy2pjW2cddvZ6zuupEYy8IEq093y29g=:1$1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool2\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2\",\"eTag\":\"0x8D4A457BD5F0996\",\"lastModified\":\"2017-05-26T16:53:31.2314774Z\",\"creationTime\":\"2017-05-26T16:53:30.31421Z\",\"state\":\"upgrading\",\"stateTransitionTime\":\"2017-05-26T16:53:31.2314774Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2017-05-26T16:53:30.4731439Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":0,\"targetDedicatedNodes\":0,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"WA-GUEST-OS-4.32_201605-01\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2030c942-884c-43c8-b16f-c007a07f8202',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:53:32 GMT',
  connection: 'close' });
 return result; }]];