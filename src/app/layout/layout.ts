import { Component} from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  imports: [Header, Footer]
})

export class LayoutComponent {}
