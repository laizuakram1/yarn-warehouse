import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left mx-10 py-10'>
            <div>
                <h2 className='text-2xl font-bold'>How will you improve the performance of a React Application?</h2>
                <p>Ans: First of all I will try to write code clean and not duplication. Always I will try to fix all warning and react hooks. Moreover, many others technique are available for improve react application. I will discuss some effective technique there are:
                    <ul>
                        <li>1. Immutable data structure</li>
                        <li>2. Function </li>
                        <li>3. Multiple Chunkfile  </li>
                        <li>4. Use production base flag in webpack  </li>
                        <li>5. Dependency optimization   </li>
                        <li>6. Use React fragment   </li>
                        <li>7. Avoid inline function    </li>
                        <li>8. Avoid props in initial stage    </li>
                        <li>9. Spreding props    </li>
                        <li>10. Using a CDN    </li>


                    </ul>
                    and more techniques are available to improve performance for React Application.
                </p>
            </div>
            <br />
            <div>
                <h2 className='text-2xl font-bold'> What are the different ways to manage a state in a React application?</h2>
                <p>Ans: If we need manage our webpage state manage this time we will very usefull thats state is useState. More types of state  in react application there are:
                    1. Local state
                    2. Global state
                    3. Server state
                    4. URL state
                    But, react have two core state management state there are:
                    1. useState
                    2. useReducer
                </p>

            </div>
            <div>
                <h2 className='text-2xl font-bold'> How does prototypical inheritance work?</h2>
                <p>Ans: If you have on clase think that is represent triple like: parents, variable and methods.You can even simply this merge variable and methods.They are both mapping some kind of value.So javascript object is something like parents slot. When we will command our rendering page this time our class component are inheritance their parents, variable and methods.Then we will serve our needed optimization.
                </p>

            </div>
            <div>
                <h2 className='text-2xl font-bold'> Why you do not set the state directly in React.?</h2>
                <p>Ans: State management is the most importand part every web project. when need to share some data another place this time we will use state management system like: react state. When we use state pattern is first variable name like: const/let then we use curley bracket and declare state in this. But we don't use withour set state like #state(data.........) there are many reason something like taht:
                    <ul>
                        <li>If you need to update it directly, calling the state() and replace the update you need.</li>
                        <li>When you need to update directly, don't change this.state immediately</li>
                        <li>After calling this method return only value</li>
                        <li>You will lose all control of the component</li>
                    </ul>
                </p>

            </div>
            <div>
                <h2 className='text-2xl font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>Ans: First of all I need to create dynamic api. This api last url used query url. The query url use product name dynamically and I will create Backend api. Backend api is catch product name from req params name then query in db collection and send result to client site.</p>
            </div>
        </div>
    );
};

export default Blogs;