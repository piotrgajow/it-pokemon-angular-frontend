import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

    @Input()
    public score;

    @Output()
    public gameStarted = new EventEmitter<void>();

    public startNewQuiz(): void {
        this.gameStarted.emit();
    }

}
