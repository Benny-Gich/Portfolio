import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../components/Projects/Projects';

describe('Projects Component', () => {
    test('renders projects section with correct id', () => {
        const { container } = render(<Projects />);
        expect(container.querySelector('#projects')).toBeInTheDocument();
    });

    test('renders section title and subtitle', () => {
        render(<Projects />);
        expect(screen.getByText('Featured Projects')).toBeInTheDocument();
        expect(screen.getByText(/Showcasing my work across mobile development/i)).toBeInTheDocument();
    });

    test('renders all filter buttons', () => {
        render(<Projects />);

        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Mobile')).toBeInTheDocument();
        expect(screen.getByText('Web')).toBeInTheDocument();
        expect(screen.getByText('System')).toBeInTheDocument();
    });

    test('all filter is active by default', () => {
        render(<Projects />);

        const allButton = screen.getByText('All');
        expect(allButton).toHaveClass('active');
    });

    test('renders all projects when filter is "all"', () => {
        render(<Projects />);

        expect(screen.getByText('Smart Mirror Application')).toBeInTheDocument();
        expect(screen.getByText(/Drilling & Well Control Simulator/i)).toBeInTheDocument();
        expect(screen.getByText('Elamanella Websites')).toBeInTheDocument();
        expect(screen.getByText('ERP System Migration')).toBeInTheDocument();
    });

    test('filters projects when mobile filter is clicked', () => {
        render(<Projects />);

        const mobileButton = screen.getByText('Mobile');
        fireEvent.click(mobileButton);

        expect(screen.getByText('Smart Mirror Application')).toBeInTheDocument();
        expect(screen.getByText(/Drilling & Well Control Simulator/i)).toBeInTheDocument();
        expect(screen.queryByText('Elamanella Websites')).not.toBeInTheDocument();
        expect(screen.queryByText('ERP System Migration')).not.toBeInTheDocument();
    });

    test('filters projects when web filter is clicked', () => {
        render(<Projects />);

        const webButton = screen.getByText('Web');
        fireEvent.click(webButton);

        expect(screen.getByText('Elamanella Websites')).toBeInTheDocument();
        expect(screen.queryByText('Smart Mirror Application')).not.toBeInTheDocument();
        expect(screen.queryByText('ERP System Migration')).not.toBeInTheDocument();
    });

    test('filters projects when system filter is clicked', () => {
        render(<Projects />);

        const systemButton = screen.getByText('System');
        fireEvent.click(systemButton);

        expect(screen.getByText('ERP System Migration')).toBeInTheDocument();
        expect(screen.queryByText('Smart Mirror Application')).not.toBeInTheDocument();
        expect(screen.queryByText('Elamanella Websites')).not.toBeInTheDocument();
    });

    test('active filter button has active class', () => {
        render(<Projects />);

        const webButton = screen.getByText('Web');
        fireEvent.click(webButton);

        expect(webButton).toHaveClass('active');
        expect(screen.getByText('All')).not.toHaveClass('active');
    });

    test('renders project descriptions', () => {
        render(<Projects />);

        expect(screen.getByText(/Innovative Flutter-based smart mirror interface/i)).toBeInTheDocument();
        expect(screen.getByText(/Complex simulation application for drilling operations/i)).toBeInTheDocument();
    });

    test('renders project impact statements', () => {
        render(<Projects />);

        expect(screen.getByText(/Advanced IoT integration with facial recognition/i)).toBeInTheDocument();
        expect(screen.getByText(/Training tool for petroleum industry/i)).toBeInTheDocument();
    });

    test('renders technology tags', () => {
        render(<Projects />);

        const flutterTags = screen.getAllByText('Flutter');
        expect(flutterTags.length).toBeGreaterThan(0);

        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('SAP')).toBeInTheDocument();
    });

    test('renders GitHub links for applicable projects', () => {
        render(<Projects />);

        const githubLinks = screen.getAllByText('GitHub');
        expect(githubLinks.length).toBe(2);

        githubLinks.forEach(link => {
            expect(link).toHaveAttribute('href');
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });

    test('renders Live Demo link for web projects', () => {
        render(<Projects />);

        const liveLink = screen.getByText('Live Demo');
        expect(liveLink).toBeInTheDocument();
        expect(liveLink).toHaveAttribute('href', 'http://elamanella.com');
        expect(liveLink).toHaveAttribute('target', '_blank');
    });

    test('renders correct number of project cards initially', () => {
        const { container } = render(<Projects />);
        const projectCards = container.querySelectorAll('.project-card');
        expect(projectCards.length).toBe(4);
    });
});
