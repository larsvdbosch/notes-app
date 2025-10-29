export const useDarkmode = () => {
	const darkMode = useState<boolean>("darkMode", () => false);

	const toggleDarkmode = () => {
		document.body.classList.toggle("dark-mode");
		checkDarkmode();
	};

	const checkDarkmode = () => {
		if (document.body.classList.contains("dark-mode")) {
			darkMode.value = true;
		}
		else {
			darkMode.value = false;
		}
		return darkMode.value;
	};
	return { darkMode, toggleDarkmode, checkDarkmode };
};
