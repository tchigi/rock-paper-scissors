import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

interface OptionState {
    option: string
    chooseOption: (title: string) => void
    randomOption: string
    chooseRandomOption: (title: string) => void
}

interface RoundState {
    round: number
    switchRound: (round: number) => void
}

interface ScoreState {
    score: number
    incrementScore: () => void
    decrementScore: () => void
}

export const useOption = create<OptionState>()(devtools((set) => ({
    option: "",
    chooseOption: (title: string) => set({option: title}),
    randomOption: "",
    chooseRandomOption: (title: string) => set({randomOption: title}),
})))

export const useRoundToggle = create<RoundState>()(devtools((set) => ({
    round: 1,
    switchRound: (round: number) => set({round: round}),
})))

export const useScore = create<ScoreState>()(devtools(persist((set) => ({
    score: 0,
    incrementScore: () => set((state) => ({score: state.score + 1})),
    decrementScore: () => set((state) => ({score: state.score > 1 ? state.score - 1 : 0})),
}), {
    name: 'score',
})))