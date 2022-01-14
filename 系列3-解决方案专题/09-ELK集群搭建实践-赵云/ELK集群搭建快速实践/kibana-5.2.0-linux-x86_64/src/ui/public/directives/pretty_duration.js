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

import _ from 'lodash';
import dateMath from '@elastic/datemath';
import moment from 'moment';
import 'ui/timepicker/quick_ranges';
import 'ui/timepicker/time_units';
import uiModules from 'ui/modules';
let module = uiModules.get('kibana');


module.directive('prettyDuration', function (config, quickRanges, timeUnits) {
  return {
    restrict: 'E',
    scope: {
      from: '=',
      to: '='
    },
    link: function ($scope, $elem) {
      let dateFormat = config.get('dateFormat');

      let lookupByRange = {};
      _.each(quickRanges, function (frame) {
        lookupByRange[frame.from + ' to ' + frame.to] = frame;
      });

      function stringify() {
        let text;
        // If both parts are date math, try to look up a reasonable string
        if ($scope.from && $scope.to && !moment.isMoment($scope.from) && !moment.isMoment($scope.to)) {
          let tryLookup = lookupByRange[$scope.from.toString() + ' to ' + $scope.to.toString()];
          if (tryLookup) {
            $elem.text(tryLookup.display);
          } else {
            let fromParts = $scope.from.toString().split('-');
            if ($scope.to.toString() === 'now' && fromParts[0] === 'now' && fromParts[1]) {
              let rounded = fromParts[1].split('/');
              text = 'Last ' + rounded[0];
              if (rounded[1]) {
                text = text + ' rounded to the ' + timeUnits[rounded[1]];
              }
              $elem.text(text);
            } else {
              cantLookup();
            }
          }
        // If at least one part is a moment, try to make pretty strings by parsing date math
        } else {
          cantLookup();
        }
      };

      function cantLookup() {
        let display = {};
        _.each(['from', 'to'], function (time) {
          if (moment.isMoment($scope[time])) {
            display[time] = $scope[time].format(dateFormat);
          } else {
            if ($scope[time] === 'now') {
              display[time] = 'now';
            } else {
              let tryParse = dateMath.parse($scope[time], time === 'to' ? true : false);
              display[time] = moment.isMoment(tryParse) ? '~ ' + tryParse.fromNow() : $scope[time];
            }
          }
        });
        $elem.text(display.from + ' to ' + display.to);
      };

      $scope.$watch('from', stringify);
      $scope.$watch('to', stringify);

    }
  };
});

