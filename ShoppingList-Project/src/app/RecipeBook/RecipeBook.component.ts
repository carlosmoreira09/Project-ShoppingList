import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './RecipeList/RecipeList.component';
import { RecipeItemComponent } from './RecipeItem/RecipeItem.component';

@Component({
  selector: 'app-RecipeBook',
  templateUrl: './RecipeBook.component.html',
  styleUrls: ['./RecipeBook.component.css']
})
export class RecipeBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCreate() { 
    RecipeListComponent
  }

}
