import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer/Footer';

describe('Footer Component', () => {
    test('renders footer element', () => {
        const { container } = render(<Footer />);
        expect(container.querySelector('footer')).toBeInTheDocument();
    });

    test('renders logo/name', () => {
        render(<Footer />);
        expect(screen.getByText('Benjamin Gicheche')).toBeInTheDocument();
    });

    test('renders professional roles description', () => {
        render(<Footer />);
        expect(screen.getByText(/Mobile Application Developer • Systems Administrator • Web Developer/i)).toBeInTheDocument();
    });

    test('renders Quick Links section', () => {
        render(<Footer />);
        expect(screen.getByText('Quick Links')).toBeInTheDocument();
    });

    test('renders all quick links', () => {
        render(<Footer />);

        const homeLink = screen.getByRole('link', { name: 'Home' });
        const projectsLink = screen.getByRole('link', { name: 'Projects' });
        const aboutLink = screen.getByRole('link', { name: 'About' });
        const contactLink = screen.getByRole('link', { name: 'Contact' });

        expect(homeLink).toHaveAttribute('href', '#home');
        expect(projectsLink).toHaveAttribute('href', '#projects');
        expect(aboutLink).toHaveAttribute('href', '#about');
        expect(contactLink).toHaveAttribute('href', '#contact');
    });

    test('renders Connect section', () => {
        render(<Footer />);
        expect(screen.getByText('Connect')).toBeInTheDocument();
    });

    test('renders LinkedIn link with correct attributes', () => {
        render(<Footer />);

        const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' });
        expect(linkedinLink).toHaveAttribute('href', 'http://www.linkedin.com/in/benjamin-gicheche/');
        expect(linkedinLink).toHaveAttribute('target', '_blank');
        expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders GitHub link with correct attributes', () => {
        render(<Footer />);

        const githubLink = screen.getByRole('link', { name: 'GitHub' });
        expect(githubLink).toHaveAttribute('href', 'https://github.com/Benny-Gich');
        expect(githubLink).toHaveAttribute('target', '_blank');
        expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders Email link with correct attributes', () => {
        render(<Footer />);

        const emailLink = screen.getByRole('link', { name: 'Email' });
        expect(emailLink).toHaveAttribute('href', 'mailto:benjamingicheche98@gmail.com');
    });

    test('renders current year in copyright', () => {
        render(<Footer />);

        const currentYear = new Date().getFullYear();
        expect(screen.getByText(new RegExp(`© ${currentYear} Benjamin Gicheche`))).toBeInTheDocument();
    });

    test('renders copyright message', () => {
        render(<Footer />);
        expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
    });

    test('has footer-content class structure', () => {
        const { container } = render(<Footer />);
        expect(container.querySelector('.footer-content')).toBeInTheDocument();
    });

    test('has footer-bottom class structure', () => {
        const { container } = render(<Footer />);
        expect(container.querySelector('.footer-bottom')).toBeInTheDocument();
    });

    test('external links have security attributes', () => {
        render(<Footer />);

        const externalLinks = [
            screen.getByRole('link', { name: 'LinkedIn' }),
            screen.getByRole('link', { name: 'GitHub' })
        ];

        externalLinks.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });
});
