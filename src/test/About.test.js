import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../components/About/About';

describe('About Component', () => {
    test('renders about section with correct id', () => {
        const { container } = render(<About />);
        expect(container.querySelector('#about')).toBeInTheDocument();
    });

    test('renders section title', () => {
        render(<About />);
        expect(screen.getByText('About Me')).toBeInTheDocument();
    });

    test('renders about description text', () => {
        render(<About />);
        expect(screen.getByText(/highly motivated and innovative professional/i)).toBeInTheDocument();
        expect(screen.getByText(/Flutter mobile development, React.js web applications/i)).toBeInTheDocument();
    });

    test('renders profile image with correct alt text', () => {
        render(<About />);

        const image = screen.getByAltText('Benjamin Gicheche - Professional');
        expect(image).toBeInTheDocument();
        expect(image).toHaveClass('about-image');
    });

    test('renders all highlight sections', () => {
        render(<About />);

        expect(screen.getByText('Fast Learner')).toBeInTheDocument();
        expect(screen.getByText(/Quick to adapt to new technologies/i)).toBeInTheDocument();

        expect(screen.getByText('Problem Solver')).toBeInTheDocument();
        expect(screen.getByText(/Strong analytical skills/i)).toBeInTheDocument();

        expect(screen.getByText('Team Player')).toBeInTheDocument();
        expect(screen.getByText(/Effective communicator/i)).toBeInTheDocument();
    });

    test('renders Professional Journey section', () => {
        render(<About />);
        expect(screen.getByText('Professional Journey')).toBeInTheDocument();
    });

    test('renders all experience positions', () => {
        render(<About />);

        expect(screen.getByText('Systems Administrator')).toBeInTheDocument();
        expect(screen.getByText('SARRAI Group of Companies')).toBeInTheDocument();
        expect(screen.getByText('2021 - Present')).toBeInTheDocument();
        expect(screen.getByText('Nairobi, KE')).toBeInTheDocument();

        expect(screen.getByText('Mobile Application Developer')).toBeInTheDocument();
        expect(screen.getByText('Attractions')).toBeInTheDocument();
        expect(screen.getByText('2024 - Present')).toBeInTheDocument();
        expect(screen.getByText('Staffordshire, UK (Remote)')).toBeInTheDocument();

        expect(screen.getByText('Web Developer')).toBeInTheDocument();
        expect(screen.getByText('App Lovin')).toBeInTheDocument();
        expect(screen.getByText('2022 - 2025')).toBeInTheDocument();
        expect(screen.getByText('California, US (Remote)')).toBeInTheDocument();
    });

    test('renders experience achievements', () => {
        render(<About />);

        // SARRAI achievements
        expect(screen.getByText(/Directed enterprise infrastructure/i)).toBeInTheDocument();
        expect(screen.getByText(/Led TIMs-regulated ETRS migration/i)).toBeInTheDocument();

        // Attractions achievements
        expect(screen.getByText(/Engineered responsive, adaptive UI components/i)).toBeInTheDocument();
        expect(screen.getByText(/Smart Mirror, Drilling and Well Control Simulator/i)).toBeInTheDocument();

        // App Lovin achievements
        expect(screen.getByText(/Developed 5\+ responsive websites/i)).toBeInTheDocument();
        expect(screen.getByText(/99.9% uptime/i)).toBeInTheDocument();
    });

    test('renders correct number of timeline items', () => {
        const { container } = render(<About />);
        const timelineItems = container.querySelectorAll('.timeline-item');
        expect(timelineItems.length).toBe(3);
    });

    test('each experience has timeline marker', () => {
        const { container } = render(<About />);
        const markers = container.querySelectorAll('.timeline-marker');
        expect(markers.length).toBe(3);
    });
});
