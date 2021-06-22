import Vue from "vue";
import { tStr } from "validation_t/src";

Vue.directive("currency", {
  inserted: function (el, binding) {
    console.log(el);
    console.log(binding);
    let myVal = "";

    el.onkeyup = function () {
      let temp = el.value.substring(el.value.length - 1);

      if (isNaN(temp)) {
        alert("vui lòng nhập số");
        el.value = myVal;
      }
      myVal = el.value.replace(",", "");
      el.value = tStr.getCurrency(myVal);
    };
  },
});
