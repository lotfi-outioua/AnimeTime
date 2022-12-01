import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AnimeCard from './anime-card.vue'

/*
	regle des 3 A
	Asert -> fonctionnalité du test ( expect... )
	Arrange -> mise en place des elements du test
	Acte -> action a faire durant le test
*/

describe('AnimeCard', () => {
	describe('title', () => {
		it('should display the provided title', () => {
			const wrapper = mount(AnimeCard, {
				propsData: {
					title: 'Naruto'
				}
			})
			const title = wrapper.find('[data-test-id="anime-card-title"]')

			expect(title.text()).toBe('Naruto')
		})
	});
});