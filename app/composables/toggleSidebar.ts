// const isOpen = useState("sidebar-open", () => false); // Eerst had ik const isOpen hier staan, maar omdat de composable toggleSidebar wordt aangeroepen in andere componenten, moet ik het in de functie zetten.

export const toggleSidebar = () => {
	const isOpen = useState("sidebar-open", () => false); // Ik moet hier useState gebruiken ipv ref, anders werkt het niet in meerdere componenten

	const toggle = () => {
		isOpen.value = !isOpen.value;
	};

	return {
		toggle,
		isOpen,
	};
};
