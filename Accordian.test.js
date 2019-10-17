import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordian from './Accordian'

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe(`Accordian Component`, () => {
  it('renders empty given no Accordion without errors', () => {
    const wrapper = shallow(<Accordian />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the no sections by default', () => {
    const wrapper = shallow(<Accordian sections={sectionsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens any clicked section', () => {
    const wrapper = shallow(<Accordian sections={sectionsProp} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('only opens one section at a time', () => {
    const wrapper = shallow(<Accordian sections={sectionsProp} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
