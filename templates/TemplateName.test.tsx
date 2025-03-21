import { screen } from '@testing-library/react';
import { renderWithDeps } from '../jest.utils';
import TemplateName from './TemplateName';

describe('<TemplateName />', () => {
	it('renders', () => {
		renderWithDeps(<TemplateName/>);

		const templateName = screen.getByTestId('TemplateName');

		expect(templateName).toBeVisible();
	});
});
