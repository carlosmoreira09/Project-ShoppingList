import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './ShoppingList/ShoppingList.component';
import { RecipeBookComponent } from './RecipeBook/RecipeBook.component';
import { HeaderComponentComponent } from './HeaderComponent/HeaderComponent.component';
import { RecipeListComponent } from './RecipeBook/RecipeList/RecipeList.component';
import { RecipeItemComponent } from './RecipeBook/RecipeItem/RecipeItem.component';
import { RecipeDetailComponent } from './RecipeBook/RecipeDetail/RecipeDetail.component';
import { ShoppingEditListComponent } from './ShoppingList/ShoppingEditList/ShoppingEditList.component';



@NgModule({
  declarations: [								
    AppComponent,
      ShoppingListComponent,
      RecipeBookComponent,
      HeaderComponentComponent,
      RecipeListComponent,
      RecipeItemComponent,
      RecipeDetailComponent,
      ShoppingEditListComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
