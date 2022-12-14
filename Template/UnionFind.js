const init = (n) => {
	const uf = new Array(n).fill(0);
	for (let i = 0; i < n; i++) {
		uf[i] = i;
	}
};

const find = (uf, x) => {
	if (uf[x] === x) {
		return x;
	}
	return (uf[x] = find(uf, uf[x]));
};

const union = (uf, x, y) => {
	x = find(uf, x);
	y = find(uf, y);
	uf[y] = x;
};
