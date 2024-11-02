<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import {
		ClipboardCheck,
		ClipboardPlus,
		SquareKanban,
		UserRoundPlus,
		UserRoundCog
	} from 'lucide-svelte';
	import { page, navigating } from '$app/stores';

	const nav = $state([
		{
			title: 'Scoreboard',
			items: [
				{
					title: 'Scoreboard',
					url: '/',
					icon: SquareKanban,
					isActive: true
				},
				{
					title: 'Quests',
					url: '/quests',
					icon: ClipboardCheck
				}
			]
		},
		{
			title: 'Management',
			items: [
				{
					title: 'Get your user',
					url: '/get-user',
					icon: UserRoundPlus
				},
				{
					title: 'Manage users',
					url: '/manage-users',
					icon: UserRoundCog
				},
				{
					title: 'Manage quests',
					url: '/manage-quests',
					icon: ClipboardPlus
				}
			]
		}
	]);

	navigating.subscribe((navigation) => {
		if (navigation) {
			activateRoute(navigation?.to?.route.id as string);
		} else {
			activateRoute($page.route.id as string);
		}
	});

	function activateRoute(routeId: string) {
		for (const group of nav) {
			for (const route of group.items) {
				if (route.url === routeId) {
					route.isActive = true;
				} else {
					route.isActive = false;
				}
			}
		}
	}
</script>

<Sidebar.Root>
	<Sidebar.Content>
		{#each nav as group}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton isActive={item.isActive}>
									{#snippet child({ props })}
										<a href={item.url} {...props}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
