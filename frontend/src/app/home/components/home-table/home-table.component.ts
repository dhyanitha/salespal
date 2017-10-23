import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { routerTransition } from '@app/core';

@Component({
	selector: 'app-home-table',
	templateUrl: './home-table.component.html',
	styleUrls: ['./home-table.component.scss'],
	animations: [routerTransition]
})
export class HomeTableComponent implements OnInit {
	@Input()
	set pending(isPending: boolean) {
		// Show loading state
	}

	@Input() errorMessage: string | null;

	constructor() {}

	ngOnInit() {}

	refresh() {}
}
