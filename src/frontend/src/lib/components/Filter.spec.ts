import '@testing-library/jest-dom';
import { render, screen, fireEvent} from "@testing-library/svelte";
import Filter from './Filter.svelte';
import {filter_data, isInputDisabled} from '$stores/filter.ts';

describe('Filter component', () => {
    const data = {
        'creator': ['test1', 'test2', 'test3'],
        'platform': ['test4', 'test5', 'test6'],
        'genre': ['test7', 'test8', 'test9']}
    
    test('tags enable',  () => {
        render(Filter, { props: { creator: ['test'], platform: ['test', 'test'], genre: ['test', 'test'] } });
        const tags = screen.getByTestId('tags')
        expect(isInputDisabled).toBeTruthy()
        expect(tags).toBeDefined()
      })

    test('render empty list',  () => {
        render(Filter, { props: { creator: [], platform: [], genre: [] } });
      })
    
    test('set filter_data',  () => {
        filter_data.set(data)
        render(Filter)        
      })

});