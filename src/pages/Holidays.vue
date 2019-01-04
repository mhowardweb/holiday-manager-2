<template>
  <q-page padding>
    <q-list col>
      <q-list-header inset>Summary for {{summary.name}}</q-list-header>
        <q-item>
          <q-item-side icon="calendar_today" inverted color="tertiary" />
          <q-item-main>
            <q-item-tile label>Total Days</q-item-tile>
            <q-item-tile sublabel>for current year</q-item-tile>
          </q-item-main>
          <q-item-side right color="green">{{summary.totalDaysHol}} </q-item-side>
        </q-item>
        <q-item>
          <q-item-side icon="calendar_today" inverted color="tertiary" />
          <q-item-main>
            <q-item-tile label>Days Used</q-item-tile>
            <q-item-tile sublabel>in the current year</q-item-tile>
          </q-item-main>
          <q-item-side right color="green">{{summary.totalDaysUsed}} </q-item-side>
        </q-item>
        <q-item>
          <q-item-side icon="calendar_today" inverted color="tertiary" />
          <q-item-main>
            <q-item-tile label>Days Remaining</q-item-tile>
            <q-item-tile sublabel>in the current year</q-item-tile>
          </q-item-main>
          <q-item-side right color="green">{{summary.totalDaysRemaining}} </q-item-side>
        </q-item>
        <q-item>
          <q-item-side icon="calendar_today" inverted color="tertiary" />
          <q-item-main>
            <q-item-tile label>Use By</q-item-tile>
            <q-item-tile sublabel>end of holiday year</q-item-tile>
          </q-item-main>
          <q-item-side right color="green">{{summary.yearEnd | formatDate}} </q-item-side>
        </q-item>
    </q-list>

    <div v-for="holiday in holidays" :key="holiday.id">
      {{holiday.holName}}
      {{holiday.daysBooked}}
      {{holiday.holStart | formatDate}}
      {{holiday.holEnd | formatDate}}
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Holidays',
  computed: {
    ...mapGetters({
      summary: 'HolidayStore/calcSummary',
      holidays: 'HolidayStore/getHolidays',
    }),
  },
};
</script>

<style>
</style>
