// Fisher-Yates algo
export const shuffleArray = (array: Question[]): Question[] => {
	let arrCopy = [...array];
	for (let i = arrCopy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = arrCopy[i];
		arrCopy[i] = arrCopy[j];
		arrCopy[j] = temp;
	}
	return arrCopy;
};
