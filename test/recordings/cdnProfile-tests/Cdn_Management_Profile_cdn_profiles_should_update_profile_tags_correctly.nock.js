// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '06adb0b3-baaa-4e5f-9df6-ca770f7902cd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286?api-version=2016-04-02', '*')
  .reply(202, "{\r\n  \"name\":\"cdnTestProfile2286\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\",\"tag3\":\"val3\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '416',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/operationresults/0a4d94f9-e196-4107-bd68-2763197dedee/profileresults/cdnTestProfile2286?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '32ba5c76-b377-498f-99b3-186751c97c49',
  'x-ms-client-request-id': '7f98eec6-277a-431a-bc3d-01ac4819feac',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/operationresults/0a4d94f9-e196-4107-bd68-2763197dedee?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'e98a2456-47b2-473c-8c80-8dbc19cf04b2',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184857Z:e98a2456-47b2-473c-8c80-8dbc19cf04b2',
  date: 'Wed, 27 Apr 2016 18:48:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286?api-version=2016-04-02', '*')
  .reply(202, "{\r\n  \"name\":\"cdnTestProfile2286\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\",\"tag3\":\"val3\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '416',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/operationresults/0a4d94f9-e196-4107-bd68-2763197dedee/profileresults/cdnTestProfile2286?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '32ba5c76-b377-498f-99b3-186751c97c49',
  'x-ms-client-request-id': '7f98eec6-277a-431a-bc3d-01ac4819feac',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/operationresults/0a4d94f9-e196-4107-bd68-2763197dedee?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'e98a2456-47b2-473c-8c80-8dbc19cf04b2',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184857Z:e98a2456-47b2-473c-8c80-8dbc19cf04b2',
  date: 'Wed, 27 Apr 2016 18:48:56 GMT',
  connection: 'close' });
 return result; }]];