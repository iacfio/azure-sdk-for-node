// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '06adb0b3-baaa-4e5f-9df6-ca770f7902cd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .delete('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup7583/providers/Microsoft.Cdn/profiles/cdnTestProfile7066/endpoints/testEndpoint-4436d201-109c-4944-a0ad-0322de415c38/customDomains/cdnTestCustomDomain4542?api-version=2016-04-02')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '38575a80-5cc3-4a99-9289-8b5407570975',
  'x-ms-client-request-id': 'a2d7d215-d222-4240-a6cb-57336bb2759c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '89a1595d-a786-4f4e-9417-64b6828b1b02',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T232930Z:89a1595d-a786-4f4e-9417-64b6828b1b02',
  date: 'Mon, 25 Apr 2016 23:29:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .delete('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup7583/providers/Microsoft.Cdn/profiles/cdnTestProfile7066/endpoints/testEndpoint-4436d201-109c-4944-a0ad-0322de415c38/customDomains/cdnTestCustomDomain4542?api-version=2016-04-02')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '38575a80-5cc3-4a99-9289-8b5407570975',
  'x-ms-client-request-id': 'a2d7d215-d222-4240-a6cb-57336bb2759c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '89a1595d-a786-4f4e-9417-64b6828b1b02',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T232930Z:89a1595d-a786-4f4e-9417-64b6828b1b02',
  date: 'Mon, 25 Apr 2016 23:29:30 GMT',
  connection: 'close' });
 return result; }]];