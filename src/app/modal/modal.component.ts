import { Component, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
    @Input()
    public score: number;

    public showModal() {
        $('#quizEndedModal').modal({});
    }

}
