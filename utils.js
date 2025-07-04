/**
 * @jest-environment jsdom
 */
import { addTask } from './todo';

describe('addTask', () => {
    it('dodaje nowe zadanie do listy', () => {
        const ul = document.createElement('ul');
        addTask('Zrobić zakupy', ul);

        expect(ul.children.length).toBe(1);
        expect(ul.children[0].textContent).toBe('Zrobić zakupy');
    });
});