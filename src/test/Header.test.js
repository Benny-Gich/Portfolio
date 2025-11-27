import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header/Header';

describe('Header Component', () => {
    const mockSetDarkMode = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders header with logo', () => {
        render(<Header darkMode={false} setDarkMode={mockSetDarkMode} activeSection="home" />);
        expect(screen.getByText('Benjamin Gicheche')).toBeInTheDocument();
    });

    test('renders all navigation items', () => {
        render(<Header darkMode={false} setDarkMode={mockSetDarkMode} activeSection="home" />);

        expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
        expect(screen.getAllByText('About').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
    });

    test('highlights active section', () => {
        render(<Header darkMode={false} setDarkMode={mockSetDarkMode} activeSection="projects" />);

        const navLinks = screen.getAllByRole('button');
        const projectsButtons = navLinks.filter(btn => btn.textContent === 'Projects');

        projectsButtons.forEach(btn => {
            expect(btn).toHaveClass('active');
        });
    });

    test('toggles dark mode when theme button is clicked', () => {
        render(<Header darkMode={false} setDarkMode={mockSetDarkMode} activeSection="home" />);

        const themeToggle = screen.getByLabelText('Toggle theme');
        fireEvent.click(themeToggle);

        expect(mockSetDarkMode).toHaveBeenCalledWith(true);
    });

    test('displays correct theme icon based on mode', () => {
        const { rerender } = render(
            <Header darkMode={false} setDarkMode={mockSetDarkMode} activeSection="home" />
        );

        expect(screen.getByText('🌙')).toBeInTheDocument();

        rerender(<Header darkMode={true} setDarkMode={mockSetDarkMode} activeSection="home" />);

        expect(screen.getByText('☀️')).toBeInTheDocument();
    });

    test('opens mobile drawer when hamburger is clicked', () => {
        render(<Header darkMode={false} setDarkMode={mockSetDarkMode} activeSection="home" />);

        const hamburger = screen.getByLabelText('Toggle menu');
        fireEvent.click(hamburger);

        const drawer = document.querySelector('.mobile-drawer');
        expect(drawer).toHaveClass('open');
    });

    test('closes mobile drawer when overlay is clicked', () => {
        render(<Header darkMode={false} setDarkMode={mockSetDarkMode} activeSection="home" />);

        const hamburger = screen.getByLabelText('Toggle menu');
        fireEvent.click(hamburger);

        const overlay = document.querySelector('.drawer-overlay');
        fireEvent.click(overlay);

        const drawer = document.querySelector('.mobile-drawer');
        expect(drawer).not.toHaveClass('open');
    });

    test('closes drawer when navigation link is clicked', () => {
        render(<Header darkMode={false} setDarkMode={mockSetDarkMode} activeSection="home" />);

        // Open drawer
        const hamburger = screen.getByLabelText('Toggle menu');
        fireEvent.click(hamburger);

        // Click a drawer link
        const drawerLinks = document.querySelectorAll('.drawer-link');
        fireEvent.click(drawerLinks[0]);

        const drawer = document.querySelector('.mobile-drawer');
        expect(drawer).not.toHaveClass('open');
    });
});
