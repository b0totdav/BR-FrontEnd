import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import Calculator from '../Calculator.vue'
import { useCalculatorStore } from '@/stores/calculator'
import { createPinia, setActivePinia } from 'pinia'

describe('Számológép', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Tartalom ellenőrzése', () => {
    const wrapper = mount(Calculator)
    expect(wrapper.text()).toContain('Számológép')
  })

  it('Kijelző kezdetben 0', () =>{
    const calc = useCalculatorStore()
    expect(calc.display).toBe("0")
  })

  it('Jól számol?', () => {
    const calc = useCalculatorStore()
    calc.display = "3+3"
    calc.calculate()
    expect(calc.display).toBe("6")
  })
  it('Jó-e a bevitel?', () =>{
    const wrapper = mount(Calculator)
    const calc = useCalculatorStore()
    const btns=wrapper.findAll('button')
    let res=""
    btns.forEach(b=>{
      if(b.element.innerHTML != "C" && b.element.innerHTML != "="){
        b.trigger('click')
        res+=b.element.innerHTML
        expect(calc.display).toBe(res)
      }
    })  
  })
  it('Törlés gomb', () => {
    const wrapper = mount(Calculator)
    const calc = useCalculatorStore()
    const btns=wrapper.findAll('button')//.find(b=> b.element.innerHTML =="C")
    btns.at(14).trigger('click')
    expect(calc.display).toBe("0")
  })
})

