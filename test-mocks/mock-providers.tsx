import { MemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';

type MockProviderProps = {
	children: ReactNode;
}

export const MockRouterProvider = ({ children }: MockProviderProps) => {
	return <MemoryRouter>{children}</MemoryRouter>;
};
