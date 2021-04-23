import {searchShows, getAllShows, getShowCasts} from '../../../src/service/tvShow.api.js';
import axios from 'axios';
jest.mock('axios');

describe('In tvShow.api.js Test', () => {
    it('Mocking searchShows method ', () => {
        const showMockData = ["Breaking Bad", "The Wire"];
        axios.get.mockResolvedValue(showMockData);
        searchShows('Breaking').then( response => {
            expect(response).toEqual(showMockData);
        })
    })

    it('Mocking getAllShows method ', () => {
        const showMockData = ["Game of Thrones","Breaking Bad", "The Wire"];
        axios.get.mockResolvedValue(showMockData);
        getAllShows().then( response => {
            expect(response).toEqual(showMockData);
        })
    })

    it('Mocking getShowCasts method ', () => {
        const showMockData = [{name:"Breaking Bad", id:"2"}, {name:"GOT", id:"3"}];
        axios.get.mockResolvedValue(showMockData);
        getShowCasts(2).then( response => {
            expect(response).toEqual(showMockData);
        })
    })
    
})