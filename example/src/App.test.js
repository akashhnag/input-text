import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {InputBox} from '../../src/index';
import puppeteer from 'puppeteer';

test('Input component present or not',()=>{
    const wrapper=shallow(<InputBox></InputBox>);
    // wrapper.find('.text').simulate('change',{
    //     target:{value:'helllo'}
    // })
    console.log(wrapper.find('input').props());

    expect(wrapper.find('input').exists()).toBe(true);
})

// test('testing puppeteer',async()=>{
//     const browser=await puppeteer.launch({
//         headless:false,
//         slowMo:80,
//         args:['--window-size=1920,1080']
//     })

//     const page=await browser.newPage();
//     page.goto('http://localhost:3000/');

//     await page.click('input#pass');
//     await page.type('input#pass','annagaefaaergreg');
//     //await page.click('input#text');
// })
