import { NgModule } from '@angular/core';
import { MatIconModule, MatInputModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [ MatIconModule, MatInputModule, MatListModule ],
  exports: [ MatIconModule, MatInputModule, MatListModule ]
})
export class MaterialModule { }
