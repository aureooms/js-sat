'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._certificate_to_keys = _certificate_to_keys;

var _jsItertools = require('@aureooms/js-itertools');

/**
 * Constructs an assignment map from a list of variable names and an assignment
 * vector in parity format.
 *
 * @param variables
 * @param certificate
 * @returns {undefined}
 */
function _certificate_to_keys(variables, certificate) {

  return new Map((0, _jsItertools.zip)(variables, certificate));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2NlcnRpZmljYXRlX3RvX2tleXMuanMiXSwibmFtZXMiOlsiX2NlcnRpZmljYXRlX3RvX2tleXMiLCJ2YXJpYWJsZXMiLCJjZXJ0aWZpY2F0ZSIsIk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXZ0JBLG9CLEdBQUFBLG9COztBQVhoQjs7QUFHQTs7Ozs7Ozs7QUFRTyxTQUFTQSxvQkFBVCxDQUFnQ0MsU0FBaEMsRUFBNENDLFdBQTVDLEVBQTBEOztBQUVoRSxTQUFPLElBQUlDLEdBQUosQ0FBUyxzQkFBS0YsU0FBTCxFQUFpQkMsV0FBakIsQ0FBVCxDQUFQO0FBRUEiLCJmaWxlIjoiX2NlcnRpZmljYXRlX3RvX2tleXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6aXAgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGFuIGFzc2lnbm1lbnQgbWFwIGZyb20gYSBsaXN0IG9mIHZhcmlhYmxlIG5hbWVzIGFuZCBhbiBhc3NpZ25tZW50XG4gKiB2ZWN0b3IgaW4gcGFyaXR5IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0gdmFyaWFibGVzXG4gKiBAcGFyYW0gY2VydGlmaWNhdGVcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY2VydGlmaWNhdGVfdG9fa2V5cyAoIHZhcmlhYmxlcyAsIGNlcnRpZmljYXRlICkge1xuXG5cdHJldHVybiBuZXcgTWFwKCB6aXAoIHZhcmlhYmxlcyAsIGNlcnRpZmljYXRlICkgKSA7XG5cbn1cbiJdfQ==