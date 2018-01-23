import Module from './Modules';

const testElement = document.createElement('<div></div>');
const a = new Module(document.createElement('<div></div>'));

function test() {
    console.log('hello from function');
}
a.start(test);

