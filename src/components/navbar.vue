<script>
import homepage from "./Home.vue";
import aboutus from "./aboutus.vue";
import alumni from "./alumni.vue";
import events from "./events.vue";
import contactus from "./contactus.vue";
import courses from "./courses.vue";
import library from "./library.vue";
import partnership from "./partnership.vue";

</script>
<template>
   <v-app-bar color = "purple">
        <div>
            <v-btn to="/home" color="white" dark>Homepage</v-btn>
        </div>
        <div>
            <v-btn to="/aboutus" color="white" dark>AboutUs</v-btn>
        </div>
        <div>
            <v-btn to="/alumni" color="white" dark>Alumni</v-btn>
        </div>
        <div>
            <v-btn to="/events" color="white" dark>Events</v-btn>
        </div>
        <div>
            <v-btn to="/contactus" color="white" dark>ContactUs</v-btn>
        </div>
        <div>
            <v-btn to="/courses" color="white" dark>Courses</v-btn>
        </div>
        <div>
            <v-btn to="/library" color="white" dark>Library</v-btn>
        </div>
        <div>
            <v-btn to="/partnership" color="white" dark>Partnership</v-btn>
        </div>
    </v-app-bar>
</template>