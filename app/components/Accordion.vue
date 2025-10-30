<template>
	<article class="outer bg-[var(--color-accordion-background)] hover:bg-[var(--color-accordion-hover)] border border-[var(--color-accordion-border)] text-[var(--color-text)]">
		<div class="transition-colors duration-[.25s] ease-out">
			<h3>
				<button
					:id="buttonId"
					class="accordion"
					:aria-expanded="isOpen"
					aria-controls="panelId"
					@click="openAccordion"
				>
					<span class="accordion_heading">{{ title }}</span>
					<Icon
						name="my-icon:chevron-down"
						class="text-[var(--color-text)] chevron-icon"
						:aria-hidden="true"
						:class="{ 'rotate-chevron': isOpen }"
					/>
				</button>
			</h3>
			<div
				:id="panelId"
				ref="accordionRef"
				class="accordion_answer"
				role="region"
        		:aria-labelledby="buttonId"
			>
				<span
					ref="textRef"
					class="accordion_answer_text"
				>{{ description }}</span>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

//Unieke id's voor accessibility
const uid = Math.random().toString(36).substring(2, 9);
const buttonId = `accordion-btn-${uid}`;
const panelId = `accordion-panel-${uid}`;

// Refs die aan een HTML element worden gekoppeld
const isOpen = ref(false);
const accordionRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);

// Functie die accordion opent & sluit
const openAccordion = () => {
	isOpen.value = !isOpen.value;
	setAccordionHeight();
};

// Event listener voor het aanpassen van de accordion hoogte bij het veranderen van de venster grootte
onMounted(() => window.addEventListener("resize", windowResize));

// Event listener wordt verwijderd bij het unmounten van de component
onUnmounted(() => window.removeEventListener("resize", windowResize));

const windowResize = () => {
	setAccordionHeight();
};

// Functie die de hoogte van de accordion tijdens het resizen aanpast op basis van de inhoud
const setAccordionHeight = () => {
	if (accordionRef.value && textRef.value) {
		accordionRef.value.style.height = isOpen.value
			? `${textRef.value.offsetHeight}px`
			: "0px";
	}
};

// Type definitie voor de waarden van de component
type IProps = {
	title: string;
	description: string;
};

// Props worden gedefinieerd voor de component
defineProps<IProps>();
</script>

<style scoped>
.expand {
	display: block;
}

.outer {
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	max-width: 768px;
}

.accordion_answer {
	height: 0;
	overflow: hidden;
	transition: height 200ms ease;
	padding: 0 16px;
}
.accordion_answer_text {
	display: block;
	font-size: 16px;
	margin: 0;
	font-weight: 400;
	padding: 0 0 16px;
}

.accordion {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	width: 100%;
	border: none;
	background: none;
	padding: unset;
	padding: 16px;
	border-radius: 12px;
}

.accordion_heading {
	font-size: 18px;
	margin: 0;
	font-weight: 600;
	text-align: left;
}

.chevron-icon {
	transition: transform .25s ease-out;
}

.rotate-chevron {
	transform: rotate(180deg);
}

@media (width <= 48rem) {
	.accordion_answer {
		padding: 0 12px;
	}

	.accordion {
		padding: 12px;
	}
}
</style>
