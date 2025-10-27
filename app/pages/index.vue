<template>
	<div class="bg-gradient-to-b from-white to-blue-200">
		<Navbar />
		<Hero />
		<USP />
		<div>
			<section class="container padding-section px-4">
				<div class="flex flex-col items-center gap-16">
					<h1 class="heading max-w-lg text-center">
						What people say about Notably
					</h1>
					<div
						class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						<article
							v-for="review in reviews"
							:key="review.id"
						>
							<Review
								:description="review.description"
								:author="review.author"
								:avatar="review.avatar"
							/>
						</article>
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
						<div
							v-for="question in questions"
							:key="question.id"
						>
							<Accordion
								:title="question.title"
								:description="question.description"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts" setup>
// Dit heeft dezelfde werking als data vanuit een backend ophalen. Alleen hier gebeurt alles op de front-end.
const reviews = [{
	id: 1,
	description: "We’d tried every tool under the sun, but they all felt bloated or clunky. This app just clicked. Simple, fast, and actually enjoyable to use. Now our notes don’t just live in chaos—they live in one beautiful place.",
	author: "Lars van den Bosch",
	avatar: "lars.png",
},
{
	id: 2,
	description: "Everything about it feels effortless. I open it, jot something down, and it’s already organized. No setup, no friction, just pure flow. It’s the first app that made note-taking feel natural again.",
	author: "Lars van den Bosch",
	avatar: "lars.png",

},
{
	id: 3,
	description: "We used to waste hours syncing docs and messages across different platforms. Now everything—from meeting notes to project ideas—stays connected in one spot.",
	author: "Lars van den Bosch",
	avatar: "lars.png",
},
{
	id: 4,
	description: "I didn’t think a note app could be fun. But this one is. Clean design, intuitive features, and it just gets out of your way. I’ve gone from scattered sticky notes to a system that finally makes sense.",
	author: "Lars van den Bosch",
	avatar: "lars.png",

},
{
	id: 5,
	description: "As a student, I’ve tried all the “productivity” apps out there. Most were overcomplicated or distracting. This one just works. My lectures, assignments, and ideas stay organized without me even thinking about it.",
	author: "Lars van den Bosch",
	avatar: "lars.png",
},
{
	id: 6,
	description: "I’m a designer, and I love tools that feel crafted with care. This app feels like it was made for people who care about their work. It’s elegant, fast, and actually inspires me to create more.",
	author: "Lars van den Bosch",
	avatar: "lars.png",

},
{
	id: 7,
	description: "We switched from Notion after realizing we only used 10% of it. This app gave us everything we needed—no noise, no unnecessary features. It’s light, powerful, and perfect for our small team.",
	author: "Lars van den Bosch",
	avatar: "lars.png",
},
{
	id: 8,
	description: "Finally, a note-taking app that respects my time. I don’t have to dig through menus or remember shortcuts. I just write, and it stays organized automatically. It’s become my second brain.",
	author: "Lars van den Bosch",
	avatar: "lars.png",

}];

const questions = [{
	id: 1,
	title: "What is Notably?",
	description: "Notably is a note-taking app that helps you organize your thoughts and ideas in a simple and intuitive way. With Notably, you can create, edit, and manage your notes effortlessly.",
},
{
	id: 2,
	title: "Is it completely free?",
	description: "Notably is a note-taking app that helps you organize your thoughts and ideas in a simple and intuitive way. With Notably, you can create, edit, and manage your notes effortlessly.",
},
{
	id: 3,
	title: "Why is it better then Apple Notes for example?",
	description: "Notably is a note-taking app that helps you organize your thoughts and ideas in a simple and intuitive way. With Notably, you can create, edit, and manage your notes effortlessly.",
},
{
	id: 4,
	title: "What are the features?",
	description: "Notably is a note-taking app that helps you organize your thoughts and ideas in a simple and intuitive way. With Notably, you can create, edit, and manage your notes effortlessly.",
},
{
	id: 5,
	title: "Can I use it online and offline?",
	description: "Notably is a note-taking app that helps you organize your thoughts and ideas in a simple and intuitive way. With Notably, you can create, edit, and manage your notes effortlessly.",
}];
</script>
