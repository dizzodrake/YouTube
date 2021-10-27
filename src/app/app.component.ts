import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  
  des: String="";
  description: String=""
  
  uploads: any[]=[];
// images
  url:any;
  urll:any;
  format:any;
  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }

  selectFile(event:any){
    if (event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any)=>{
        this.url = event.target.result
      }
    }
  }
  show(){
    this.urll= this.url;
    this.description = this.des
    this.uploads.push(this.urll)
    console.log(this.uploads)
  }
    // this.uploads.push(this.url)  
  



  // imga(e:any){
  //   this.img = e.target.value;
  //   // this.img = this.img.slice(12,0)
  //   this.img = this.img.replace(/^.*[\\\/]/, '')
  //   this.des = `../../assets/videos/ ${this.img}`

  // }
}
