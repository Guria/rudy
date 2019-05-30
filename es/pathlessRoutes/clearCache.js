export default (function (_ref) {
  var cache = _ref.cache,
      action = _ref.action,
      has = _ref.has;
  var env = process.env.NODE_ENV;

  if (env === 'development' && !has('pathlessRoute')) {
    throw new Error('[rudy] "pathlessRoute" middleware is required to use "clearCache" action creator.');
  }

  var _action$payload = action.payload,
      invalidator = _action$payload.invalidator,
      options = _action$payload.options;
  cache.clear(invalidator, options);
});
//# sourceMappingURL=clearCache.js.map