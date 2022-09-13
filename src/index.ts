import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'api-trigger',
	name: 'API Trigger',
	icon: 'sync',
	description: 'Display a button to trigger custom APIs',
	component: InterfaceComponent,
	types: ['alias'],
	group: 'presentation',
	options: [
		{
			field: 'url',
			name: 'URL',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'method',
			name: 'Method',
			type: 'string',
			schema: {
				default_value: 'GET',
			},
			meta: {
				interface: 'select-dropdown',
				width: 'half',
				options: {
					choices: [
						{ text: 'GET', value: 'GET' },
						{ text: 'POST', value: 'POST' },
					],
				},
			},
		}
	],
});
