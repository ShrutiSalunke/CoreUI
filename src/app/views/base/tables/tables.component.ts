import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { PageItemDirective, PageLinkDirective, PaginationComponent,RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    standalone: true,
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective, PaginationComponent,
      PageItemDirective,
      PageLinkDirective,
      RouterLink]
})
export class TablesComponent {

  constructor() { }

}
