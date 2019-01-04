<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" inverted>
        <q-toolbar-title>
          Holiday Manager 2
          <div slot="subtitle">Take Control</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer>
      <q-tabs position="bottom" class="shadow-up-2" align="justify" animated >
        <q-route-tab
          label="Home"
          icon="home"
          to="home"
          exact
          slot="title"
        />
        <q-route-tab
          label="Holidays"
          icon="card_travel"
          to="holidays"
          exact
          slot="title"
        />
        <q-route-tab
          label="Add Holiday"
          icon="add_circle"
          to="add"
          exact
          slot="title"
        />
        <q-route-tab
          label="Settings"
          icon="settings"
          to="settings"
          exact
          slot="title"
        />
      </q-tabs>
    </q-layout-footer>
  </q-layout>
</template>

<script>


export default {
  name: 'TabsLayout',
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
