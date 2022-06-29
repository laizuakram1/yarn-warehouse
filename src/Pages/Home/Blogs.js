import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left mx-10 py-10'>
            <div>
                <h2 className='text-2xl font-bold'>How will you improve the performance of a React Application?</h2>
                <p>Ans: First of i will try to write code clean and not duplication. Always I will try to fix all warnig.</p>
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
        </div>
    );
};

export default Blogs;