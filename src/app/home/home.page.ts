import { Component, OnInit, ElementRef } from '@angular/core';
import * as p5 from 'p5';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
canvasX=300;
canvasY=300;
img:any;
imgTiles=[];
s=30;
s2:any;

array=[[0,2,2,0,0,0,0,0,0,0],
      [0,2,0,2,0,0,0,0,0,0],
      [0,2,0,2,0,0,0,0,0,0],
      [0,2,0,2,0,10,0,0,0,0],
      [0,2,0,2,0,0,0,0,0,0],
      [0,2,0,2,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],];
  constructor(private el:ElementRef) {}
  ngOnInit(){
    const p5obj = new p5(p=>{
      p.preload=() =>{this.preload(p);};
      p.setup=() =>{this.setup(p);};
      p.draw=() =>{this.draw(p);};
    },this.el.nativeElement);
  }
preload(p){
  this.img=p.loadImage("assets/590d7.png");
}
  setup(p){
const c=document.querySelector('#canvasContainer');
this.canvasX=p.displayWidth;
this.s2=this.canvasX/10;
p.createCanvas(this.canvasX,this.canvasX).parent(c);
p.background(200);
for(let i=0; i<12;i++){
  for(let j=0;j<16;j++){
    this.imgTiles.push(this.img.get(j*this.s,i*this.s,this.s,this.s));
  }
}

  }
  draw(p){
    for(let i=0; i<10;i++){
      for(let j=0;j<10;j++){
        let a=this.array[i][j];
       p.image(this.imgTiles[a],this.s2*j,this.s2*i,this.s2,this.s2);
      }
    }
  }
}
