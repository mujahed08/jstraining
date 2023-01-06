
import { abc } from './lib.js'

abc();

class ABC {
    constructor() {

    }

    meth1() {
        console.log('meth1');
        console.log(this);
    }
}

var abcd = new ABC();

abcd.meth1()