import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../components/app'

describe("A suite", () => {
  it("contains spec with an expectation", function() {
    const getUser = jest.fn();
    const token = 'xxx';
    expect(shallow(<App getUser={getUser} token={token} />).is(".react-app")).toBe(true);
  });
});
