import fs from 'fs';
import {exec} from 'child_process';

const sizes = [
    {
        'name': '',
        'size': 900
    },{
        'name': '@2x',
        'size': 1800
    },{
        'name': '-small@2x',
        'size': 900
    },{
        'name': '-small',
        'size': 450
    }
];

fs.readdir('src_images', (err, files) => {
    sizes.forEach((size) => {
        files.forEach(resize_image.bind(null, `-resize ${size.size}`, size.name));
    });
});

function resize_image(size, version, filename){
    exec(`convert src_images/${filename} ${size} dest/${filename.split('.jpg')[0]}${version}.jpg`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}
