import { create } from 'zustand';

interface AnswerState {
    answers: {
        [date: string]: {
            questions: string[];
            answers: string[];
        };
    };
    addAnswer: (date: string, questions: string[], answers: string[]) => void;
}


export const useAnswerStore = create<AnswerState>((set) => ({
    answers: {},
    addAnswer: (date, questions, answers) =>
        set((state) => ({
            answers: {
                ...state.answers,
                [date]: { questions, answers },
            },
        })),
}));

