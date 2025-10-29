<template>
	<div class="bg-[#f6f6f6] w-full">
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
				<Logo />
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
							<span
								v-show="errorMessage"
								class="paragraph text-red-500"
							>{{ errorMessage }}</span>
							<span
								v-show="successMessage"
								class="paragraph text-emerald-500"
							>{{ successMessage }}</span>
						</div>
						<button
							class="w-full rounded-lg px-4 py-3 bg-[#165dfc] hover:bg-[#155aed] text-white font-semibold transition-colors duration-[.25s]"
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
const { email, errorMessage, successMessage, signInWithOtp } = getUser();

onMounted(() => {
	document.body.classList.remove("dark-mode");
});
</script>
