import React, { useState, useContext, useMemo, useCallback } from 'react';
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const ArticleContent = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const articleContent = {
    introduction: `React has evolved significantly since its inception, and with each passing year, new patterns and best practices emerge. In 2023, several modern React patterns have gained popularity for their ability to improve code organization, performance, and developer experience. This article explores these patterns and provides practical examples of how to implement them in your projects.`,
    
    sections: [
      {
        id: "hooks-patterns",
        title: "Advanced Hooks Patterns",
        content: `Hooks have revolutionized how we write React components, enabling function components to use state and other React features. In 2023, several advanced hooks patterns have emerged that can significantly improve your code.

One such pattern is the use of custom hooks for shared logic. By extracting common stateful logic into custom hooks, you can reuse this logic across multiple components without duplicating code. This not only makes your codebase more maintainable but also promotes separation of concerns.`,
        codeExample: `// A custom hook for handling form state
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    callback();
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
    setErrors
  };
}

// Usage in a component
function SignupForm() {
  const { values, handleChange, handleSubmit } = useForm({
    email: '',
    password: ''
  });

  const submitForm = () => {
    // Submit logic here
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}`
      },
      {
        id: "component-composition",
        title: "Component Composition Patterns",
        content: `Component composition is a powerful pattern that allows you to build complex UIs by combining smaller, focused components. This approach promotes reusability and makes your code easier to test and maintain.

One popular composition pattern is the Compound Component pattern. This pattern allows you to create components that work together to form a cohesive unit while maintaining an expressive and flexible API.`,
        codeExample: `// Compound Component Pattern Example
const Tabs = ({ children, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
};

const TabList = ({ children }) => {
  return <div className="tab-list">{children}</div>;
};

const Tab = ({ index, children }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  
  return (
    <button
      className={\`tab \${activeIndex === index ? 'active' : ''}\`}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
};

const TabPanels = ({ children }) => {
  const { activeIndex } = useContext(TabsContext);
  
  return (
    <div className="tab-panels">
      {React.Children.toArray(children)[activeIndex]}
    </div>
  );
};

const TabPanel = ({ children }) => {
  return <div className="tab-panel">{children}</div>;
};

// Usage
function App() {
  return (
    <Tabs>
      <TabList>
        <Tab index={0}>Tab 1</Tab>
        <Tab index={1}>Tab 2</Tab>
        <Tab index={2}>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content for Tab 1</TabPanel>
        <TabPanel>Content for Tab 2</TabPanel>
        <TabPanel>Content for Tab 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
}`
      },
      {
        id: "state-management",
        title: "Modern State Management Approaches",
        content: `State management in React has evolved beyond just using Redux for everything. In 2023, a more nuanced approach to state management is recommended, where you choose the right tool for the specific state management needs of your application.

For local component state, useState and useReducer hooks are often sufficient. For sharing state between components, you might use Context API. For complex global state, libraries like Redux Toolkit, Zustand, or Jotai offer different approaches with their own trade-offs.`,
        codeExample: `// Using Redux Toolkit for global state
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    }
  }
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
});

// Using Zustand for global state
import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 }))
}));

// In a component
function Counter() {
  const { count, increment, decrement } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}`
      },
      {
        id: "performance-optimization",
        title: "Performance Optimization Techniques",
        content: `Performance optimization is crucial for providing a smooth user experience. React offers several built-in features for optimizing performance, and in 2023, new patterns have emerged to make this process more effective.

One important pattern is the strategic use of memoization with React.memo, useMemo, and useCallback to prevent unnecessary re-renders. Another is the use of code splitting and lazy loading to reduce the initial bundle size.`,
        codeExample: `// Using React.memo to prevent unnecessary re-renders
const ExpensiveComponent = React.memo(({ data }) => {
  // Render using data
  return <div>{/* ... */}</div>;
});

// Using useMemo for expensive calculations
function SearchResults({ items, query }) {
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);
  
  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Using useCallback for stable callbacks
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array means this function never changes
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveChild onClick={handleClick} />
    </div>
  );
}

// Code splitting with React.lazy and Suspense
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}`
      },
      {
        id: "testing-strategies",
        title: "Modern Testing Strategies",
        content: `Testing is an essential part of developing robust React applications. In 2023, the focus has shifted towards more integration and end-to-end testing, complementing unit tests.

The React Testing Library has become the standard for testing React components, promoting testing behaviors rather than implementation details. This approach leads to more resilient tests that don't break with refactoring.`,
        codeExample: `// Testing with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import { useForm } from 'react-hook-form';



test('increments count when button is clicked', () => {
  // Render the component
  render(<Counter initialCount={0} />);
  
  // Find elements
  const incrementButton = screen.getByRole('button', { name: /increment/i });
  
  // Interact with elements
  fireEvent.click(incrementButton);
  
  // Assert on the expected result
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});

// Testing asynchronous code
test('loads and displays user data', async () => {
  // Mock API call
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: async () => ({ name: 'John Doe' })
  });
  
  // Render the component
  render(<UserProfile userId="123" />);
  
  // Wait for the data to be loaded
  const userName = await screen.findByText(/john doe/i);
  
  // Assert that the user name is displayed
  expect(userName).toBeInTheDocument();
  
  // Clean up
  global.fetch.mockRestore();
});`
      }
    ],
    
    conclusion: `As React continues to evolve, staying up-to-date with modern patterns and best practices is essential for building high-quality applications. The patterns discussed in this article—advanced hooks, component composition, modern state management, performance optimization, and testing strategies—provide a solid foundation for React development in 2023.

By adopting these patterns, you can write more maintainable, performant, and robust React applications. Remember that patterns are tools, not rules—always consider your specific use case and choose the approach that best fits your needs.

What modern React patterns have you found most useful in your projects? Share your experiences in the comments below!`
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="article-content"
    >
      <div className="prose prose-lg max-w-none text-text-secondary mb-8">
        <p>{articleContent.introduction}</p>
      </div>

      {articleContent.sections.map((section) => (
        <div key={section.id} id={section.id} className="mb-12">
          <h2 className="heading-2 text-text-primary mb-6">{section.title}</h2>
          <div className="prose prose-lg max-w-none text-text-secondary mb-6">
            <p>{section.content}</p>
          </div>

          <div className="bg-surface rounded-lg p-4 mb-6 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Code Example</span>
              <button
                className="text-text-tertiary hover:text-primary transition-colors duration-300"
                onClick={() => {
                  navigator.clipboard.writeText(section.codeExample);
                  alert("Code copied to clipboard!");
                }}
                aria-label="Copy code"
              >
                <Icon name="Copy" size={16} />
              </button>
            </div>
            <pre className="bg-background p-4 rounded overflow-x-auto">
              <code className="code text-text-primary">{section.codeExample}</code>
            </pre>
          </div>

          {section.id === "component-composition" && (
            <div className="bg-surface rounded-lg p-6 mb-6 border border-border">
              <h3 className="heading-4 text-text-primary mb-4">Interactive Example</h3>
              <div className="bg-background rounded-lg p-4">
                <div className="flex border-b border-border">
                  <button className="px-4 py-2 border-b-2 border-primary text-primary font-medium">Tab 1</button>
                  <button className="px-4 py-2 text-text-secondary">Tab 2</button>
                  <button className="px-4 py-2 text-text-secondary">Tab 3</button>
                </div>
                <div className="p-4">
                  <p className="text-text-secondary">Content for Tab 1</p>
                </div>
              </div>
            </div>
          )}

          {section.id === "performance-optimization" && (
            <div className="bg-primary-light rounded-lg p-6 mb-6 border border-primary border-opacity-20">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <Icon name="Lightbulb" size={24} />
                </div>
                <div>
                  <h3 className="heading-4 text-text-primary mb-2">Pro Tip</h3>
                  <p className="text-text-secondary">
                    When using <code className="bg-primary bg-opacity-10 px-1 rounded">useMemo</code> and <code className="bg-primary bg-opacity-10 px-1 rounded">useCallback</code>, always ensure your dependency arrays are correctly specified. Missing dependencies can lead to stale closures, while unnecessary dependencies can negate the performance benefits.
                  </p>
                </div>
              </div>
            </div>
          )}

          {section.id === "state-management" && (
            <div className="mb-6">
              <button
                onClick={() => toggleSection("state-comparison")}
                className="flex items-center justify-between w-full bg-surface p-4 rounded-lg border border-border text-left"
              >
                <span className="font-medium text-text-primary">Comparing State Management Solutions</span>
                <Icon
                  name={expandedSections["state-comparison"] ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-text-tertiary"
                />
              </button>
              {expandedSections["state-comparison"] && (
                <div className="mt-4 bg-surface p-6 rounded-lg border border-border">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-border">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-primary bg-background">Solution</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-primary bg-background">Best For</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-primary bg-background">Learning Curve</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-primary bg-background">Bundle Size</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="px-4 py-3 text-sm text-text-primary">useState/useReducer</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">Local component state</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">Low</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">None (built-in)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-text-primary">Context API</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">Sharing state between components</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">Medium</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">None (built-in)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-text-primary">Redux Toolkit</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">Complex global state with middleware</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">High</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">~15KB (minified)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-text-primary">Zustand</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">Simple global state</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">Low</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">~3KB (minified)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-text-primary">Jotai</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">Atomic state management</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">Medium</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">~4KB (minified)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="prose prose-lg max-w-none text-text-secondary mb-12">
        <h2 className="heading-2 text-text-primary mb-6">Conclusion</h2>
        <p>{articleContent.conclusion}</p>
      </div>

      <div className="border-t border-border pt-8">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Alex Johnson"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="heading-4 text-text-primary mb-1">Written by Alex Johnson</h3>
            <p className="text-text-secondary mb-2">Frontend Developer</p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-text-tertiary hover:text-primary transition-colors duration-300"
                aria-label="Twitter profile"
              >
                <Icon name="Twitter" size={16} />
              </a>
              <a
                href="#"
                className="text-text-tertiary hover:text-primary transition-colors duration-300"
                aria-label="GitHub profile"
              >
                <Icon name="Github" size={16} />
              </a>
              <a
                href="#"
                className="text-text-tertiary hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn profile"
              >
                <Icon name="Linkedin" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleContent;