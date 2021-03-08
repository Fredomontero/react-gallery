import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Paginator from './paginator';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/gallery/cats/?count=10&page=1"
  })
}));

describe('Paginator', () => {

  let wrapper;

  const store = mockStore({
    pages: [{page: 1}, {page: 2}, {page: 3}],
    page: 1
  });

  const getWrapper = () => mount(
    <Provider store={store}>
      <BrowserRouter>
        <Paginator/>
      </BrowserRouter>
    </Provider>
  );

  beforeEach(() => {
    wrapper = getWrapper();
    // console.log(wrapper.debug());
  });

  it('renders back button', () => {
    const backButton = wrapper.find('#back-button');
    expect(backButton).toHaveLength(1);
  });

  it('renders next button', () => {
    const nextButton = wrapper.find('#next-button');
    expect(nextButton).toHaveLength(1);
  });

  it('renders 1, 2, 3 buttons when page number is smaller than 2', () => {
    let buttons = wrapper.find('button');
    buttons = buttons.slice(1, 4);
    let pages = buttons.map(button => button.text());
    expect(buttons).toHaveLength(3);
    expect(pages).toEqual(["1", "2", "3"]);
  });

  it('provides selected class to the button that matches the current page selected', () => {
    const selected = wrapper.find('.selected');
    expect(selected.text()).toEqual("1");
  });

});