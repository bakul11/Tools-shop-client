import React from 'react';
import './Blog.css'
import Slide from 'react-reveal/Slide';

const Blogs = () => {
    return (
        <div className='blog text-light'>
            <Slide left>
                <div className='container pt-5 mb-5'>
                    <h2 className='text-center fs-2 mt-5 mb-5 text-decoration-underline'>Question Part</h2>
                    <div className="row gy-5">
                        <div className="col-lg-12">
                            <div className="question-items">
                                <h2>1. How will you improve the performance of a React Application?</h2>
                                <p><span className='text-success'>Answer :</span></p>
                                <p>During the initial rendering process, React builds a DOM tree of components. So, when data changes in the DOM tree, we want React to re-render only those components that were affected by the change, skipping the other components in the tree that were not affected. However, React could end up re-rendering all components in the DOM tree, even though not all are affected. This will result in longer loading time, wasted time, and even wasted CPU resources. We need to prevent this from happening. So, this is where we will focus our optimization effort. In this situation, we could configure every component to only render or diff when necessary, to avoid wasting resources and time.</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="question-items">
                                <h2>2. What are the different ways to manage a state in a React application?</h2>
                                <p><span className='text-success'>Answer :</span></p>
                                <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter. There are four main types of state you need to properly manage in your React apps:</p>
                                <ul>
                                    <li>1. Local state</li>
                                    <li>2. Global state</li>
                                    <li>3. Server state</li>
                                    <li>4. URL state</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="question-items">
                                <h2>3. How does prototypical inheritance work?</h2>
                                <p><span className='text-success'>Answer :</span></p>
                                <p>Prototypal inheritance is a much simpler approach.It is flexible, extensible, and very easy to understand.It is not a silver bullet anyway but it is in many ways better than class -based inheritance and it would be our focus going forward.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-12">
                            <div className="question-items">
                                <h2>4. What is a unit test? Why should write unit tests?</h2>
                                <p><span className='text-success'>Answer :</span></p>
                                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Blogs;