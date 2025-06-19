'use strict';

// npm install @preact/signals-core --save
const { signal, computed } = require('@preact/signals-core');

const count = signal(100);
console.log(`Count 1: ${count.value}`);

count.value = 200;
console.log(`Count 2: ${count.value}`);

count.value += 50;
console.log(`Count 3: ${count.value}`);

const num = signal(1000);
console.log(`Num 1: ${num.value}`);

const total = computed(() => num.value + count.value);
console.log(`Total 1: ${total.value}`);

// Display reactivity

num.value *= 2;
console.log(`Num 2: ${num.value}`);

console.log(`Total 2: ${total.value}`);
