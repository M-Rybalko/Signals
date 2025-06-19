'use strict';

class Signal {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return typeof this._value === 'function' ? this._value() : this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }

  update(fn) {
    this._value = fn(this._value);
  }
}

class Computed extends Signal {
  constructor(fn) {
    super(fn);
  }
}

// Usage

const count = new Signal(100);
console.log(`Count 1: ${count.value}`);

count.value = 200;
console.log(`Count 2: ${count.value}`);

count.update((prev) => prev + 50);
console.log(`Count 3: ${count.value}`);

const num = new Signal(1000);
console.log(`Num 1: ${num.value}`);

const total = new Computed(() => num.value + count.value);
console.log(`Total 1: ${total.value}`);

num.value *= 2;
console.log(`Num 2: ${num.value}`);
console.log(`Total 2: ${total.value}`);
