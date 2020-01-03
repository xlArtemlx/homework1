// продаем игровую валюту, выводим на Приват 24, через киви кошелек и онлайн обменник
var amountGM = 500000000 //количество игровой валюты
var amountRUBqiwi = amountGM * 3 / 1000000  // стоимость 1 000 000 GM игровых = 3 рублям 
var amountRUBexchange = amountRUBqiwi * 98 / 100 //  перебрасываем деньги на онлайн обменник, снимает комиссию киви за перевод 2%
var amountUAexchange = amountRUBexchange * 0.38 // производится конвертация валюты, 1 рб = 0.38 грн
var amoutUAprivat = amountUAexchange * 93 /100 // снимается комиссия обменника  = 7%
	console.log(amountUAexchange) // получаем чистыми на карте банка