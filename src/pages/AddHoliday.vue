<template>
  <q-page padding>
    <h3 text-center class="banner">Add Holiday</h3>
    <q-field
          icon="business"
          :error="$v.holiday.holName.$error"
          error-label="Please type a valid Holiday name"
        >
          <q-input
            float-label="Holiday Name"
            type="text"
            v-model.trim="holiday.holName"
            @blur="$v.holiday.holName.$touch"
          />
        </q-field>

        <q-field
          icon="calendar_today"
          :error="$v.holiday.holStart.$error"
          error-label="Error"
        >
          <q-datetime
            float-label="Holiday Start"
            type="date"
            v-model="holiday.holStart"
            format="DD-MM-YYYY"
            @blur="$v.holiday.holStart.$touch"
          />
        </q-field>

        <q-field
          icon="calendar_today"
          :error="$v.holiday.holEnd.$error"
          error-label="Error"
        >
          <q-datetime
            float-label="Holiday End"
            type="date"
            v-model="holiday.holEnd"
            format="DD-MM-YYYY"
            @blur="$v.holiday.holEnd.$touch"
          />
        </q-field>
        <div>Days Booked: {{holiday.daysBooked}}</div>
        <div>Days to Book: {{summary.totalDaysRemaining - holiday.daysBooked}}</div>
        <div class="error"
        v-if="summary.totalDaysRemaining - holiday.daysBooked <= 0">
        YOU HAVE NO HOLIDAY LEFT TO BOOK !!</div>
        <q-field
          icon="business"
          :error="$v.holiday.details.$error"
          error-label="Please type a valid Holiday name"
        >
          <q-input
            float-label="Details"
            type="text"
            v-model.trim="holiday.details"
            @blur="$v.holiday.details.$touch"
          />
        </q-field>
        <q-field>
          <q-btn
            color="primary"
            icon="save"
            label="Save Holiday"
            @click="handleAdd(holiday)"
            :disable="$v.$invalid"
          />
        </q-field>
  </q-page>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { mapState, mapGetters, mapActions } from 'vuex';
import calcDaysHol from '../helpers/calcDaysHol.js';

export default {
  name: 'AddHoliday',
  validations: {
    holiday: {
      holName: { required, minLength: minLength(4) },
      details: { required, minLength: minLength(4) },
      holStart: {
        required,
        calcDays() {
          this.holiday.daysBooked = calcDaysHol(
            new Date(this.holiday.holStart),
            new Date(this.holiday.holEnd),
            this.workDays,
          );
          return this.holiday.daysBooked;
        },
      },
      holEnd: { required },
    },
  },
  computed: {
    ...mapState({
      holiday: state => state.HolidayStore.holiday,
    }),
    ...mapGetters({
      summary: 'HolidayStore/calcSummary',
      workDays: 'HolidayStore/getWorkDays',
      settings: 'HolidayStore/getSettings',
    }),

  },
  methods: {
    ...mapActions({
      handleAdd: 'HolidayStore/addHoliday',
      clear: 'HolidayStore/clearForm',
    }),
  },
  mounted() {
    this.clear();
  },
};
</script>

<style>
</style>
