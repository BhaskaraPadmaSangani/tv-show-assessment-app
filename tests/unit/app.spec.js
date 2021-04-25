import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "@/App.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

describe("app.vue testing", () => {
  let appWrapper;
  const router = new VueRouter({ path: "/", name: "DisplayAllShows" });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    appWrapper = shallowMount(App, {
      localVue,
      router
    });
  });
  afterEach(() => {
    appWrapper.destroy();
  });
  it("is a Vue Instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });
  it("it will renders the correct markup", () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });
  it('it should have a div element with id="app"', () => {
    expect(appWrapper.attributes("id")).toBe("app");
  });
  it("it should load the Header", () => {
    expect(Header).toBeTruthy();
  });
  it("it should have a <header-stub></header-stub>", () => {
    expect(appWrapper.html()).toContain("<header-stub></header-stub>");
  });

  // for router tag tesing
  it("it should have a <router-view-stub></router-view-stub>", () => {
    expect(appWrapper.html()).toContain(
      '<router-view-stub name="default"></router-view-stub>'
    );
  });
  // for footer testing
  it("it should load the footer", () => {
    expect(Footer).toBeTruthy();
  });
  it("it should have a </footer-stub>", () => {
    expect(appWrapper.html()).toContain("</footer-stub>");
  });
});