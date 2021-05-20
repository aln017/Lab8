/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

describe('current state is correct', () => {
    test('settings is correct', () => {
        expect(pushToHistory('settings').state.page).toBe('settings');
    });

    test('entry is correct', () => {
        expect(pushToHistory('entry', 4).state.page).toBe('entry4');
    });

    test('default is correct', () => {
        expect(pushToHistory('').state.page).toBe(undefined);
    });
});

test('history length is correct', () => {
    expect(pushToHistory('settings').length).toBe(5);
});

test('history length is correct', () => {
    expect(pushToHistory('entry', 5).length).toBe(6);
});