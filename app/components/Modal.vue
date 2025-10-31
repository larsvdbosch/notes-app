<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";

// Define Props with TypeScript
interface Props {
	isOpen: boolean;
	title?: string;
	persistent?: boolean; // If true, clicking outside won't close
}

const props = withDefaults(defineProps<Props>(), {
	title: "Modal Title",
	persistent: false,
});

// Define Emits with TypeScript
interface Emits {
	(e: "close"): void;
	(e: "confirm"): void;
}
const emit = defineEmits<Emits>();

const modalRef = ref<HTMLElement | null>(null);

// Close modal when Escape key is pressed
const handleKeyDown = (event: KeyboardEvent) => {
	if (event.key === "Escape") {
		closeModal();
	}
};

// Close modal when clicking outside of it, unless persistent is true
const handleClickOutside = (event: MouseEvent) => {
	if (props.persistent) return; // Do not close if persistent

	if (modalRef.value && !modalRef.value.contains(event.target as Node)) {
		closeModal();
	}
};

const closeModal = () => {
	emit("close");
};

const confirmAction = () => {
	emit("confirm");
	emit("close"); // Optionally close on confirm
};

// Add/remove event listeners based on modal open state
watch(
	() => props.isOpen,
	(newVal) => {
		if (newVal) {
			document.body.style.overflow = "hidden"; // Prevent scrolling background
			document.addEventListener("keydown", handleKeyDown);
			document.addEventListener("mousedown", handleClickOutside);
		}
		else {
			document.body.style.overflow = ""; // Restore scrolling
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleClickOutside);
		}
	},
	{ immediate: true }, // Run immediately on mount if already open
);

// Cleanup on component unmount
onUnmounted(() => {
	document.body.style.overflow = ""; // Ensure scroll is restored
	document.removeEventListener("keydown", handleKeyDown);
	document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<template>
	<Transition name="modal-fade">
		<div
			v-if="isOpen"
			class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div
				ref="modalRef"
				class="w-full max-w-lg rounded-lg bg-white shadow-xl"
			>
				<!-- Modal Header -->
				<div
					class="flex items-center justify-between border-b p-4 text-lg font-semibold text-gray-800"
				>
					<h2 id="modal-title">
						{{ title }}
					</h2>
					<button
						class="text-gray-500 hover:text-gray-700 focus:outline-none"
						aria-label="Close modal"
						@click="closeModal"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<!-- Modal Body (Default Slot) -->
				<div class="p-4 text-gray-700">
					<slot>
						<!-- Default content if no slot content is provided -->
						<p>This is the default modal content.</p>
					</slot>
				</div>

				<!-- Modal Footer (Named Slot) -->
				<div
					class="flex justify-end space-x-2 border-t bg-gray-50 p-4"
				>
					<slot name="footer">
						<!-- Default footer buttons if no slot content is provided -->
						<button
							class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							@click="closeModal"
						>
							Cancel
						</button>
						<button
							class="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							@click="confirmAction"
						>
							Confirm
						</button>
					</slot>
				</div>
			</div>
		</div>
	</Transition>
</template>

<style>
/* Basic transition for the modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
