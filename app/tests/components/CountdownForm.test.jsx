var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    //testing component menggunakan mjackson expect dengan fungsi toExist. 
    //Mengecek File component apakah sudah ada atau belum
    it('Should exist', () => {
        expect(CountdownForm).toExist();
    });

    //testing component menggunakan mjackson expect dengan fungsi toHaveBeenCalled
    it('Should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    //testing component menggunakan mjackson expect dengan fungsi toNotHaveBeenCalled
    it('Should not call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109b';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});