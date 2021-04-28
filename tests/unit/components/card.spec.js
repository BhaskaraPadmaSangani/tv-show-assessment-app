import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Card from "@/components/Card.vue";
import { showDetails } from "../api-data.js";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

describe("Card.vue", () => {
  let cardWrapper;
  const router = new VueRouter({ routes });
  const show = showDetails;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    cardWrapper = shallowMount(Card, {
      localVue,
      router,
      propsData: {
        show
      },
      stubs: ["router-link"]
    });
  });

  afterEach(() => {
    cardWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(cardWrapper.isVueInstance).toBeTruthy();
  });
  it("To display show average", () => {
    expect(cardWrapper.find(".show-average").exists()).toBe(true);
    expect(cardWrapper.find(".show-average").text()).toContain(
      show.rating.average
    );
  });
  it("To display show premiered", () => {
    expect(cardWrapper.find(".show-premiered").exists()).toBe(true);
    expect(cardWrapper.find(".show-premiered").text()).toContain(
      show.premiered
    );
  });
  it("To display show genres", () => {
    expect(cardWrapper.find(".show-genres").exists()).toBe(true);
    expect(cardWrapper.find(".show-genres").text()).toContain(
      show.genres.join(", ")
    );
  });

  // This is used to test the router path for button
  it('should call router.push() in displayCardDetails()', () => {
    cardWrapper.vm.$router.push = jest.fn()
    cardWrapper.vm.displayCardDetails()
    expect(cardWrapper.vm.$router.push).toHaveBeenCalled();
  });
});
