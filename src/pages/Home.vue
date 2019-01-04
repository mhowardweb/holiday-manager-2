<template>
  <q-page padding>
    <div class="row">
      <div class="col name">{{summary.name}}'s</div>
    </div>
    <div class="row">
      <div class="col title">Holiday Manager</div>
    </div>
    <div class="row">
      <div class="col">Total Days</div>
      <div class="col">{{summary.totalDaysHol}}</div>
    </div>
    <div class="row">
      <div class="col">Days Used</div>
      <div class="col">{{summary.totalDaysUsed}}</div>
    </div>
    <div class="row">
      <div class="col">Days Remaining</div>
      <div class="col">{{summary.totalDaysRemaining}}</div>
    </div>
    <div class="row">
      <div class="col">Use By</div>
      <div class="col">{{summary.yearEnd | formatDate}}</div>
    </div>
    <div class="row">
      <div class="col">
        <q-btn color="primary" label="HOLIDAY SUMMARY" to="holidays"></q-btn>
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
