import { Component} from '@angular/core';
import { Header } from "./header/header"
import { Footer } from "./footer/footer";
import { DishCard } from "../card/card";
import { Main } from "./main/main";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  imports: [Header, Footer, DishCard, Main]
})

export class LayoutComponent {}
