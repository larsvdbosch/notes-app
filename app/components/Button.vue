<template>
	<NuxtLink to="/">
		<button
			class="flex gap-1 items-center justify-center w-full bg-[#A8DFD4] border-[#6FADA1] border hover:bg-[#90DBCC] transition duration-150 ease-in-out font-medium text-[#005A48] px-4 py-2 rounded-lg"
		>
			<NuxtLink to="/">
				<NuxtImg
					src="/assets/svg/plus.svg"
					alt="Logo"
					width="16"
					height="16"
				/>
			</NuxtLink>
			<slot />
		</button>
	</NuxtLink>
</template>

<script setup lang="ts"></script>
