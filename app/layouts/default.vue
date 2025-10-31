<template>
	<div class="flex flex-col min-h-screen">
		<DashboardBanner />
		<Navbar />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</template>
