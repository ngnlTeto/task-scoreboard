<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import LightSwitch from '$lib/components/light-switch.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Button from '$lib/components/ui/button/button.svelte';
	import { PanelLeftClose, PanelLeftOpen } from 'lucide-svelte';

	let { children } = $props();
	let open = $state(true);
</script>

<ModeWatcher />
<Sidebar.Provider bind:open>
	<AppSidebar />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			<Button variant="ghost" onclick={() => (open = !open)}>
				{#if open}
					<PanelLeftClose></PanelLeftClose>
					<span>Close Sidebar</span>
				{:else}
				<PanelLeftOpen></PanelLeftOpen>
				<span>Open Sidebar</span>{/if}
			</Button>
			<div class="grow"></div>
			<LightSwitch />
		</header>
		{@render children()}
	</Sidebar.Inset>
</Sidebar.Provider>
