'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = [{
    'name': '',
    'size': 900
}, {
    'name': '@2x',
    'size': 1800
}, {
    'name': '-small@2x',
    'size': 900
}, {
    'name': '-small',
    'size': 450
}];

_fs2.default.readdir('src_images', function (err, files) {
    sizes.forEach(function (size) {
        files.forEach(resize_image.bind(null, '-resize ' + size.size, size.name));
    });
});

function resize_image(size, version, filename) {
    (0, _child_process.exec)('convert src_images/' + filename + ' ' + size + ' dest/' + filename.split('.jpg')[0] + version + '.jpg', function (err, stdout, stderr) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}
