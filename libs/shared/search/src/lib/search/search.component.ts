import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'solved-search',
    styleUrls: ['./search.component.scss'],
    templateUrl: './search.component.html'
})
export class SearchComponent {
    faSearch = faSearch;
}
