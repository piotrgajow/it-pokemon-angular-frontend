import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BackendService } from '../backend.service';
import { Answer, AnswerResult, Question } from '../domain';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

    @Input()
    public set quizId(value: number) {
        this.id = value;
        if (value) {
            this.loadQuestion();
        }
    }

    @Output()
    public questionAnswered = new EventEmitter<void>();

    @Output()
    public quizEnded = new EventEmitter<void>();

    public question: Question;
    public result: AnswerResult;

    private id: number;

    constructor(private backendService: BackendService) { }

    public loadQuestion(): void {
        this.backendService.loadQuestion(this.id).subscribe((question: Question) => {
            this.result = null;
            this.question = question;
            if (this.question.done) {
                this.quizEnded.emit();
            }
        });
    }

    public answer(choice: number): void {
        const answer: Answer = { answer: choice };
        this.backendService.sendAnswer(this.id, answer).subscribe((result: AnswerResult) => {
            this.question = null;
            this.result = result;
            this.questionAnswered.emit();
        });
    }

}
