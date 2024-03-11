import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { map, ellipse, pricetag } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({ map, ellipse, pricetag});
  }

  ngOnInit() {}
}