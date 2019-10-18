import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-fonetic-transcript',
  templateUrl: './ex-fonetic-transcript.page.html',
  styleUrls: ['./ex-fonetic-transcript.page.scss'],
})
export class ExFoneticTranscriptPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  input:any
    pack1s=[
      '../../assets/keyboard/3.png',
      '../../assets/keyboard/6volteado.png',
      '../../assets/keyboard/Dmayuscula.png',
      '../../assets/keyboard/OOO.png',
      '../../assets/keyboard/SS.png',
      '../../assets/keyboard/a.png',
      '../../assets/keyboard/b.png',
      '../../assets/keyboard/bmayuscula.png',
      '../../assets/keyboard/bt.png'
    ];
  pack2s=[
      '../../assets/keyboard/d3.png',
      '../../assets/keyboard/d_.png',
      '../../assets/keyboard/e.png',
      '../../assets/keyboard/fotra.png',
      '../../assets/keyboard/g.png',
      '../../assets/keyboard/gj.png',
      '../../assets/keyboard/h.png',
      '../../assets/keyboard/i.png',
      '../../assets/keyboard/irara.png'
    ];
  pack3s=[
      '../../assets/keyboard/j.png',        
      '../../assets/keyboard/jn.png',       
      '../../assets/keyboard/k.png',        
      '../../assets/keyboard/kj.png',       
      '../../assets/keyboard/kmayuscula.png',
      '../../assets/keyboard/l.png',        
      '../../assets/keyboard/m.png',        
      '../../assets/keyboard/mj.png',       
      '../../assets/keyboard/n.png'         
    ];
  pack4s=[
      '../../assets/keyboard/n_.png',
      '../../assets/keyboard/n__.png',
      '../../assets/keyboard/nj.png',
      '../../assets/keyboard/nmayuscula.png',
      '../../assets/keyboard/o.png',
      '../../assets/keyboard/p.png',
      '../../assets/keyboard/pareceunajvolteada.png',
      '../../assets/keyboard/r.png',
      '../../assets/keyboard/rbota.png'
    ];
  pack5s=[
      '../../assets/keyboard/s.png',
      '../../assets/keyboard/t_.png',
      '../../assets/keyboard/tf.png',
      '../../assets/keyboard/u.png',
      '../../assets/keyboard/w.png',
      '../../assets/keyboard/x.png',
      '../../assets/keyboard/xj.png',
      '../../assets/keyboard/yt.png'
    ];
  addLetter(name)
  {
    let img    = document.createElement("img");
    img.src    = name;
    img.height = 20;
    img.width  = 20;
    document.getElementById("container").appendChild(img);
  }
}
