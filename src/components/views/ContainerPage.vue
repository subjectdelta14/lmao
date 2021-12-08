<template>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <button class="btn btn-primary" @click="showModal">Add</button>
          <input
            type="text"
            class="form-control col-md-4"
            placeholder="Search"
            v-model="search"
          />
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
               <th scope="col">Image</th>

              <th scope="col">Value</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filteredItems" :key="item.id">
              <td>{{ index }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
              <td>
                <img
                 :src="item.image"
                  height="48"
                  class="rounded-circle mr-2"
                 
                >
                
              </td>
              <td>{{ item.value }} {{ item.currency }}</td>
              <td>
                <button class="btn btn-info col-md-4" @click="showModal1(item)">
                  Update
                </button>
                <button
                  class="btn btn-danger col-md-4"
                  @click="deleteButton(index)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <modal v-show="isModalVisible" @close="closeModal" :items="items" />
    </div>
    <div>
      <modal1
        v-show="isModalVisible1"
        @close="closeModal1"
        :items="items"
        :update="update"
      />
    </div>
  </div>
</template>
<script>
import items1 from "./data.json";
import modal from "./AddModel.vue";
import modal1 from "./UpdateModel.vue";
export default {
  name: "Home",
  data() {
    return {
      search: "",
      items: items1,
      isModalVisible: false,
      isModalVisible1: false,
      update: {},
    };
  },
  components: {
    modal,
    modal1,
  },
  methods: {
    deleteButton(index) {
      this.items.splice(index, 1);
    },
    showModal() {
      this.isModalVisible = true;
    },
    showModal1(e) {
      this.update = e;

      this.isModalVisible1 = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    closeModal1() {
      this.isModalVisible1 = false;
    },
  },
  computed: {
    filteredItems() {
      if (this.search) {
        return this.items.filter((item) => {
          return item.name.startsWith(this.search);
        });
      } else {
        return this.items;
      }
    },
  },
};
</script>
