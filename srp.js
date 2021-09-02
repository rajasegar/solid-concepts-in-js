const circle = (radius) => {
  const proto = {
    type: 'Circle',
    area() {
      return Math.PI * Math.pow(radius, 2);
    }
  };
  return Object.assign(Object.create(proto), { radius });
};

const square = (length) => {
  const proto = {
    type: 'Square',
    area() {
      return Math.pow(length, 2);
    }
  };
  return Object.assign(Object.create(proto), { length });
};

const areaCalculator = (s) => {
  const proto = {
    sum() {
      let _sum = 0;
       s.forEach((a) => {
         _sum +=  a.area();
      });
      return _sum;
    },
    output() {
      return `Sum: ${this.sum()}`;
    }
  };

  return Object.assign(Object.create(proto), { shapes: s});
};

const shapes = [circle(2), square(5), square(6)];
const areas = areaCalculator(shapes);
console.log(areas.output());
