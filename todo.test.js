/**
 * @jest-environment jsdom
 */
import { markAsDone } from './todo';

describe('markAsDone', () => {
    it('dodaje klasę "done" do elementu zadania', () => {
        const task = document.createElement('li');
        task.textContent = 'Zrobić zakupy';

        markAsDone(task);

        expect(task.classList.contains('done')).toBe(true);
    });
});