<template>
	<div>{{ value }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		value: {
			type: [String, Number],
			default: null,
		},
		field: {
			type: String,
			default: null,
		},
	},
	emits: ['input'],
	setup(props, { emit }) {
	},
});
</script>
