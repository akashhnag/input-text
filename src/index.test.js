import React from 'react';
import {shallow} from 'enzyme';
import {InputBox} from './index';
import puppeteer from 'puppeteer';


test('Input component present or not',()=>{
    const wrapper=shallow(<InputBox></InputBox>);
    // wrapper.find('.text').simulate('change',{
    //     target:{value:'helllo'}
    // })
    console.log(wrapper.find('input').props());

    expect(wrapper.find('input').exists()).toBe(true);
})
