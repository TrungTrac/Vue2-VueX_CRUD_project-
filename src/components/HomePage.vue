<template>
  <div class="home_container">
    <NavBarCpt></NavBarCpt>
    <div class="body_container">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        New Order
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form action="" @submit.prevent="submitOderData">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Order</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label"
                      >Food's name:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      v-model="foodName"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label"
                      >Orderer's name:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      v-model="odererName"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label"
                      >Note:</label
                    >
                    <textarea
                      class="form-control"
                      id="message-text"
                      v-model="note"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  class="btn btn-primary"
                >
                  Create Oder
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        class="modal fade"
        id="exampleModalEdit"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form action="" @submit.prevent="submitOderEditData">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Order</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label"
                      >Food's name:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      v-model="foodName"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label"
                      >Orderer's name:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      v-model="odererName"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label"
                      >Note:</label
                    >
                    <textarea
                      class="form-control"
                      id="message-text"
                      v-model="note"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  class="btn btn-primary"
                >
                  Save Oder
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Food's name:</th>
            <th scope="col">Note:</th>
            <th scope="col">Orderer's name</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in getOder" :key="item.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.foodName }}</td>
            <td>{{ item.note }}</td>
            <td>{{ item.odererName }}</td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteOder(item.id)"
              >
                Delete
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalEdit"
                data-bs-whatever="@mdo"
                @click="editOder(item)"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <FooterCpt></FooterCpt>
  </div>
</template>
<script>
import NavBarCpt from "./NavBarCpt.vue";
import FooterCpt from "./FooterCpt.vue";
export default {
  components: {
    NavBarCpt,
    FooterCpt,
  },
  data() {
    return {
      id: this.$store.getters.oderList.id,
      foodName: this.$store.getters.oderList.foodName,
      odererName: this.$store.getters.oderList.odererName,
      note:this.$store.getters.oderList.note,
    };
  },
  computed: {
    getOder() {
      return this.$store.getters.oderList;
    },
    getOrderById() {
      return this.$store.getters.getOrderById;
    },
  },
  methods: {
    // Hàm tạo mới oder
    submitOderData() {
      const oder = {
        foodName: this.foodName,
        odererName: this.odererName,
        note: this.note,
      };
      this.$store.commit("addOder", oder);
      (this.foodName = ""), (this.odererName = ""), (this.note = "");
    },
    // Hàm delete Oder
    deleteOder(id) {
      this.$store.commit("deleteOder", id);
    },
    // Hàm lấy dữ liệu để hiển thị lên modal
    editOder(item) {
      this.id = item.id;
      this.foodName = item.foodName;
      this.odererName = item.odererName;
      this.note = item.note;
    },
    // Hàm sửa dữ liệu
    submitOderEditData() {
      const newOder = {
        id: this.id,
        foodName: this.foodName,
        odererName: this.odererName,
        note: this.note,
      };
      this.$store.commit("editOder", newOder);
      this.id = "";
      this.foodName = "";
      this.odererName = "";
      this.note = "";
    },
  },
};
</script>
<style lang="scss">
.home_container {
  width: 100%;
  height: 100%;
  .body_container {
    height: 100%;
    padding: 50px;
  }
}
</style>
