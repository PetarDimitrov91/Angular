var _Request = /** @class */ (function () {
    function _Request(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return _Request;
}());
var myData = new _Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
