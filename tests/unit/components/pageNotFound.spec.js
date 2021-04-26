import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import pageNotFound from "@/components/PageNotFound.vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

describe("Footer.vue", () => {
  let wrapper;
  const router = new VueRouter({ routes });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    wrapper = shallowMount(pageNotFound, {
      localVue,
      router,
      stubs: ["router-link"]
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("contain header in the class", () => {
    expect(wrapper.find(".heading").exists()).toBe(true);
  });
});
