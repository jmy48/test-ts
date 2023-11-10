// // demonstrating why we need to bubble up from child to parent
// type WrappedType = number | void;

// type WrapperType = {
//   a: string,
//   b: WrappedType
// }

// function f() {
//   const x: WrapperType = {
//     a: 'hello',
//     b: 5
//   }

//   console.log(x.b);
// }

// interface I {
//   m(): string;
// }

// class C implements I {
//   m() {
//     return "hello";
//   }
// }



/*
// Tests for LSP idiosyncracy where subclass overriding / implementation methods are referencedBy the superclass method/field.
// method1 should NOT referenceInDefinition B.method2 (only A.method2)
abstract class A {
  method1() {
    this.method2()
  }
  abstract method2();
}

class B extends A {
  method2() {}
}
*/



/*
// Tests for bubbling children's referenceInDefinition up to parents.
// A should referenceInDefinition B.
function B() {}

class A {
  m1() {
    B()
  }
}
*/

// class A {
//   b: B
// }

// class B {
//   a: A
//   constructor(a: A) {
//     this.a = a;
//     this.a.b = this;
//   }
// }

// console.log(new B(new A()));