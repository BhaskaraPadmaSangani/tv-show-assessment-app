import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin, BButton } from "bootstrap-vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  let headerWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    headerWrapper = shallowMount(Header, {
      localVue,
      router,
      stubs: ["router-link"]
    });
  });

  afterEach(() => {
    headerWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(headerWrapper.isVueInstance).toBeTruthy();
  });

  it("has called serched function", () => {
    headerWrapper.vm.search = jest.fn();
    headerWrapper.findComponent(BButton).trigger("click");
    expect(headerWrapper.vm.search).toHaveBeenCalled();
  });
  it('should call router.push() in search()', () => {
    headerWrapper.vm.$router.push = jest.fn()
    headerWrapper.vm.search();
    expect(headerWrapper.vm.$router.push).toHaveBeenCalled();
  })
});
