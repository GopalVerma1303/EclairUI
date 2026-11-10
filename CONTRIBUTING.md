# Contributing to EclairUI

First off, thank you for considering contributing to EclairUI! It's people like you who make EclairUI a great tool for everyone. This document provides guidelines and steps for contributing.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to [project maintainers].

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues list as you might find that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots if possible**
- **Include your environment details** (OS, Node.js version, pnpm version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**
- **List some other tools or applications where this enhancement exists**

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Follow the TypeScript and JavaScript styleguides
- Include thoughtfully-worded, well-structured tests
- Document new code
- End all files with a newline

## Development Process

1. Fork the repository
2. Clone your fork locally

```bash
git clone https://github.com/your-username/EclairUI.git
cd EclairUI
```

3. Create a new branch

```bash
git checkout -b feature/your-feature-name
```

4. Install dependencies

```bash
pnpm install
```

5. Make your changes
6. Run tests and linting

```bash
pnpm lint
pnpm test
```

7. Commit your changes

```bash
git commit -m "feat: add your feature description"
```

8. Push to your fork

```bash
git push origin feature/your-feature-name
```

9. Open a Pull Request

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that do not affect the meaning of the code
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `perf:` A code change that improves performance
- `test:` Adding missing tests or correcting existing tests
- `chore:` Changes to the build process or auxiliary tools

## Project Structure

```
├── apps/
│   ├── website/      # Main documentation site
│   ├── template/     # UI templates
│   └── playground/   # Component testing
├── packages/
│   ├── cli/          # CLI tool
│   ├── config-*/     # Shared configurations
│   └── ui/           # Core components
```

### Component Development Guidelines

When creating new components:

1. **Directory Structure**

```
components/
└── YourComponent/
    ├── index.tsx
    ├── YourComponent.test.tsx
    ├── YourComponent.stories.tsx
    └── README.md
```

2. **Component Checklist**

- [ ] TypeScript types/interfaces
- [ ] Proper accessibility attributes
- [ ] Responsive design
- [ ] Documentation
- [ ] Unit tests
- [ ] Storybook stories
- [ ] Performance considerations

3. **Documentation Requirements**

- Component description
- Props documentation
- Usage examples
- Edge cases and limitations
- Accessibility considerations

## Style Guide

### TypeScript

- Use functional components with hooks
- Define proper interfaces for props
- Use proper type imports/exports
- Avoid `any` types
- Use meaningful variable names

### CSS/Tailwind

- Follow utility-first principles
- Use semantic class names
- Maintain consistent spacing
- Follow responsive design patterns
- Use CSS variables for theming

## Testing

- Write unit tests for new components
- Include integration tests where necessary
- Test accessibility
- Test responsive behavior
- Test edge cases

## Documentation

- Update relevant documentation
- Include inline comments for complex logic
- Update component stories
- Add usage examples
- Document breaking changes

## Review Process

1. Automated checks must pass
2. Two approvals from maintainers required
3. All conversations must be resolved
4. Documentation must be updated
5. Tests must be included

## Getting Help

- Join our [Discord community](#)
- Check out the [documentation](https://eclairui.gopalverma.com)
- Ask in GitHub Discussions
- Reach out to maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
