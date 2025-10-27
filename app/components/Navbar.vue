<template>
	<header class="sticky inset-x-0 top-0 z-30 bg-white border-b border-gray-200">
		<section class="container flex justify-between items-center p-4">
			<NuxtLink to="/">
				<Logo />
			</NuxtLink>
			<div class="flex items-center gap-4">
				<HeaderLink
					to="/"
					name="Home"
				/>
				<HeaderLink
					to="/"
					name="Features"
				/>
				<HeaderLink
					to="https://larsvandenbosch.netlify.app/"
					name="Portfolio"
					target="_blank"
					rel="noopener noreferrer"
				/>
				<div class="flex gap-1">
					<IconLink
						to="https://github.com/larsvdbosch/notes-app.git"
						img="github.svg"
						target="_blank"
						rel="noopener noreferrer"
					/>
					<IconLink
						img="moon.svg"
					/>
				</div>
				<Button to="dashboard">
					Dashboard
				</Button>
			</div>
		</section>
	</header>
</template>
