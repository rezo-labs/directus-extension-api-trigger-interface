import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'api-trigger',
	name: 'API Trigger',
	icon: 'sync',
	description: 'Display a button to trigger custom APIs',
	component: InterfaceComponent,
	hideLabel: true,
	hideLoader: true,
	types: ['alias'],
	localTypes: ['presentation'],
	group: 'presentation',
	options: ({ collection }) => [
		{
			field: 'layout',
			name: 'Layout',
			type: 'string',
			schema: {
				default_value: 'vertical',
			},
			meta: {
				interface: 'select-dropdown',
				options: {
					choices: [
						{ text: 'Horizontal', value: 'horizontal' },
						{ text: 'Vertical', value: 'vertical' },
					],
				},
			},
		},
		{
			field: 'triggers',
			name: 'Triggers',
			type: 'json',
			meta: {
				interface: 'list',
				options: {
					fields: [
						{
							field: 'label',
							name: 'Label',
							type: 'string',
							meta: {
								width: 'half',
								interface: 'input',
							},
						},
						{
							field: 'size',
							name: 'Size',
							type: 'string',
							schema: {
								default_value: '',
							},
							meta: {
								width: 'half',
								interface: 'select-dropdown',
								options: {
									choices: [
										{ text: 'x-small', value: 'x-small' },
										{ text: 'small', value: 'small' },
										{ text: 'default', value: '' },
										{ text: 'large', value: 'large' },
										{ text: 'x-large', value: 'x-large' },
									],
								},
							},
						},
						{
							field: 'type',
							name: 'Type',
							type: 'string',
							schema: {
								default_value: 'normal',
							},
							meta: {
								width: 'half',
								interface: 'select-dropdown',
								default_value: 'normal',
								options: {
									choices: [
										{ text: 'Primary', value: 'primary' },
										{ text: 'Normal', value: 'normal' },
										{ text: 'Info', value: 'info' },
										{ text: 'Success', value: 'success' },
										{ text: 'Warning', value: 'warning' },
										{ text: 'Danger', value: 'danger' },
									],
								},
							},
						},
						{
							field: 'icon',
							name: 'Icon',
							type: 'string',
							meta: {
								width: 'half',
								interface: 'select-icon',
							},
						},
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
						},
						{
							field: 'reload',
							name: 'Reload',
							type: 'boolean',
							schema: {
								default_value: false,
							},
							meta: {
								interface: 'boolean',
								width: 'half',
							},
						},
						{
							field: 'disabledConditions',
							name: 'Disabled Conditions',
							type: 'json',
							meta: {
								interface: 'system-filter',
								options: {
									collectionName: collection,
								},
							},
						},
					],
				},
			},
		},
	],
});
