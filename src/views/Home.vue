<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin
//, { DayGridView } 
from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'
import { collection,getDocs,setDoc,doc } from "firebase/firestore"
import { getFirestore } from "firebase/firestore"
import app from "../firebase"
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'
import {createEventId} from './event-utils';

export default {

  components: {
    FullCalendar // make the <FullCalendar> tag available
  },

  data: function() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          resourceTimeGridPlugin, 
  // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,resourceTimeGridDay'
        },
        locale: "ja",
        dayCellContent: function (e) {
        e.dayNumberText = e.dayNumberText.replace("日", "");
        },
        navLinks:true,
        initialView: 'resourceTimeGridDay',
         resources: [
      { id: 'a', title: '1' },
      { id: 'b', title: '2'},
      { id: 'c', title: '3' },
      { id: 'd', title: '4' },
      { id: 'e', title: '5' },
      { id: 'f', title: '6' },
      { id: 'g', title: '訪問' },
    ],
        initialEvents: [], // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        nowIndicator: true,
        slotDuration: '00:30:00',
        slotLabelInterval: '01:00',
        views: {
        timeGridWeek: {
        slotMinTime: '08:00:00',
        slotMaxTime: '19:00:00',
        hiddenDays: [ 0, 4 ],
        
        
  },
   resourceTimeGridDay: {
    slotMinTime: '08:00:00',
    slotMaxTime: '19:00:00',
    Boolean, default: false
    
  }
},
titleFormat: {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
  weekday: 'short'
},
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: []
    }
  },


  methods: {

    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },

    // handleDateClick(clickInfo) {
    //   clickInfo.data-navlink()
      
      // calendarApi.unselect() // clear date selection

      // if (title) {
      //   calendarApi.addEvent({
      //     id: createEventId(),
      //     title,
      //     start: selectInfo.startStr,
      //     end: selectInfo.endStr,
      //     allDay: selectInfo.allDay
      //   })
        
      // }
    // },
    handleDateSelect(event){
      console.log(event)
      const db = getFirestore(app);
      setDoc(doc(db, 'posts',createEventId()), {
        title:'mente',
        start:event.startStr,
        end:event.endStr
});
    },

    
       handleEventClick(clickInfo) {
  console.log(clickInfo.event.extendedProps)
  this.show()
  if (confirm(`予約を消しますか？ '${clickInfo.event.extendedProps.description}'`)) {
    clickInfo.event.remove()
  

      }
    },

    handleEvents(events) {
      this.currentEvents = events
    }
  },
  created: async function(){
 const db = getFirestore(app);
 const querySnapshot = await getDocs(collection(db, "plans"));
 querySnapshot.forEach((doc) => {
 this.currentEvents.push({ id: doc.id, ...doc.data() });
 });
 console.log(this.calendarOptions)
},
    dayCellContent: function(e) {
    e.dayNumberText = e.dayNumberText.replace('日', '');
},
};








</script>

<template>
  <div class='demo-app'>
    
    <div class='demo-app-main'>
      <FullCalendar
        class='demo-app-calendar'
        :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang='css'>

h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b { /* used for event dates/times */
  margin-right: 3px;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

.fc .fc-timegrid-slot {
    height: 4em;
    border-bottom: 0 /* each cell owns its top border */;
}
.fc-daygrid-day-number {
  font-size: 45px;
  text-align: center;
  padding: auto;
}
th.fc-day-thu {
  background-color: #ffeaea;
}
th.fc-day-sun {
  background-color: #ffeaea;
}
th.fc-day-thu .fc-col-header-cell-cushion {
  color: red;
}
th.fc-day-sun .fc-col-header-cell-cushion{
  color: red;
}
td.fc-day-thu {
  background-color: #ffeaea;
}
td.fc-day-sun {
  background-color: #ffeaea;
}
html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

#calendar {
  max-width: 1100px;
  margin: 40px auto;
}
</style>
