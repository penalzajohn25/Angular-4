import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title : string;
  email : string;
  sitio : string;
  deportes : any;
  showDeport:boolean;


  constructor(private postService:PostService) {
    this.title ='John Peñaloza';
    this.email= "johnmanuelpenaloza@gmail.com";
    this.sitio= "http://www.johnmasterweb.com";
    this.deportes = ['futbol','basket','beisboll'];
    this.showDeport = false;
    this.postService.getPosts().subscribe(posts=>{
      console.log(posts);
    })
  }

  toggleDeportes() {
    this.showDeport = !this.showDeport;
  }

  newDeport(deport) {
    this.deportes.push(deport.value);
    deport.value="";
    return false;
  }

}
