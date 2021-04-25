import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import moxios from "moxios";
import displayAllShows from "@/views/DisplayAllShows.vue";

import {
  homeShows,
  homeShowsInRandom,
  showGenres,
  homeShowsByGenres,
  sortedHomeShows
} from "../api-data.js";

describe("DisplayAllShows.vue testing", () => {
  let displayAllShowsWrapper;
  const router = new VueRouter({ path: "/", name: "DisplayAllShows" });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    moxios.install();
    displayAllShowsWrapper = shallowMount(displayAllShows, {
      localVue,
      router
    });
  });
  afterEach(() => {
    displayAllShowsWrapper.destroy();
    moxios.uninstall();
  });
  it("is a Vue instance", () => {
    expect(displayAllShowsWrapper.isVueInstance).toBeTruthy();
  });

  it("mounted assigns loading the shows, popular", () => {
    expect(displayAllShowsWrapper.vm.shows).not.toBe(undefined);
    expect(displayAllShowsWrapper.vm.popularShows).not.toBe(undefined);
  });


  it("getting show data to work by setting", done => {
    expect(displayAllShowsWrapper.vm.shows.length).toBe(0);
    expect(displayAllShowsWrapper.vm.popularShows.length).toBe(0);
    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: homeShows
      })
        .then(function () {
          expect(displayAllShowsWrapper.vm.shows.length).toBe(3);
          expect(displayAllShowsWrapper.vm.popularShows.length).toBe(2);
          done();
        });
    });
  });
   // this is setting the "shows" in displayAllShowsWrapper to be homeShows
  it("genre titles", () => {
    displayAllShowsWrapper.setData({
      shows: homeShows
    });
    expect(displayAllShowsWrapper.vm.genresTitle).toStrictEqual(showGenres);
  });

  // this is setting the "shows" in displayAllShowsWrapper to be homeShows so to test genres
  it("getting the  genres", () => {
    displayAllShowsWrapper.setData({
      shows: homeShows
    });
    expect(displayAllShowsWrapper.vm.genres).toStrictEqual(homeShowsByGenres);
  });
// used to test most rated shows based on rating
  it("return mostly rated shows based on ratings", () => {
    let data = homeShows;
    let sorted = displayAllShowsWrapper.vm.mostRatedShows(data);
    expect(sorted).toStrictEqual(sortedHomeShows);

    let dataInRandom = homeShowsInRandom;
    sorted = displayAllShowsWrapper.vm.mostRatedShows(dataInRandom);
    expect(sorted).toStrictEqual(sortedHomeShows);
  });
});
