import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ContactsComponent } from './contactsModule/contacts.component'

//交互活动 
import { InteractiveComponent } from './mutualActivity/interactive.compoenent';

const routes: Routes = [
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'interactive',
        component: InteractiveComponent
    },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}