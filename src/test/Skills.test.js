import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../components/Skills/Skills';

describe('Skills Component', () => {
    test('renders skills section with correct id', () => {
        const { container } = render(<Skills />);
        expect(container.querySelector('#skills')).toBeInTheDocument();
    });

    test('renders section title and subtitle', () => {
        render(<Skills />);
        expect(screen.getByText('Technical Expertise')).toBeInTheDocument();
        expect(screen.getByText(/Comprehensive skill set spanning development/i)).toBeInTheDocument();
    });

    test('renders all skill categories', () => {
        render(<Skills />);

        expect(screen.getByText('Mobile Development')).toBeInTheDocument();
        expect(screen.getByText('Web Development')).toBeInTheDocument();
        expect(screen.getByText(/Systems & Databases/i)).toBeInTheDocument();
        expect(screen.getByText('Business Systems')).toBeInTheDocument();
    });

    test('renders category icons', () => {
        render(<Skills />);

        expect(screen.getByText('📱')).toBeInTheDocument();
        expect(screen.getByText('🌐')).toBeInTheDocument();
        expect(screen.getByText('⚙️')).toBeInTheDocument();
        expect(screen.getByText('💼')).toBeInTheDocument();
    });

    test('renders mobile development skills', () => {
        render(<Skills />);

        expect(screen.getByText('Flutter')).toBeInTheDocument();
        expect(screen.getByText('Dart')).toBeInTheDocument();
        expect(screen.getByText('Android Studio')).toBeInTheDocument();
        expect(screen.getByText('UI/UX Design')).toBeInTheDocument();
    });

    test('renders web development skills', () => {
        render(<Skills />);

        expect(screen.getByText('React.js')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
        expect(screen.getByText('HTML/CSS')).toBeInTheDocument();
        expect(screen.getByText('WordPress')).toBeInTheDocument();
    });

    test('renders systems and databases skills', () => {
        render(<Skills />);

        expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
        expect(screen.getByText('MySQL')).toBeInTheDocument();
        expect(screen.getByText('Linux Administration')).toBeInTheDocument();
        expect(screen.getByText('AWS Cloud')).toBeInTheDocument();
    });

    test('renders business systems skills', () => {
        render(<Skills />);

        expect(screen.getByText('ERP Systems')).toBeInTheDocument();
        expect(screen.getByText('SAP')).toBeInTheDocument();
        expect(screen.getByText('Tally')).toBeInTheDocument();
        expect(screen.getByText('Network Admin')).toBeInTheDocument();
    });

    test('renders skill percentages', () => {
        render(<Skills />);

        // Check for some percentage values - use getAllByText for values that appear multiple times
        const ninety = screen.getAllByText('90%');
        expect(ninety.length).toBeGreaterThan(0);

        const eightyFive = screen.getAllByText('85%');
        expect(eightyFive.length).toBeGreaterThan(0);

        const eighty = screen.getAllByText('80%');
        expect(eighty.length).toBeGreaterThan(0);
    });

    test('renders skill progress bars with correct widths', () => {
        const { container } = render(<Skills />);

        const progressBars = container.querySelectorAll('.skill-progress');
        expect(progressBars.length).toBeGreaterThan(0);

        // Check that progress bars have width styles
        progressBars.forEach(bar => {
            expect(bar.style.width).toBeTruthy();
        });
    });

    test('renders Additional Technologies section', () => {
        render(<Skills />);
        expect(screen.getByText('Additional Technologies')).toBeInTheDocument();
    });

    test('renders technology tags', () => {
        render(<Skills />);

        expect(screen.getByText('Git')).toBeInTheDocument();
        expect(screen.getByText('GitHub')).toBeInTheDocument();
        expect(screen.getByText('Figma')).toBeInTheDocument();
        expect(screen.getByText('Agile')).toBeInTheDocument();
        expect(screen.getByText('Automated Testing')).toBeInTheDocument();
        expect(screen.getByText('SEO')).toBeInTheDocument();
    });

    test('renders correct number of skill categories', () => {
        const { container } = render(<Skills />);
        const categories = container.querySelectorAll('.skill-category');
        expect(categories.length).toBe(4);
    });

    test('each category has correct number of skills', () => {
        const { container } = render(<Skills />);
        const categories = container.querySelectorAll('.skill-category');

        categories.forEach(category => {
            const skills = category.querySelectorAll('.skill-item');
            expect(skills.length).toBe(4);
        });
    });
});
