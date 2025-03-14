import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
import ReserveView from '@/views/ReserveView.vue'
import { useDateStore } from '@/stores/dates.js'
import { createPinia, setActivePinia } from 'pinia'

describe('Táblázat', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Tartalom ellenőrzése', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Péntek')
  })

  it('Összes sor megjelenik?', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('15:00')
  })

  it('Megjelenik-e a gomb?', () =>{
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Foglalás')
  })
})