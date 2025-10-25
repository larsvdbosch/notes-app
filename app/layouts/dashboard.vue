<template>
	<div>
		<DashboardBanner />
		<DashboardNavbar />
		<div class="pt-40">
			<DashboardSidebar />
			<main class="bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
				<slot />
			</main>
		</div>
	</div>
</template>
