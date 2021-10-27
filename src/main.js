import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
let app = createApp(App);
app.use(router);

/* Errors */

let errors = [];
app.config.errorHandler = function(err, vm, info) {
       console.log(`Catched Error: ${err.toString()}\nInfo: ${info}`);
       errors.push(err);

}
 app.config.warnHandler = function(msg, vm, trace) {
    console.log(`Warn: ${msg}\nTrace: ${trace}`);
} 


app.mount('#app');