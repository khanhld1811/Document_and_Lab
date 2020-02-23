// static

class Foo {
    static someMethod() {
        console.log('some method');
    }

    anotherMethod() {
        console.log('another method');
    }
}

const food = new Foo();// instance
food.anotherMethod();
