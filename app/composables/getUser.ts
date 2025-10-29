export const getUser = () => {
	const supabase = useSupabaseClient();
	const email = ref("");
	const errorMessage = ref("");
	const successMessage = ref("");
	const user = useSupabaseUser();
	const isLoggedIn = useState("user", () => false);

	const signInWithOtp = async () => {
		const { error } = await supabase.auth.signInWithOtp({
			email: email.value,
			options: {
				emailRedirectTo: "https://larsnotesapp.netlify.app/confirm",
			},
		});
		if (error) {
			errorMessage.value = "Invalid email address.";
			console.log(error);
		}
		else {
			successMessage.value = "Check your email for the login link!";
			errorMessage.value = "";
		}
	};

	const userStatus = () => {
		if (user.value) {
			isLoggedIn.value = true;
		}
		else {
			isLoggedIn.value = false;
		}
	};
	return { signInWithOtp, userStatus, isLoggedIn, email, errorMessage, successMessage };
};
