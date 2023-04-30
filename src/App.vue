<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
/* bootstrap load */
/* @import "~bootstrap/dist/css/bootstrap.css"; */

/* Loading custom */
@import "./assets/css/style.css";
</style>
