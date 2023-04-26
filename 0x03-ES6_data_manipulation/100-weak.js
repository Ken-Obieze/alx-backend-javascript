let point = 0;

const weakMap = new WeakMap();
function queryAPI(endpoint) {
  point += 1;
  if (point >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, point);
}

export { weakMap, queryAPI };
