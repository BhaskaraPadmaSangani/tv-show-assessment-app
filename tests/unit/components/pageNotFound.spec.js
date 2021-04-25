import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import pageNotFound from "@/components/PageNotFound.vue";

describe("Footer.vue", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    wrapper = shallowMount(pageNotFound, {
      localVue
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
