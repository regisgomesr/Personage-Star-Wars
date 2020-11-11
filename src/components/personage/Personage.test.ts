import { shallow } from "../../../enzyme";

import PersonageComponent from "./index";

describe("List tests", () => {
  it("should render 10 items", () => {
    const people = [
      { name: "Luke Skywalker", eye_color: "blue" },
      { name: "R2-D2", eye_color: "red" }
    ];
    const wrapper = shallow(<PersonageComponent people={people} />);

    console.log(wrapper.debug);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find("PersonageComponent")).toHaveLength(people.length);
  });
});
