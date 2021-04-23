import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin, BButton } from "bootstrap-vue";
import VueRouter from "vue-router";

import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  let headerWrapper;
  ////why we are using search path here
  const router = new VueRouter({ path: "/search/:query", name: "Search" });
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
    const search = jest.fn();
    headerWrapper.setMethods({
      search: search
    });
    headerWrapper.find(BButton).trigger("click");
    expect(headerWrapper.vm.search).toHaveBeenCalled();
  });
});
