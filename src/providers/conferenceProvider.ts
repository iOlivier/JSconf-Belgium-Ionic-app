
export class ConferenceProvider {

  getSessions() {
    return [
        {
            name: 'test',
            speaker: 'ikke',
            timeStart: '8:00',
            timeEnd: '9:00',
            location: 'Lokaal C2.05'
        },
        {
            name: 'test',
            speaker: 'ikke',
            timeStart: '8:00',
            timeEnd: '9:00',
            location: 'Lokaal C2.05'
        },
        {
            name: 'test',
            speaker: 'ikke',
            timeStart: '10:00',
            timeEnd: '11:00',
            location: 'Lokaal C2.05'
        }
    ];
  }

  getSpeakers() {
      return [
          { name: 'Olivier', text: 'veel text' },
          { name: 'Johan', text: 'nog meer text' }
      ];
  }

}