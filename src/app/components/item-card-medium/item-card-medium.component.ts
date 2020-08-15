import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-item-card-medium',
    templateUrl: './item-card-medium.component.html',
    styleUrls: ['./item-card-medium.component.sass']
})
export class ItemCardMediumComponent implements OnInit {
    @Input() course: any;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    goToCourseDetail(courseId): void {
        this.router.navigateByUrl('course/' + courseId);
    }

}
