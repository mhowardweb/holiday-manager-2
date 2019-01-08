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
    <q-list>
    <q-item v-for="holiday in holidays" :key="holiday.id">
      <q-item-main>
        <q-item-tile>
          {{holiday.holName}}
        </q-item-tile>
        <q-item-tile>
          Days: {{holiday.daysBooked}}
        </q-item-tile>
        <q-item-tile>
          Start: {{holiday.holStart | formatDate}}
          End: {{holiday.holEnd | formatDate}}
        </q-item-tile>
      </q-item-main>
      <q-item-side right>
      <q-btn round color="secondary" icon="edit" @click="handleSelect(holiday)" />
      <q-btn round color="secondary" icon="delete" @click="handleDelete(holiday)" />
      </q-item-side>

    </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Holidays',
  methods: {
    ...mapActions({
      deleteHoliday: 'HolidayStore/deleteHoliday',
      handleSelect: 'HolidayStore/selectHoliday',
    }),
    handleDelete(data) {
      this.$q.dialog({
        title: 'Confirm Delete',
        message: 'Are you sure you would like to delete this Holiday ?',
        ok: true,
        cancel: true,
        preventClose: true,
      }).then(() => {
        this.deleteHoliday(data);
      }).catch(() => {

      });
    },
  },
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
