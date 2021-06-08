/**
 * генератор случайных чисел
 * @param {number} min минимальный диапазон
 * @param {number} max максимальный диапазон
 * @param {number} float число знаков после запятой
 * @returns {number} случайное значение
 */
function createRandomNumber(min, max, float = 0) {
  if (min < 0 || max < 0 || max < min) {
    throw new Error('Невалидное значение');
  }
  return Number((Math.random() * (max - min) + min).toFixed(float));
}

createRandomNumber (0,2);
