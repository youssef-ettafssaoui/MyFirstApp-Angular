import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  // We should create a property for storing these sorting order at the top of the class,
  videoOrder = '1'

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.queryParams.subscribe((params: Params) => {
        // this observable will push values whenever the query parameters change in the URL.
        this.videoOrder = params['sort'] == '2' ? params['sort'] : '1'
    })
  }

  sort(event: Event) {
    const { value } = (event.target as HTMLSelectElement)

    // navigate - It accepts a string as the path to redirect the user to
    // and allows us to customize the behavior of the router.
    this.router.navigate([], {
      relativeTo: this.route, // injected the activated route service into our component.
      queryParams: {
        sort: value
      }
    })
  }
  // sort(event: Event) {
  //   // structuring the value property from the event target property.
  //   const { value } = (event.target as HTMLSelectElement)

  //   this.router.navigateByUrl(`/manage?sort=${value}`)
  // }

}
