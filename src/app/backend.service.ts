import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer, AnswerResult, Question, Quiz, Score } from './domain';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    public startNewQuiz(): Observable<Quiz> {
        const url = buildUrl('quiz');
        return this.httpClient.post<Quiz>(url, null);
    }

    public loadQuestion(quizId: number): Observable<Question> {
        const url = buildUrl('quiz', quizId, 'question');
        return this.httpClient.get<Question>(url);
    }

    public sendAnswer(quizId: number, answer: Answer): Observable<AnswerResult> {
        const url = buildUrl('quiz', quizId, 'answer');
        return this.httpClient.post<AnswerResult>(url, answer);
    }

    public getScore(quizId: number): Observable<Score> {
        const url = buildUrl('quiz', quizId, 'score');
        return this.httpClient.get<Score>(url);
    }

}

const API = 'http://it-pokemon.webappcraft.com:8090';

function buildUrl(...endpointParts: Array<string | number>): string {
    return `${API}/${endpointParts.join('/')}`;
}
