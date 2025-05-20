import React, { createContext, useState, useContext } from "react";

const CounterContext = createContext<{
    num: number;
    setNum: React.Dispatch<React.SetStateAction<number>>;
    incAct: number;
    setIncAct: React.Dispatch<React.SetStateAction<number>>;
    incPas: number,
    setIncPas: React.Dispatch<React.SetStateAction<number>>;
}>({
    num: 0,
    setNum: () => {},
    incAct: 0,
    setIncAct: () => {},
    incPas: 0,
    setIncPas: () => {},
})

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [num, setNum] = useState<number>(0);
    const [incAct, setIncAct] = useState<number>(1);
    const [incPas, setIncPas] = useState<number>(0);
    
    return (
        <CounterContext.Provider value={{ num, setNum, incAct, setIncAct, incPas, setIncPas }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => useContext(CounterContext);