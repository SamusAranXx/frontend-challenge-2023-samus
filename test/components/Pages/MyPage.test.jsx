import { render, screen } from '@testing-library/react';
import MyPage from '../../../src/components/Pages/Home/MyPage';

describe('Test in MyPage', () => {

    it("Should render", () => {
        const title = 'My Title';
        const text  = 'This is the content';

        render(<MyPage />);
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toBe(title);
        expect( screen.getByText(text) ).toBeTruthy();
    });
});