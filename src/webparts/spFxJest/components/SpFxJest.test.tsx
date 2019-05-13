import * as React from 'react';
import { shallow } from 'enzyme';
import JestTest  from "./SpFxJest";

describe('SpFxJest component', () => {

  let component = shallow<JestTest>(<JestTest description="Test description" />);
  
  test('should exist', () => {
    console.log(component.debug());
    expect(component).toBeDefined();
  });

  test('should have description: "Test description"', () => {
    expect(component.find(".description").text()).toBe("Test description");
  });
  
});