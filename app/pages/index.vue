<template>
	<div class="bg-gradient-to-b from-white to-sky-400">
		<Navbar />
		<Hero />
		<USP />
		<div>
			<section class="container padding-section px-4">
				<div class="flex flex-col items-center gap-16">
					<h1 class="heading max-w-lg text-center">
						What people say about Notably
					</h1>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Review
							avatar="lars.png"
							author="Lars van den Bosch"
							description="Everything we tried was either too complex, too expensive, or just not fun to use. Then we found Jelly. We jumped straight in, got everything set up quickly, and the whole team was on board in no time."
						/>
						<Review
							avatar="lars.png"
							author="Lars van den Bosch"
							description="Everything we tried was either too complex, too expensive, or just not fun to use. Then we found Jelly. We jumped straight in, got everything set up quickly, and the whole team was on board in no time."
						/>
						<Review
							avatar="lars.png"
							author="Lars van den Bosch"
							description="Everything we tried was either too complex, too expensive, or just not fun to use. Then we found Jelly. We jumped straight in, got everything set up quickly, and the whole team was on board in no time."
						/>
						<Review
							avatar="lars.png"
							author="Lars van den Bosch"
							description="Everything we tried was either too complex, too expensive, or just not fun to use. Then we found Jelly. We jumped straight in, got everything set up quickly, and the whole team was on board in no time."
						/>
						<Review
							avatar="lars.png"
							author="Lars van den Bosch"
							description="Everything we tried was either too complex, too expensive, or just not fun to use. Then we found Jelly. We jumped straight in, got everything set up quickly, and the whole team was on board in no time."
						/>
					</div>
				</div>
			</section>
		</div>
		<div class="">
			<section class="container padding-section px-4">
				<div class="flex flex-col items-center gap-16">
					<h1 class="heading text-center">
						Frequently asked questions
					</h1>
					<div class="flex flex-col gap-4">
						<Accordion
							title="What is Notably?"
							description="Notably is a note-taking app that helps you organize your thoughts and ideas in a simple and intuitive way. With Notably, you can create, edit, and manage your notes effortlessly."
						/>
						<Accordion
							title="Is it completely free?"
							description="Notably is a note-taking app that helps you organize your thoughts and ideas in a simple and intuitive way. With Notably, you can create, edit, and manage your notes effortlessly."
						/>
						<Accordion
							title="Why is it better then Apple Notes for example?"
							description="Notably is a note-taking app that helps you organize your thoughts and ideas in a simple and intuitive way. With Notably, you can create, edit, and manage your notes effortlessly."
						/>
						<Accordion
							title="What are the features?"
							description="Notably is a note-taking app that helps you organize your thoughts and ideas in a simple and intuitive way. With Notably, you can create, edit, and manage your notes effortlessly."
						/>
						<Accordion
							title="Can I use it online and offline?"
							description="Notably is a note-taking app that helps you organize your thoughts and ideas in a simple and intuitive way. With Notably, you can create, edit, and manage your notes effortlessly."
						/>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>
