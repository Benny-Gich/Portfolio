import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
  beforeEach(() => {
    // Clear body classes before each test
    document.body.className = '';
  });

  test('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App')).toBeInTheDocument();
  });

  test('renders all main components', () => {
    const { container } = render(<App />);

    // Check for all sections
    expect(container.querySelector('#home')).toBeInTheDocument();
    expect(container.querySelector('#projects')).toBeInTheDocument();
    expect(container.querySelector('#about')).toBeInTheDocument();
    expect(container.querySelector('#contact')).toBeInTheDocument();
    expect(container.querySelector('#skills')).toBeInTheDocument();
  });

  test('renders Header component', () => {
    render(<App />);
    expect(screen.getByLabelText('Toggle theme')).toBeInTheDocument();
  });

  test('renders Hero component', () => {
    const { container } = render(<App />);
    const heroSection = container.querySelector('#home');
    expect(heroSection).toBeInTheDocument();
    expect(heroSection.textContent).toContain('Available for New Opportunities');
  });

  test('renders Projects component', () => {
    render(<App />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  test('renders About component', () => {
    render(<App />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  test('renders Skills component', () => {
    render(<App />);
    expect(screen.getByText('Technical Expertise')).toBeInTheDocument();
  });

  test('renders Contact component', () => {
    const { container } = render(<App />);
    const contactSection = container.querySelector('#contact');
    expect(contactSection).toBeInTheDocument();
    expect(contactSection.textContent).toContain("Let's Work Together");
  });

  test('renders Footer component', () => {
    const { container } = render(<App />);
    const currentYear = new Date().getFullYear();
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer.textContent).toContain(`© ${currentYear}`);
  });

  test('dark mode is disabled by default', () => {
    render(<App />);
    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });

  test('toggles dark mode when theme button is clicked', () => {
    render(<App />);

    const themeToggle = screen.getByLabelText('Toggle theme');

    // Initially not in dark mode
    expect(document.body.classList.contains('dark-mode')).toBe(false);

    // Click to enable dark mode
    fireEvent.click(themeToggle);
    expect(document.body.classList.contains('dark-mode')).toBe(true);

    // Click again to disable dark mode
    fireEvent.click(themeToggle);
    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });

  test('active section defaults to home', () => {
    render(<App />);

    const homeButtons = screen.getAllByRole('button').filter(btn => btn.textContent === 'Home');
    homeButtons.forEach(btn => {
      expect(btn).toHaveClass('active');
    });
  });

  test('updates active section on scroll', async () => {
    render(<App />);

    // Mock section elements
    const mockProjectsElement = document.createElement('div');
    mockProjectsElement.id = 'projects';
    Object.defineProperty(mockProjectsElement, 'offsetTop', { value: 800, writable: true });
    Object.defineProperty(mockProjectsElement, 'offsetHeight', { value: 600, writable: true });

    const mockHomeElement = document.createElement('div');
    mockHomeElement.id = 'home';
    Object.defineProperty(mockHomeElement, 'offsetTop', { value: 0, writable: true });
    Object.defineProperty(mockHomeElement, 'offsetHeight', { value: 700, writable: true });

    const originalGetElementById = document.getElementById;
    document.getElementById = jest.fn((id) => {
      if (id === 'projects') return mockProjectsElement;
      if (id === 'home') return mockHomeElement;
      return originalGetElementById.call(document, id);
    });

    // Trigger scroll event
    Object.defineProperty(window, 'pageYOffset', { value: 800, writable: true });
    fireEvent.scroll(window);

    // Wait for state update
    await waitFor(() => {
      const projectsButtons = screen.getAllByRole('button').filter(btn => btn.textContent === 'Projects');
      if (projectsButtons.length > 0) {
        expect(projectsButtons[0]).toHaveClass('active');
      }
    });

    // Restore
    document.getElementById = originalGetElementById;
  });

  test('app has correct structure', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App')).toBeInTheDocument();
  });

  test('components render in correct order', () => {
    const { container } = render(<App />);

    const sections = container.querySelectorAll('section');
    const sectionIds = Array.from(sections).map(section => section.id).filter(id => id);

    expect(sectionIds).toEqual(['home', 'projects', 'about', 'skills', 'contact']);
  });
});
