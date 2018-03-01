var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {

    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () =>{
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');
            
            //toBe(1) => selected component button
            //lenght button di hitung sesuai dengan urutan button pada controls.jsx, 
            //di kasus pause button berada di urutan 1 sehingga string untuk lengthnya di isi 1
            expect($pauseButton.length).toBe(1);
        });

        it('should render start when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Start)');

            //toBe(1) => selected component button
            //lenght button di hitung sesuai dengan urutan button pada controls.jsx, 
            //di kasus pause button berada di urutan 1 sehingga string untuk lengthnya di isi 1
            expect($pauseButton.length).toBe(1);
        })
    })
});