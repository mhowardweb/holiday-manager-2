<template>
  <q-page padding>
    <q-card>
      <q-card-title class="col name">
        {{summary.name}}'s
        <div class="col title">Holiday Manager</div>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-list>
          <q-item>
            <q-item-side>
              <q-item-tile color="primary" icon="date_range" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>Total Days</q-item-tile>
            </q-item-main>
            <q-item-side right>{{summary.totalDaysHol}}</q-item-side>
          </q-item>

          <q-item>
            <q-item-side>
              <q-item-tile color="warning" icon="flight_land" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>Days Used</q-item-tile>
            </q-item-main>
            <q-item-side right>{{summary.totalDaysUsed}}</q-item-side>
          </q-item>

          <q-item>
            <q-item-side>
              <q-item-tile color="danger" icon="flight_takeoff" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>Days Remaining</q-item-tile>
            </q-item-main>
            <q-item-side right>{{summary.totalDaysRemaining}}</q-item-side>
          </q-item>

          <q-item>
            <q-item-side>
              <q-item-tile color="tertiary" icon="event_busy" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>Use By</q-item-tile>
            </q-item-main>
            <q-item-side right>{{summary.yearEnd | formatDate}}</q-item-side>
          </q-item>

          <q-item>
            <q-item-main>
              <q-btn
                class="full-width"
                outline
                color="secondary"
                label="HOLIDAY SUMMARY"
                to="holidays">
              </q-btn>
            </q-item-main>
          </q-item>
        </q-list>
      </q-card-main>
    </q-card>

    <div class="row">
      <div class="col">

      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      summary: 'HolidayStore/calcSummary',
    }),
  },
};
</script>

<style scoped>
.title {
  padding-bottom: 49px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 19px;
  text-align: center;
  color: #1f2041;
}

.name {
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 42px;
  text-align: center;
  color: #6fcf97;
}
</style>
