<template>
	<div>
		<Banner />
		<Navbar />
		<div class="pt-40">
			<Sidebar />
			<main>
				<slot />
			</main>
		</div>
	</div>
</template>
