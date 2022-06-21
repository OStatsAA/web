<script lang="ts">
	// @ts-ignore
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import NavBar from './index.svelte';
</script>

<Meta
	title="NavBar Menu"
	component={NavBar}
	argTypes={{
		label: { control: 'text' },
		primary: { control: 'boolean' }
	}}
/>

<Template let:args>
	<NavBar {...args} />
</Template>

<Story
	name="Primary"
	args={{
		primary: true,
		label: 'Button'
	}}
/>
