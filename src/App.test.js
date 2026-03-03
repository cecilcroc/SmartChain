// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SmartChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SmartChain/i);
    expect(titleElement).toBeInTheDocument();
});
