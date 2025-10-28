<template>
	<div class="bg-blue-50 w-full">
		<div class="grid lg:grid-cols-2">
			<NuxtImg
				src="/assets/img/login.png"
				alt="Login image"
				width="840"
				loading="eager"
				height="1200"
				class="hidden lg:block object-cover w-full h-screen"
			/>
			<div class="flex flex-col items-center pt-16 px-4 min-h-screen">
				<NuxtImg
					src="/assets/img/logo.svg"
					alt="Logo"
					width="128"
					height="128"
					loading="eager"
					class="mb-32"
				/>
				<div class="flex flex-col items-center gap-4 max-w-lg">
					<h1 class="heading text-center">
						Log in
					</h1>
					<span class="paragraph text-center">
						Fill in your email and open your inbox. Click the link to get access.
					</span>
					<form class="flex flex-col gap-4 w-full">
						<div class="flex flex-col gap-1">
							<span class="label">E-mail</span>
							<input
								v-model="email"
								type="email"
								required
								placeholder="me@mail.com"
								class="bg-white px-4 py-3 rounded-lg outline-dashed outline-gray-200 focus:outline-blue-400 focus:outline-offset-2"
							>
							<span class="tagline">{{ successMessage }}</span>
						</div>
						<!-- <div class="flex flex-col gap-1">
						<span class="label">Wachtwoord</span>
						<input
							type="text"
							placeholder="welkom123"
							required
							class="bg-white px-4 py-3 rounded-lg outline-dashed outline-gray-200 focus:outline-blue-400 focus:outline-offset-2"
						>
					</div> -->
						<button
							class="w-full rounded-full px-4 py-3 bg-[#FF2C00] hover:bg-[#ec2800] text-white font-semibold transition-colors duration-[.25s]"
							type="button"
							@click="signInWithOtp"
						>
							Log in
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();
const email = ref("");
const successMessage = ref("");

const signInWithOtp = async () => {
	const { error } = await supabase.auth.signInWithOtp({
		email: email.value,
		options: {
			emailRedirectTo: "https://larsnotesapp.netlify.app/confirm",
		},
	});
	if (error) console.log(error);
	successMessage.value = "Check your email for the login link!";
};

onMounted(() => {
	document.body.classList.remove("dark-mode");
});
</script>
