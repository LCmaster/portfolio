const createformDataFromObject = (obj) => {
	const formData = new FormData();
	Object.keys(obj).forEach((k) => formData.append(k, obj[k]));
	return formData;
};

export const createFormDataRequest = (obj) => ({
	formData: () => new Promise((resolve) => resolve(createformDataFromObject(obj)))
});
