import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.scss']
  /*template:`<h1>Hello from typescript html</h1>
  <div class="test">this is my div</div>
  `,*/
  //styles:['.test{color:green;font-size:36px;}']
})
export class MytestComponent implements OnInit {

  firstname:string = 'Vladimir'
  cars:string[] = ['audi', 'bmw', 'citroen', 'hfhfhf']
  isShown:boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

}
