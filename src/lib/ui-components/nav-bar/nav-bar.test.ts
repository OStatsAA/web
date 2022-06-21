// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import NavBar from './index.svelte';

test('renders', () => {
	const { getByText } = render(NavBar);

	expect(1).toEqual(1);
});
