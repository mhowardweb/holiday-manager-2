<template>
  <q-page padding>
    <h3 class="text-center">Settings</h3>
    <q-field
          icon="business"
          :error="$v.settings.company.$error"
          error-label="Please type a valid Company name"
        >
          <q-input
            float-label="Company Name"
            type="text"
            v-model.trim="settings.company"
            @blur="$v.settings.company.$touch"
          />
        </q-field>


        <q-field
          icon="account_box"
          :error="$v.settings.name.$error"
          error-label="Please type a name"
        >
          <q-input
            float-label="Your Name"
            type="text"
            v-model.trim="settings.name"
            @blur="$v.settings.name.$touch"
          />
        </q-field>

        <q-field
          icon="calendar_today"
          :error="$v.settings.daysHol.$error"
          error-label="Must be between 10 and 40"
        >
          <q-input
            float-label="Days Holiday"
            type="number"
            v-model.trim="settings.daysHol"
            @blur="$v.settings.daysHol.$touch"
          />
        </q-field>

        <q-field
          icon="calendar_today"
          :error="$v.settings.bankHols.$error"
          error-label="Must be between 10 and 40"
        >
          <q-input
            float-label="Bank Holidays"
            type="number"
            v-model.trim="settings.bankHols"
            @blur="$v.settings.bankHols.$touch"
          />
        </q-field>

        <q-field
          icon="calendar_today"
          :error="$v.settings.yearStart.$error"
          error-label="Must be between 10 and 40"
        >
          <q-datetime
            float-label="Holiday Year Start"
            type="date"
            v-model="settings.yearStart"
            format="DD-MM-YYYY"
            @blur="$v.settings.yearStart.$touch"
          />
        </q-field>

        <q-field
          icon="calendar_today"
          :error="$v.settings.yearEnd.$error"
          error-label="Must be between 10 and 40"
        >
          <q-datetime
            float-label="Holiday Year End"
            type="date"
            v-model="settings.yearEnd"
            format="DD-MM-YYYY"
            @blur="$v.settings.yearEnd.$touch"
          />
        </q-field>

        <p class="caption">Normal Working Days</p>
      <q-list>
        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="settings.mon" />
          </q-item-side>
          <q-item-main>
            <q-item-tile title>Monday</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="settings.tue" />
          </q-item-side>
          <q-item-main>
            <q-item-tile title>Tuesday</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="settings.wed" />
          </q-item-side>
          <q-item-main>
            <q-item-tile title>Wednesday</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="settings.thu" />
          </q-item-side>
          <q-item-main>
            <q-item-tile title>Thursday</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="settings.fri" />
          </q-item-side>
          <q-item-main>
            <q-item-tile title>Friday</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="settings.sat" />
          </q-item-side>
          <q-item-main>
            <q-item-tile title>Saturday</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="settings.sun" />
          </q-item-side>
          <q-item-main>
            <q-item-tile title>Sunday</q-item-tile>
          </q-item-main>
        </q-item>

      </q-list>

        <q-btn
          class="full-width q-mt-md"
          color="primary"
          :disable="$v.settings.name.$error || $v.settings.company.$error || $v.$invalid"
          @click="handleSave(settings)"
        >
          Save Settings
        </q-btn>
        <q-btn class="full-width q-mt-md" to="home">Cancel</q-btn>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, minLength, between } from 'vuelidate/lib/validators';

export default {
  name: 'Settings',
  computed: mapState({
    settings: state => state.HolidayStore.settings,
  }),
  validations: {
    settings: {
      company: { required, minLength: minLength(4) },
      name: { required, minLength: minLength(4) },
      daysHol: { required, between: between(10, 40) },
      bankHols: { required, between: between(0, 8) },
      yearStart: { required },
      yearEnd: { required },
    },
  },
  methods: {
    ...mapActions({
      handleSave: 'HolidayStore/saveSettings',
    }),
  },
};
</script>

<style scoped>

</style>
