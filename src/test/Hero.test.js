import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../components/Hero/Hero';

describe('Hero Component', () => {
    test('renders hero section with correct id', () => {
        const { container } = render(<Hero />);
        expect(container.querySelector('#home')).toBeInTheDocument();
    });

    test('renders hero title with name', () => {
        render(<Hero />);
        expect(screen.getByText(/Benjamin Gicheche/i)).toBeInTheDocument();
    });

    test('renders availability badge', () => {
        render(<Hero />);
        expect(screen.getByText(/Available for New Opportunities/i)).toBeInTheDocument();
    });

    test('renders professional roles', () => {
        render(<Hero />);
        expect(screen.getByText(/Mobile Application Developer/i)).toBeInTheDocument();
        expect(screen.getByText(/Systems Administrator/i)).toBeInTheDocument();
        expect(screen.getByText(/Web Developer/i)).toBeInTheDocument();
    });

    test('renders hero description', () => {
        render(<Hero />);
        expect(screen.getByText(/Full-stack developer/i)).toBeInTheDocument();
    });

    test('renders all stats correctly', () => {
        render(<Hero />);

        expect(screen.getByText('5+')).toBeInTheDocument();
        expect(screen.getByText('Years Experience')).toBeInTheDocument();

        expect(screen.getByText('10K+')).toBeInTheDocument();
        expect(screen.getByText('Monthly Users')).toBeInTheDocument();

        expect(screen.getByText('99.9%')).toBeInTheDocument();
        expect(screen.getByText('Uptime')).toBeInTheDocument();
    });

    test('renders action buttons', () => {
        render(<Hero />);

        expect(screen.getByText('View My Work')).toBeInTheDocument();
        expect(screen.getByText("Let's Connect")).toBeInTheDocument();
    });

    test('renders profile image with correct alt text', () => {
        render(<Hero />);

        const image = screen.getByAltText('Benjamin Gicheche');
        expect(image).toBeInTheDocument();
        expect(image).toHaveClass('profile-image');
    });

    test('scrolls to projects section when View My Work is clicked', () => {
        // Mock scrollIntoView
        const mockScrollIntoView = jest.fn();
        const mockGetElementById = jest.spyOn(document, 'getElementById');
        mockGetElementById.mockReturnValue({
            scrollIntoView: mockScrollIntoView
        });

        render(<Hero />);

        const viewWorkButton = screen.getByText('View My Work');
        fireEvent.click(viewWorkButton);

        expect(mockGetElementById).toHaveBeenCalledWith('projects');
        expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

        mockGetElementById.mockRestore();
    });

    test('scrolls to contact section when Let\'s Connect is clicked', () => {
        // Mock scrollIntoView
        const mockScrollIntoView = jest.fn();
        const mockGetElementById = jest.spyOn(document, 'getElementById');
        mockGetElementById.mockReturnValue({
            scrollIntoView: mockScrollIntoView
        });

        render(<Hero />);

        const connectButton = screen.getByText("Let's Connect");
        fireEvent.click(connectButton);

        expect(mockGetElementById).toHaveBeenCalledWith('contact');
        expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

        mockGetElementById.mockRestore();
    });
});
