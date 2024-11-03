<script>
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="flex flex-row">
	{#each [1, 2, 3] as num}
		<div class="m-3 flex flex-col p-1 min-w-40">
			<h2 class="mb-2">Dailys</h2>
			<div>
				<Checkbox id="task1{num}" />
				<Label for="task1{num}">Task 1</Label>
			</div>
      <Separator class="my-1" />
			<div>
				<Checkbox id="task2{num}" />
				<Label for="task2{num}">Task 2</Label>
			</div>
			<div>
				<Checkbox id="task3{num}" />
				<Label for="task3{num}">Task 3</Label>
			</div>
			<div>
				<Checkbox id="task4{num}" />
				<Label for="task4{num}">Task 4</Label>
			</div>
		</div>
	{/each}
</div>
