<template>
	<div>
		<v-button v-bind="{ [size]: true, loading }" @click="onClick">{{ label }}</v-button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useApi } from '@directus/extensions-sdk';

export default defineComponent({
	props: {
		label: {
			type: String,
			default: null,
		},
		size: {
			type: String,
			default: null,
		},
		url: {
			type: String,
			default: '',
		},
		method: {
			type: String,
			default: 'GET',
		},
	},
	setup(props) {
		const api = useApi();

		const loading = ref(false);

		return { loading, onClick };

		async function onClick() {
			loading.value = true;

			try {
				const data = await api.request({
					method: props.method,
					url: props.url,
				});
				console.log(data);
			} catch (error) {
				console.log(error);
			} finally {
				loading.value = false;
			}
		}
	},
});
</script>
