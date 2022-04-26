import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-vsag',
  templateUrl: './vsag.component.html',
  styleUrls: ['./vsag.component.css']
})
export class VsagComponent implements OnInit {

  id = ''

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    // The params property is an observable
    // this observable will push values whenever the routes parameters
    this.route.params.subscribe((params: Params) => {
        this.id = params['id']
    })
  }

}
