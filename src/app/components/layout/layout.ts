import { Component} from '@angular/core';
import { Header } from "./header/header"
import { Footer } from "./footer/footer";
import { Main } from "./main/main";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  imports: [Header, Footer, Main]
})

export class LayoutComponent {}
