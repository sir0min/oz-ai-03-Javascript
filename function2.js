function sayHello() {
    console.log("Hello");
};

sayHello()

sayHello


const fn = sayHello;
fn();

function run(fn) {
    console.log("start function run...")
    fn();
    console.log("end function run...")
}

run(sayHello);
