import { shallowMount, createLocalVue } from "@vue/test-utils";
import Season from "@/components/Season.vue";
import { showSeasons } from "../api-data.js";

describe("It is ued to test Season.vue", () => {
  let seasonWrapper;
  const season = showSeasons;
  beforeEach(() => {
    const localVue = createLocalVue();

    seasonWrapper = shallowMount(Season, {
      localVue,
      propsData: {
        season
      }
    });
  });

  afterEach(() => {
    seasonWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(seasonWrapper.isVueInstance).toBeTruthy();
  });

  it("Used to display test season number", () => {
    expect(seasonWrapper.find(".season-number").exists()).toBe(true);
  });


  it("Used to display test card-border", () => {
    expect(seasonWrapper.find(".card-border").exists()).toBe(true);
  });
});
