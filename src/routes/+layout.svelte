<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import LightSwitch from '$lib/components/light-switch.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import '../app.css';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			<Sidebar.Trigger class="-ml-1" />
			<Separator orientation="vertical" class="mr-2 h-4" />
			<div class="grow"></div>
			<LightSwitch />

		</header>
		{@render children()}
	</Sidebar.Inset>
</Sidebar.Provider>
