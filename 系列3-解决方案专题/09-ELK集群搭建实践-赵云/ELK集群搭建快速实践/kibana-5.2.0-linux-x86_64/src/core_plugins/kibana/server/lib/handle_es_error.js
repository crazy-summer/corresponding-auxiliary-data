/*
 * Copyright 2021-2022 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _elasticsearch = require('elasticsearch');

module.exports = function handleESError(error) {
  if (!(error instanceof Error)) {
    throw new Error('Expected an instance of Error');
  }

  if (error instanceof _elasticsearch.errors.ConnectionFault || error instanceof _elasticsearch.errors.ServiceUnavailable || error instanceof _elasticsearch.errors.NoConnections || error instanceof _elasticsearch.errors.RequestTimeout) {
    return _boom2['default'].serverTimeout(error);
  } else if (error instanceof _elasticsearch.errors.Conflict || _lodash2['default'].contains(error.message, 'index_template_already_exists')) {
    return _boom2['default'].conflict(error);
  } else if (error instanceof _elasticsearch.errors[403]) {
    return _boom2['default'].forbidden(error);
  } else if (error instanceof _elasticsearch.errors.NotFound) {
    return _boom2['default'].notFound(error);
  } else if (error instanceof _elasticsearch.errors.BadRequest) {
    return _boom2['default'].badRequest(error);
  } else {
    return error;
  }
};
