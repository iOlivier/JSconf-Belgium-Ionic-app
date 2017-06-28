export class Session {
  name = "";
  speaker = "";
  room = "";
  info = "";
  bio = "";
  from = 0;
  till = 0;

  constructor(name, speaker, room, info, bio, from, till) {
    this.name = name; this.room = room;
    this.info = info;
    this.speaker = speaker; this.bio = bio;
  }
}