const url = "https://jsconf.be/static/images/speakers/";

export class Speaker {
  name = "";
  bio =  "";
  url = "";

  constructor(name, bio) {
    this.name = name;  
    this.bio = bio;
    this.url = url + name.replace(/ /g, "-").toLowerCase() + ".jpg";
  }
}