<script setup lang="ts">
	import { ref } from 'vue'

	const props = defineProps<{
		title?: string
	}>()
	
	const title = ref(props.title)
</script>

<template>
	<div>
		<h3 data-test-id="anime-card-title">{{ title }}</h3>
	</div>
</template>

<style lang="scss" scoped>

</style>