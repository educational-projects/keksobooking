/**
 * генератор случайных чисел
 * @param {number} min минимальный диапазон
 * @param {number} max максимальный диапазон
 * @param {number} float число знаков после запятой
 * @returns {number} случайное значение
 */
function createRandomNumber(min, max, float = 0) {
  if (min < 0 || max < 0 || max < min) {
    throw new Error('данные меньше ноля');
  }
  return Number((Math.random() * (max - min) + min).toFixed(float));
}

//* Выбор случайного элемента массива
/**
 * Выбор случайного элемента массива
 * @param {array} array
 * @returns {array} массив со случайным элементом
 */
function getArrayRandomElement (array) {
  if (array && array.length) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

export {createRandomNumber, getArrayRandomElement};
