(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.map = factory();
  }
})(this, function () {
  function reduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    if (!initialValue) {
      accumulator = arr[0];
      for (let i = 1; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
      }
    }
    return accumulator;
  }

  function map(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
  }

  function filter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  function forEach(arr, callback) {
    let copyArr = [...arr];
    for (let i = 0; i < copyArr.length; i++) {
      callback(copyArr[i], i, copyArr);
    }
    return copyArr;
  }

  function take(arr, n) {
    return filter(arr, (arrItem, i) => i < n);
  }

  function skip(arr, n) {
    let newArr = [];
    let newIndex = 0;
    for (let i = n; i < arr.length; i++) {
      newArr[newIndex] = arr[i];
      newIndex++;
    }
    return newArr;
  }

  function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return true;
      }
    }
    return false;
  }

  function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i], i, arr)) {
        return false;
      }
    }
    return true;
  }

  function max(arr) {
    let maxValue = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
    return maxValue;
  }

  function min(arr) {
    minValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i];
      }
    }
    return minValue;
  }

  function keys(obj) {
    let result = [];
    for (let prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        result.push(prop);
      }
    }
    return result;
  }

  function values(obj) {
    let result = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result.push(obj[prop]);
      }
    }
    return result;
  }

  function pairs(obj) {
    let result = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result.push([prop, obj[prop]]);
      }
    }
    return result;
  }

  function fromPairs(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1];
    }
    return obj;
  }

  function chain(arr) {
    let newArr = [];
    return {
      take(n) {
        end = n;
        console.log(end);
        console.log(this);
        return this;
      },
      skip(n) {
        start = n;
        return this;
      },
      value() {
        if (end > arr.length) {
          end = arr.length;
        }
        for (let i = start; i < end; i++) {
          newArr.push(arr[i]);
        }
        return newArr;
      },
    };
  }

  function chain(arr) {
    let newArr = [];
    return {
      take(n) {
        if (newArr.length === 0) {
          newArr = [...arr];
        }
        newArr = take(newArr, n);
        return this;
      },
      skip(n) {
        newArr = skip(newArr, n);
        return this;
      },
      value() {
        return newArr;
      },
    };
  }

  return {
    map: map,
    reduce: reduce,
    filter: filter,
    forEach: forEach,
    take: take,
    skip: skip,
    some: some,
    every: every,
    max: max,
    min: min,
    keys: keys,
    values: values,
    pairs: pairs,
    fromPairs: fromPairs,
    chain: chain,
  };
});
