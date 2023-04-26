import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const Cloned = super.constructor || super[Symbol.species];
    return new Cloned();
  }
}

export default EVCar;
