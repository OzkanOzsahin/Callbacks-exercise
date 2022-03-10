
// stap 1

const makeHomework = function (course, callback) {
console.log(`Okay, ok , i'm going to do my ${'math'} homework now`);
callback();
}

//stap 2


const doneWithHomework = function () {
console.log('Look, Mom/Dad, I am done with my homework!');
}

// stap 3
const done = function(course, callback) {
    console.log('Look, Mom/Dad, i am done with my homework!');
}
makeHomework('math', doneWithHomework);

//stap 4 
const makework = function(course, callback) {
console.log(`ok, ok i make my ${course}now`);
setTimeout(function () {
callback();
}, 5000)
}

const doneHomework = function () {
    console.log("Look i am done")
}
makeHomework("math", doneHomework);