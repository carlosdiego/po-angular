import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { PoModule } from '@po-ui/ng-components';
import { PoModule } from '../../../ui/src/lib';
import { AppComponent } from './app.component';
import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }), PoModule],
  providers: [SamplePoTableAirfareService],
  bootstrap: [AppComponent]
})
export class AppModule {}
