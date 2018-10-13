import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{title: string, date: string, image: string,text: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push({
        title :"5 things must to know about algorithm",
        date : "November 5, 1955",
        image :"https://assets.justinmind.com/blog/wp-content/uploads/2016/10/best-fonts-for-apps-fonts-for-web-ux-design-typography.png",
        text :"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."
      }
    );
    this.items.push({
      title :"How many weights does the font have?",
      date : "October 5, 2017",
      image :"https://assets.justinmind.com/blog/wp-content/uploads/2016/10/best-fonts-for-apps-typography-ux-design.png",
      text :"If a font has a wide selection of weight, a large x-height and can scale well then, it’s likely that it’ll work well in most layouts, context permitting.When deciding on typography in a project, your user’s needs should be at the forefront of your mind. After all, it is your users who you’re designing for. If you’ve designed a mobile app focused on learning, then you’ll have to choose a font to reflect that. Something flexible and functional. Style over substance. And just because you like a font, doesn’t mean it’s going to work for others."
    }
  );
  }
  detail(item){
    this.navCtrl.push(DetailPage,item);
  }
}
