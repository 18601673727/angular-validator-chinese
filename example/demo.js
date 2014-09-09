(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  angular.module('app', ['validator', 'validator.rules']).config(function($validatorProvider) {
    $validatorProvider.register('backendWatch', {
      invoke: 'watch',
      validator: function(value, scope, element, attrs, $injector) {
        var $http;
        $http = $injector.get('$http');
        return $http.get('example/data.json').then(function(response) {
          var x;
          if (response && response.data) {
            return !(__indexOf.call((function() {
              var _i, _len, _ref, _results;
              _ref = response.data;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                x = _ref[_i];
                _results.push(x.name);
              }
              return _results;
            })(), value) >= 0);
          } else {
            return false;
          }
        });
      },
      error: "不允许使用 'Kelp' 或 'x'"
    });
    $validatorProvider.register('backendSubmit', {
      validator: function(value, scope, element, attrs, $injector) {
        var $http;
        $http = $injector.get('$http');
        return $http.get('example/data.json').then(function(response) {
          var x;
          if (response && response.data) {
            return !(__indexOf.call((function() {
              var _i, _len, _ref, _results;
              _ref = response.data;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                x = _ref[_i];
                _results.push(x.name);
              }
              return _results;
            })(), value) >= 0);
          } else {
            return false;
          }
        });
      },
      error: "不允许使用 'Kelp' 或 'x'"
    });
    $validatorProvider.register('backendBlur', {
      invoke: 'blur',
      validator: function(value, scope, element, attrs, $injector) {
        var $http;
        $http = $injector.get('$http');
        return $http.get('example/data.json').then(function(response) {
          var x;
          if (response && response.data) {
            return !(__indexOf.call((function() {
              var _i, _len, _ref, _results;
              _ref = response.data;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                x = _ref[_i];
                _results.push(x.name);
              }
              return _results;
            })(), value) >= 0);
          } else {
            return false;
          }
        });
      },
      error: "不允许使用 'Kelp' 或 'x'"
    });
    $validatorProvider.register('requiredSubmit', {
      validator: /^.+$/,
      error: '此处为必填项。'
    });
    $validatorProvider.register('requiredBlur', {
      invoke: 'blur',
      validator: /^.+$/,
      error: '此处为必填项。'
    });
    $validatorProvider.register('numberSubmit', {
      validator: /^[-+]?[0-9]*[\.]?[0-9]*$/,
      error: '此处需为数字。'
    });
    return $validatorProvider.register('customLess', {
      invoke: 'watch',
      validator: function(value, scope) {
        return value < scope.formWatch.number;
      },
      error: '此处需为小于Number 1的数字。'
    });
  }).run(function($validator) {
    return $validator.register('requiredRun', {
      invoke: 'watch',
      validator: /^.+$/,
      error: '此处为必填项。'
    });
  }).controller('DemoController', function($scope, $validator) {
    $scope.formWatch = {
      required: '',
      regexp: '',
      requiredRun: '',
      number: 100,
      number2: '',
      http: ''
    };
    $scope.formSubmit = {
      required: '',
      regexp: '',
      number: '',
      http: '',
      submit: function() {
        return $validator.validate($scope, 'formSubmit').success(function() {
          return console.log('success');
        }).error(function() {
          return console.log('error');
        }).then(function() {
          return console.log('then');
        });
      },
      reset: function() {
        return $validator.reset($scope, 'formSubmit');
      }
    };
    $scope.formBlur = {
      required: '',
      email: '',
      url: '',
      regexp: '',
      http: ''
    };
    return $scope.formRepeat = {
      model: [
        {
          value: 'a'
        }, {
          value: 100
        }, {
          value: ''
        }
      ],
      submit: function() {
        return $validator.validate($scope, 'formRepeat').success(function() {
          return console.log('success');
        }).error(function() {
          return console.log('error');
        });
      },
      reset: function() {
        return $validator.reset($scope, 'formRepeat');
      }
    };
  });

}).call(this);
