import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../components/Contact/Contact';

describe('Contact Component', () => {
    // Mock window.location.href
    delete window.location;
    window.location = { href: '' };

    beforeEach(() => {
        window.location.href = '';
    });

    test('renders contact section with correct id', () => {
        const { container } = render(<Contact />);
        expect(container.querySelector('#contact')).toBeInTheDocument();
    });

    test('renders section title and subtitle', () => {
        render(<Contact />);
        expect(screen.getByText("Let's Work Together")).toBeInTheDocument();
        expect(screen.getByText(/Ready to bring your ideas to life/i)).toBeInTheDocument();
    });

    test('renders Get In Touch section', () => {
        render(<Contact />);
        expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    });

    test('renders email contact information', () => {
        render(<Contact />);

        expect(screen.getByText('Email')).toBeInTheDocument();
        const emailLink = screen.getByText('benjamingicheche98@gmail.com');
        expect(emailLink).toHaveAttribute('href', 'mailto:benjamingicheche98@gmail.com');
    });

    test('renders phone contact information', () => {
        render(<Contact />);

        expect(screen.getByText('Phone')).toBeInTheDocument();
        const phoneLink = screen.getByText('+254 715 210 566');
        expect(phoneLink).toHaveAttribute('href', 'tel:+254715210566');
    });

    test('renders LinkedIn contact information', () => {
        render(<Contact />);

        expect(screen.getByText('LinkedIn')).toBeInTheDocument();
        const linkedinLink = screen.getByText('Benjamin Gicheche');
        expect(linkedinLink).toHaveAttribute('href', 'http://www.linkedin.com/in/benjamin-gicheche/');
        expect(linkedinLink).toHaveAttribute('target', '_blank');
    });

    test('renders GitHub contact information', () => {
        render(<Contact />);

        expect(screen.getByText('GitHub')).toBeInTheDocument();
        const githubLink = screen.getByText('Benny-Gich');
        expect(githubLink).toHaveAttribute('href', 'https://github.com/Benny-Gich');
        expect(githubLink).toHaveAttribute('target', '_blank');
    });

    test('renders availability status', () => {
        render(<Contact />);

        expect(screen.getByText('Current Status')).toBeInTheDocument();
        expect(screen.getByText('Available for new opportunities')).toBeInTheDocument();
    });

    test('renders all form fields', () => {
        render(<Contact />);

        expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
    });

    test('renders form info message', () => {
        render(<Contact />);
        expect(screen.getByText(/This form will open your default email client/i)).toBeInTheDocument();
    });

    test('renders submit button', () => {
        render(<Contact />);
        expect(screen.getByText('Send Message')).toBeInTheDocument();
    });

    test('updates form data when user types', () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText('Your Name');
        const emailInput = screen.getByPlaceholderText('Your Email');
        const subjectInput = screen.getByPlaceholderText('Subject');
        const messageInput = screen.getByPlaceholderText('Your Message');

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
        fireEvent.change(messageInput, { target: { value: 'Test message' } });

        expect(nameInput.value).toBe('John Doe');
        expect(emailInput.value).toBe('john@example.com');
        expect(subjectInput.value).toBe('Test Subject');
        expect(messageInput.value).toBe('Test message');
    });

    test('submits form and opens mailto link', () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText('Your Name');
        const emailInput = screen.getByPlaceholderText('Your Email');
        const subjectInput = screen.getByPlaceholderText('Subject');
        const messageInput = screen.getByPlaceholderText('Your Message');

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
        fireEvent.change(messageInput, { target: { value: 'Test message' } });

        const form = screen.getByText('Send Message').closest('form');
        fireEvent.submit(form);

        expect(window.location.href).toContain('mailto:benjamingicheche98@gmail.com');
        expect(window.location.href).toContain('Test%20Subject');
    });

    test('resets form after submission', () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText('Your Name');
        const emailInput = screen.getByPlaceholderText('Your Email');
        const subjectInput = screen.getByPlaceholderText('Subject');
        const messageInput = screen.getByPlaceholderText('Your Message');

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
        fireEvent.change(messageInput, { target: { value: 'Test message' } });

        const form = screen.getByText('Send Message').closest('form');
        fireEvent.submit(form);

        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(subjectInput.value).toBe('');
        expect(messageInput.value).toBe('');
    });

    test('form fields are required', () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText('Your Name');
        const emailInput = screen.getByPlaceholderText('Your Email');
        const subjectInput = screen.getByPlaceholderText('Subject');
        const messageInput = screen.getByPlaceholderText('Your Message');

        expect(nameInput).toBeRequired();
        expect(emailInput).toBeRequired();
        expect(subjectInput).toBeRequired();
        expect(messageInput).toBeRequired();
    });

    test('email input has correct type', () => {
        render(<Contact />);

        const emailInput = screen.getByPlaceholderText('Your Email');
        expect(emailInput).toHaveAttribute('type', 'email');
    });
});
