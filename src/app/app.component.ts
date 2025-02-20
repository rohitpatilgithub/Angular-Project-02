import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Weather-App';
  moving(event:MouseEvent){
    // console.log("Moving")
    gsap.to("#cursor",{
      x:event.clientX,
      y:event.clientY,
      duration:0.5,
      ease: "power4.out",
      delay:0.1
    })
  }
}
