<template>
  <v-container>
    <v-row>
      <v-col>
      <v-textarea v-model="input_text"></v-textarea>
      <v-divider></v-divider>
      <p>Text: {{ input_text }}</p>
      </v-col>
      <v-col>
        Dies ist die zweite Spalte!
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
module.exports = {
  data: function() {
    return {
      input_text: "Hello Text"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: left;
}
</style>