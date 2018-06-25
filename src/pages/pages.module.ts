import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AboutPage } from './about/about';
import { MessagePage } from './message/message';
import { TabsPage } from './tabs/tabs';

import { HomeModule } from './home/home.module';
import { ComponentsModule } from '../components/components.module';
import { SuperTabsModule, SuperTabsController } from 'ionic2-super-tabs';

import { StatusBar } from '@ionic-native/status-bar';


//布局模块
@NgModule({
	declarations: [
		AboutPage,
		MessagePage,
		TabsPage
    ],
	imports: [
		IonicModule,
		HomeModule,
		ComponentsModule, 
		SuperTabsModule
	],
	entryComponents:[
		TabsPage,
		AboutPage,
		MessagePage
	],
	exports: [
		AboutPage,
		MessagePage,
		TabsPage
    ],
    providers:[
		StatusBar,
		SuperTabsController
    ]
})
export class PagesModule {}