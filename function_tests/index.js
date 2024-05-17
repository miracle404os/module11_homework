function countDown(n) {
	if (n >= 1) {
		for (let i = n; i >= 1; --i) {
			console.log(i);
		};
	}
	else if (n < 1) {
		console.log(`Число ${n} меньше 1`);
	}
	else if (n = ''){
		console.log(`Введите число`);
	};
};
module.exports = countDown;