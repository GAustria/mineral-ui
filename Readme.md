# UXPin code

Command-line tool integrating Design System repository with http://code.uxpin.com

## Installation
Add `uxpin-code` to your package.json:
```
npm install uxpin-code --save-dev
```
or
```
yarn add uxpin-code --dev
```

## Usage

This tool recognizes components available in your repository of component library, analyze them and uploads results to code.uxpin.com in order to further integration with UXPin Design System services.

## Limitations

We work hard to support the widest possible range of repositories. To minimize the user effort needed to integrate with UXPin, we start by supporting all repositories already working with a [react-styleguidist](https://github.com/styleguidist/react-styleguidist). Given that, your repository must meet the following criteria:

- components are implemented in React.js,
- component properties are defined using React PropTypes,
- components are placed in separate directories and follow "Component declaration convention"

## Component declaration convention

We expect all compoents to have separate directories under `src/components` or `components` directory:

```
src
└── components
    └── Button
        ├── Button.jsx                      <-- Button implementation
        └── Readme.md                       <-- Button documentation and usage examples
```
#### Component implementation

Components may be functional or stateful, however must be **default exported** from the implementation file. Allowed implementation files examples:

```
components/Button/index.jsx
components/Button/Button.jsx
```
	
#### Documentation and examples
	
Component directory must contain markdown file containing component usage examples. Following naming conventions are supported:

```
components/Button/Readme.md
components/Button/README.md
components/Button/Button.md
```

## Configuration

TBD