// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '06adb0b3-baaa-4e5f-9df6-ca770f7902cd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .post('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/start?api-version=2016-04-02')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint4770.azureedge-test.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '474',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/caa6584a-fb03-4ba1-a363-f682878afc84/profileresults/cdnTestProfile4205/endpointresults/cdnTestEndpoint4770?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '5fe8c8c0-e7fa-467b-b8d6-2cc2071d024c',
  'x-ms-client-request-id': '138e2052-5700-4905-a15b-2ec2911a3bf9',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/caa6584a-fb03-4ba1-a363-f682878afc84?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1164',
  'x-ms-correlation-request-id': '79a2d769-7c74-4eb5-a6f6-e864ea7625c7',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230930Z:79a2d769-7c74-4eb5-a6f6-e864ea7625c7',
  date: 'Mon, 25 Apr 2016 23:09:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .post('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/start?api-version=2016-04-02')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint4770.azureedge-test.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '474',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/caa6584a-fb03-4ba1-a363-f682878afc84/profileresults/cdnTestProfile4205/endpointresults/cdnTestEndpoint4770?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '5fe8c8c0-e7fa-467b-b8d6-2cc2071d024c',
  'x-ms-client-request-id': '138e2052-5700-4905-a15b-2ec2911a3bf9',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/caa6584a-fb03-4ba1-a363-f682878afc84?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1164',
  'x-ms-correlation-request-id': '79a2d769-7c74-4eb5-a6f6-e864ea7625c7',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230930Z:79a2d769-7c74-4eb5-a6f6-e864ea7625c7',
  date: 'Mon, 25 Apr 2016 23:09:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/caa6584a-fb03-4ba1-a363-f682878afc84?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a5b35522-09c0-40fa-93f3-c4d299f617cb',
  'x-ms-client-request-id': 'd41a36be-76e1-4b3d-b0cd-d411d66af1e6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14849',
  'x-ms-correlation-request-id': '5f0bfde5-a9d8-408a-a50c-4b2bb45c1a6d',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T231000Z:5f0bfde5-a9d8-408a-a50c-4b2bb45c1a6d',
  date: 'Mon, 25 Apr 2016 23:10:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/caa6584a-fb03-4ba1-a363-f682878afc84?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a5b35522-09c0-40fa-93f3-c4d299f617cb',
  'x-ms-client-request-id': 'd41a36be-76e1-4b3d-b0cd-d411d66af1e6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14849',
  'x-ms-correlation-request-id': '5f0bfde5-a9d8-408a-a50c-4b2bb45c1a6d',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T231000Z:5f0bfde5-a9d8-408a-a50c-4b2bb45c1a6d',
  date: 'Mon, 25 Apr 2016 23:10:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins/newname?api-version=2016-04-02', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'af1d2dd5-97ee-488f-8634-e87b46688db9',
  'x-ms-client-request-id': '35b5f7fa-6dae-4e19-9b1b-8e23e4620510',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1163',
  'x-ms-correlation-request-id': '17badc50-394a-4d58-b0f3-991d890ce27d',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T231003Z:17badc50-394a-4d58-b0f3-991d890ce27d',
  date: 'Mon, 25 Apr 2016 23:10:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins/newname?api-version=2016-04-02', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'af1d2dd5-97ee-488f-8634-e87b46688db9',
  'x-ms-client-request-id': '35b5f7fa-6dae-4e19-9b1b-8e23e4620510',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1163',
  'x-ms-correlation-request-id': '17badc50-394a-4d58-b0f3-991d890ce27d',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T231003Z:17badc50-394a-4d58-b0f3-991d890ce27d',
  date: 'Mon, 25 Apr 2016 23:10:03 GMT',
  connection: 'close' });
 return result; }]];