"use client"
import React, { useState } from 'react';


type Budget = {
  income: number;
  expenses: Expense[];
};

const Vjobpage = () => {

    const [budget, setBudget] = useState<Budget>({
  income: 0,
  expenses: [],
});
    return (
        <div>
            <p>it's working like monster</p>
            
        </div>
    );
};

export default Vjobpage;