// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls3177.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?destination=adlssdkfolder01%2Fmovefile.txt&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b91ae164-24fa-4b64-899d-688f462bfda2',
  'server-perf': '[b91ae16424fa4b64899d688f462bfda2][ AuthTime::845.55221145905::PostAuthTime::197.594902222601 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:034 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsRename :: 00:00:097 ms]%0a[CleanCacheRename :: 00:00:005 ms]%0a[RENAME :: 00:00:138 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:42 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3177.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?destination=adlssdkfolder01%2Fmovefile.txt&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b91ae164-24fa-4b64-899d-688f462bfda2',
  'server-perf': '[b91ae16424fa4b64899d688f462bfda2][ AuthTime::845.55221145905::PostAuthTime::197.594902222601 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:034 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsRename :: 00:00:097 ms]%0a[CleanCacheRename :: 00:00:005 ms]%0a[RENAME :: 00:00:138 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:42 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1457390500960,\"modificationTime\":1457390501133,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd7c5c9c6-cee3-4fe5-b6fc-eb4199bd4da1',
  'server-perf': '[d7c5c9c6cee34fe5b6fceb4199bd4da1][ AuthTime::872.497344015438::PostAuthTime::186.902617320954 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:062 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:063 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:42 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1457390500960,\"modificationTime\":1457390501133,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd7c5c9c6-cee3-4fe5-b6fc-eb4199bd4da1',
  'server-perf': '[d7c5c9c6cee34fe5b6fceb4199bd4da1][ AuthTime::872.497344015438::PostAuthTime::186.902617320954 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:062 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:063 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:42 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01/concatfile.txt [df185eb0367d43179b0ca3914b2232f4]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'df185eb0-367d-4317-9b0c-a3914b2232f4',
  'server-perf': '[df185eb0367d43179b0ca3914b2232f4][ AuthTime::896.875946274693::PostAuthTime::208.287356144862 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:016 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:016 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:42 GMT',
  connection: 'close',
  'content-length': '212' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01/concatfile.txt [df185eb0367d43179b0ca3914b2232f4]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'df185eb0-367d-4317-9b0c-a3914b2232f4',
  'server-perf': '[df185eb0367d43179b0ca3914b2232f4][ AuthTime::896.875946274693::PostAuthTime::208.287356144862 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:016 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:016 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:42 GMT',
  connection: 'close',
  'content-length': '212' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3177.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?destination=adlssdkfolder02&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8e89fb27-8040-4ce1-a266-c4cfda259a82',
  'set-cookie': [ 'UserPrincipalSession=c99d167a-7a9b-44e5-898a-696877ae424d; path=/; secure; HttpOnly' ],
  'server-perf': '[8e89fb2780404ce1a266c4cfda259a82][ AuthTime::1796.31652465787::PostAuthTime::31630.5678327612 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:186 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsRename :: 00:00:089 ms]%0a[CleanCacheRename :: 00:00:002 ms]%0a[RENAME :: 00:00:279 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:42 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3177.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?destination=adlssdkfolder02&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8e89fb27-8040-4ce1-a266-c4cfda259a82',
  'set-cookie': [ 'UserPrincipalSession=c99d167a-7a9b-44e5-898a-696877ae424d; path=/; secure; HttpOnly' ],
  'server-perf': '[8e89fb2780404ce1a266c4cfda259a82][ AuthTime::1796.31652465787::PostAuthTime::31630.5678327612 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:186 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsRename :: 00:00:089 ms]%0a[CleanCacheRename :: 00:00:002 ms]%0a[RENAME :: 00:00:279 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:42 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1457390493608,\"modificationTime\":1457390502170,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '10a0d185-ef3d-49c3-b7f5-aba2190781a5',
  'set-cookie': [ 'UserPrincipalSession=eaec2092-5256-457a-8daf-c4ca0cc3e5ba; path=/; secure; HttpOnly' ],
  'server-perf': '[10a0d185ef3d49c3b7f5aba2190781a5][ AuthTime::1769.79947119863::PostAuthTime::31349.1449105648 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:070 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:070 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:43 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1457390493608,\"modificationTime\":1457390502170,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '10a0d185-ef3d-49c3-b7f5-aba2190781a5',
  'set-cookie': [ 'UserPrincipalSession=eaec2092-5256-457a-8daf-c4ca0cc3e5ba; path=/; secure; HttpOnly' ],
  'server-perf': '[10a0d185ef3d49c3b7f5aba2190781a5][ AuthTime::1769.79947119863::PostAuthTime::31349.1449105648 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:070 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:070 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:43 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01 [51d1d9c6d497420ab21cf8d231036e33]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '51d1d9c6-d497-420a-b21c-f8d231036e33',
  'server-perf': '[51d1d9c6d497420ab21cf8d231036e33][ AuthTime::817.752412626234::PostAuthTime::195.456512850517 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:030 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:031 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:43 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01 [51d1d9c6d497420ab21cf8d231036e33]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '51d1d9c6-d497-420a-b21c-f8d231036e33',
  'server-perf': '[51d1d9c6d497420ab21cf8d231036e33][ AuthTime::817.752412626234::PostAuthTime::195.456512850517 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:030 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:031 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:43 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=LISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":44,\"pathSuffix\":\"movefile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1457390500960,\"modificationTime\":1457390501133,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ed935cf4-1a40-4912-a8a1-e6ab4d86882e',
  'set-cookie': [ 'UserPrincipalSession=df3df6b1-6d0d-42cf-ad81-3853a58b4065; path=/; secure; HttpOnly' ],
  'server-perf': '[ed935cf41a404912a8a1e6ab4d86882e][ AuthTime::1690.67817451237::PostAuthTime::31065.6233760957 ][FsEnumerateDirectory :: 00:00:052 ms]%0a[FsEnumerateDirectory :: 00:00:052 ms]%0a[ListDirectory :: 00:00:052 ms]%0a[LISTSTATUS :: 00:00:052 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:44 GMT',
  connection: 'close',
  'content-length': '254' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=LISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":44,\"pathSuffix\":\"movefile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1457390500960,\"modificationTime\":1457390501133,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ed935cf4-1a40-4912-a8a1-e6ab4d86882e',
  'set-cookie': [ 'UserPrincipalSession=df3df6b1-6d0d-42cf-ad81-3853a58b4065; path=/; secure; HttpOnly' ],
  'server-perf': '[ed935cf41a404912a8a1e6ab4d86882e][ AuthTime::1690.67817451237::PostAuthTime::31065.6233760957 ][FsEnumerateDirectory :: 00:00:052 ms]%0a[FsEnumerateDirectory :: 00:00:052 ms]%0a[ListDirectory :: 00:00:052 ms]%0a[LISTSTATUS :: 00:00:052 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:44 GMT',
  connection: 'close',
  'content-length': '254' });
 return result; }]];