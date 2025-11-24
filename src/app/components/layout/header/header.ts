import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [Navbar]
})
export class Header {
  appName = 'Cooking';
}
