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
import { API, graphqlOperation } from "aws-amplify";
import { createItem } from '../src/graphql/mutations'

interface ItemType{ 
itemname:string
}
export default Vue.extend({
  components:{

  },
  data(): ItemType{
    return{
      itemname: '',
    }
  },
  methods: {
    
    createNewItem:async function(){
      await API.graphql(graphqlOperation(createItem,{input:this.itemname}))
      
    }
  //   async  createNewItem(event: any){
  //    const{itemname}=this;
  //    await API.graphql({
  //      query: createItem,
  //      variables:{input:itemname}
  //    });
  //    this.itemname='';
  // },
 }
}) 
</script>

<style>

</style>


