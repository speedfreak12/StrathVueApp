<template>
    <div id = 'homepage'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="https://media.istockphoto.com/id/1483272796/photo/seminar-coding-talking.jpg?s=1024x1024&w=is&k=20&c=L7yKxE2ufFY1-plz5JtX_GnhQFJB4VaHbHYWQAP6WNk="
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://media.istockphoto.com/id/2004519387/photo/chief-financial-director-examining-capital-funds-at-his-opulent-desk.jpg?s=1024x1024&w=is&k=20&c=fjUxQuKG9eeEMn0S95R0RHFWXAUWoR-POIQ9ibTEjNE="
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://media.istockphoto.com/id/1436453674/photo/portrait-university-student-black-man-and-graduation-celebration-event-and-achievement-of.jpg?s=1024x1024&w=is&k=20&c=bprS79xjLxxr_R8jQoVgqlPFk_nJDRg-EkkaBTwAEAM="
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                    </v-layout>
                    <v-layout>
                    <v-container>
                        <v-row align="center" justify="center">
                            <div class="d-flex align-center flex-column">
                                <div class="text-subtitle-2">With props</div>

                                <v-card
                                width="400"
                                title="This is a title"
                                subtitle="This is a subtitle"
                                text="This is content"
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="400">
                                <template v-slot:title>
                                    ADMISSIONS OFFICE
                                </template>

                                <template v-slot:subtitle>
                                    This is content
                                </template>

                                <template v-slot:text>
                                    This is content
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>This is a title</v-card-title>

                                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    This is content
                                </v-card-text>
                                </v-card>
                            </div>
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>
<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>