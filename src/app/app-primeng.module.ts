import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  exports: [
    MenuModule,
    CardModule,
    TabViewModule,
    TableModule,
    ButtonModule,
    InputSwitchModule,
    TagModule,
    DialogModule,
    FloatLabelModule,
    InputNumberModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    ToastModule
  ]
})
export class AppPrimengModule { }
