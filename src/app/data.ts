
export interface Quiz {
    id: number;
    questionCount: number;
}

export interface Score {
    score: number;
}

export interface Question {
    name: string;
    done: boolean;
}

export interface Answer {
    answer: number;
}

export interface AnswerResult {
    correct: boolean;
    details: AnswerResultDetails;
}

export interface AnswerResultDetails {
    name: string;
    url: string;
    type: number;
}
