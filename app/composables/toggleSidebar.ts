// Deze shared state is nodig, want de composable wordt in meerdere componenten gebruikt
const sharedIsOpen = ref(false);

export const toggleSidebar = () => {
	const isOpen = sharedIsOpen;

	const toggle = () => {
		isOpen.value = !isOpen.value;
	};

	return {
		toggle,
		isOpen,
	};
};
