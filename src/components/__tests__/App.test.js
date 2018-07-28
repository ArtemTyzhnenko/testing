import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox/CommentBox';
import CommentList from '../CommentList/CommentList'

it('show a comment box', () => {
    const wrapped = shallow(<App/>);

    expect(wrapped.find(CommentBox).length).toEqual(1);
});


it('show a comment list', () => {
    const wrapped = shallow(<App/>);

    expect(wrapped.find(CommentList).length).toEqual(1);
});