import { Component, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import { Quiz, Score } from './data';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    public gameStarted = false;
    public score = 0;
    public quizId: number;

    @ViewChild('modal')
    private modal: ModalComponent;

    constructor(private backendService: BackendService) {
    }

    public onGameStarted(): void {
        this.backendService.startNewQuiz().subscribe((quiz: Quiz) => {
            this.gameStarted = true;
            this.score = 0;
            this.quizId = quiz.id;
        });
    }

    public onQuestionAnswered(): void {
        this.backendService.getScore(this.quizId).subscribe((score: Score) => {
            this.score = score.score;
        });
    }

    public onQuizEnded(): void {
        this.gameStarted = false;
        this.modal.showModal();
    }

}
