function init(target) {
  return class extends target {
    nombre = 'Frida';
    apellido = 'Benitez';

    sayMyName() {
      return `${this.nombre} ${this.apellido}`;
    }
  }
}

@init
class P {
  constructor() {}

  sayMyName() {}
}

const p: P = new P();
console.log(p.sayMyName()); // Frida Benitez