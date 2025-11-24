import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [Navbar, RouterLink]
})
export class Header {
  appName = 'Cooking';
}
