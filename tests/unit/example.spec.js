import { shallowMount } from '@vue/test-utils'
//import HelloWorld from '../../src/App.vue'
import App from '../../src/App.vue'
describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    //const wrapper = shallowMount(HelloWorld)
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
