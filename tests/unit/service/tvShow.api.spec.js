import { searchShows, getAllShows, getShowCasts } from '../../../src/service/tvShow.api.js';
import axios from 'axios';
jest.mock('axios');

describe('In tvShow.api.js file testing', () => {
    it('Mocking searchShows method ', () => {
        const mockShowData = ["Breaking Bad", "The Wire"];
        axios.get.mockResolvedValue(mockShowData);
        searchShows('The Wire').then(response => {
            expect(response).toEqual(mockShowData);
        })
    })

    it('Mocking getAllShows method ', () => {
        const mockShowData= ["Game of Thrones", "Breaking Bad", "The Wire"];
        axios.get.mockResolvedValue(mockShowData);
        getAllShows().then(response => {
            expect(response).toEqual(mockShowData);
        })
    })

    it('Mocking getShowCasts method ', () => {
        const mockShowData = [{ name: "Breaking Bad", id: "2" }, { name: "GOT", id: "3" }];
        axios.get.mockResolvedValue(mockShowData);
        getShowCasts(2).then(response => {
            expect(response).toEqual(mockShowData);
        })
    })

})