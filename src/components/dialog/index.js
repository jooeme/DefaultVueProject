import Vue from "vue";
import Dialog from "./Dialog.vue";

const DialogBox = Vue.extend(Dialog);

Dialog.install = options => {
  let instance = new DialogBox({
    data: options
  }).$mount();

  document.body.appendChild(instance.$el);

  return instance.dialog();
};

export default Dialog;
