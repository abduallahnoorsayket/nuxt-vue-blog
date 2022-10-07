<template>
  <form @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author"
      >Author Name
    </app-control-input>
    <app-control-input v-model="editedPost.title"> Title</app-control-input>
    <app-control-input v-model="editedPost.thumbnailLink">
      Thumbnail Link
    </app-control-input>
    <app-control-input control-type="textarea" v-model="editedPost.content"
      >Content
    </app-control-input>

    <app-button type="submit"> Save</app-button>
    <app-button
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel
    </app-button>
  </form>
</template>

<script>
import AppButton from "../UI-Components/AppButton.vue";
import AppControlInput from "../UI-Components/AppControlInput.vue";
export default {
  components: { AppControlInput, AppButton },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnailLink: "",
            content: "",
          },
    };
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  methods: {
    onSave() {
      console.log("47", this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>

<style></style>
