import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.scss"]
})
export class SliderComponent {

    @Input() name: string;
    @Output() slide: EventEmitter<boolean> = new EventEmitter();

    constructor() {
    }

}