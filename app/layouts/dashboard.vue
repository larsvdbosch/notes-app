<template>
	<div class="flex flex-col min-h-screen">
		<DashboardNavbar />
		<div>
			<DashboardSidebar />
			<main class="bg-[image:repeating-linear-gradient(315deg,_var(--color-pattern)_0,_var(--color-pattern)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
				<slot />
			</main>
		</div>
	</div>
</template>
