import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Card from "@/components/Card.vue";
import { showDetails } from "../api-data.js";

describe("ShowCard.vue", () => {
  let cardWrapper;
  const show = showDetails;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    cardWrapper = shallowMount(Card, {
      localVue,
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
  it("display show average", () => {
    expect(cardWrapper.find(".show-average").exists()).toBe(true);
    expect(cardWrapper.find(".show-average").text()).toContain(
      show.rating.average
    );
  });
  it("display show premiered", () => {
    expect(cardWrapper.find(".show-premiered").exists()).toBe(true);
    expect(cardWrapper.find(".show-premiered").text()).toContain(
      show.premiered
    );
  });
  it("display show genres", () => {
    expect(cardWrapper.find(".show-genres").exists()).toBe(true);
    expect(cardWrapper.find(".show-genres").text()).toContain(
        show.genres.join(", ")
      );
  });
});
