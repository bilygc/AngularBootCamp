import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-component-bchild',
  templateUrl: './component-bchild.component.html',
  styleUrl: './component-bchild.component.css'
})
export class ComponentBchildComponent implements OnInit {
  protected queryP!: string;

  public constructor(private readonly activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.queryP = this.activatedRoute.snapshot.params['id'];
    console.log('this.queryP by snapshot: %O', this.queryP);

    /* NOTE: this will happen every time the router react to subsequent changes */
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.queryP = params['id'];
      console.log('this.queryP by subscription: %O', this.queryP);
    });

  }
}
