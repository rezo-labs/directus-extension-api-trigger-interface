<template>
	<div class="trigger-list" :class="[layout]">
		<v-button
			v-for="(trigger, index) in triggers"
			:key="index"
			class="action"
			:class="[trigger.type]"
			:loading="loadings[index].value"
			v-bind="{ [trigger.size]: true }"
			@click="onClick(trigger.method, trigger.url, index)"
		>
			{{ trigger.label }}
		</v-button>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { useApi, useStores } from '@directus/extensions-sdk';

type Trigger = {
	label: string;
	size: string;
	type: string;
	icon: string;
	url: string;
	method: string;
};

export default defineComponent({
	props: {
		triggers: {
			type: Array as PropType<Trigger[]>,
			default: null,
		},
		layout: {
			type: String,
			default: 'vertical',
		},
	},
	setup(props) {
		const api = useApi();
		const { useNotificationsStore } = useStores();
		const store = useNotificationsStore();

		const loadings = props.triggers.map(() => ref(false));

		return { loadings, onClick };

		async function onClick(method: string, url: string, index: number) {
			const loading = loadings[index];
			if (!loading) return;
			loading.value = true;

			try {
				await api.request({
					method,
					url,
				});
				store.add({
					title: 'Success',
					type: 'success',
				});
			} catch (error: any) {
				const message = error.response?.data?.errors?.[0]?.message || error.message || undefined;
				store.add({
					title: 'Error',
					text: message,
					type: 'error',
					dialog: true,
					error,
				});
			} finally {
				loading.value = false;
			}
		}
	},
});
</script>

<style lang="scss" scoped>
.trigger-list {
	display: flex;
	gap: 8px;

	&.vertical {
		flex-direction: column;
	}

	&.horizontal {
		flex-wrap: wrap;
	}
}

.action {
	&.info {
		--v-button-background-color: var(--blue);
		--v-button-background-color-hover: var(--blue-125);
		--v-button-color: var(--blue-alt);
		--v-button-color-hover: var(--blue-alt);
	}

	&.success {
		--v-button-background-color: var(--success);
		--v-button-background-color-hover: var(--success-125);
		--v-button-color: var(--success-alt);
		--v-button-color-hover: var(--success-alt);
	}

	&.warning {
		--v-button-background-color: var(--warning);
		--v-button-background-color-hover: var(--warning-125);
		--v-button-color: var(--warning-alt);
		--v-button-color-hover: var(--warning-alt);
	}

	&.danger {
		--v-button-icon-color: var(--white);
		--v-button-background-color: var(--danger);
		--v-button-background-color-hover: var(--danger-125);
		--v-button-color: var(--danger-alt);
		--v-button-color-hover: var(--danger-alt);
	}
}
</style>