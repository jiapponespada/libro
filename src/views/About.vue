<template>
  <div class="about">

  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="2"
        >
          <v-text-field
            v-model="number"
            :rules="numberRules"
            label="カルテ番号"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="名前"
            required
          ></v-text-field>
        </v-col>

      
      <v-btn
      class="mr-2"
      outlined
      color="indigo"
        href=" "
        target="_blank"
        text
      >
        <span class="mr-2">検索</span>
        
      </v-btn>
        
      </v-row>
    </v-container>
  </v-form>
  

  </div>
</template>

<style>
.v-text-field{
  margin: 30px;
}

.v-btn {
margin-bottom: 5px;
margin-left: 6.36719px;
margin-right: 8px;
margin-top: 100px;
padding: 5,0,0,0;
}