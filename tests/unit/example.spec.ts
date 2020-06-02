import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

describe("Navbar.vue", () => {
  it("renders Navbar", () => {
    const wrapper = shallowMount(Navbar);
    ["Vue Test App", "Home", "About"].forEach(element =>
      expect(wrapper.text()).toContain(element)
    );
  });
});

describe("Footer.vue", () => {
  it("renders Footer", () => {
    const wrapper = shallowMount(Footer);
    [
      "Footer Content",
      "You can use rows and columns here to organize your footer content",
      "Links",
      "Link 1",
      "Link 2",
      "Link 3",
      "Link 4",
      "© 2014 Copyright Text",
      "More Links"
    ].forEach(element => expect(wrapper.text()).toContain(element));
  });
});
