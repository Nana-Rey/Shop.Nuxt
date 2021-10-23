<template>
  <div>
    <v-form>
      商品登録画面
      <v-container>
        <input type="text" v-model="itemname" label="商品名" />

      </v-container>
    </v-form>
    <v-btn @click="createNewItem">
      送信
    </v-btn>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
interface ItemType{ 
itemname:string
}
export default Vue.extend({
  
  data(): ItemType{
    return{
      itemname: '',
    }
  },
  methods: {
    createNewItem(event: any){
      console.log(event.target.parentElement.getElementsByTagName("input"));
    }
  },
})

  
</script>

<style>

</style>


