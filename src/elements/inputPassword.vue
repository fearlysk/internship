<template>
    <div class="input_password">
        <h3>Enter Your Password:</h3>
            <div>
                <h6>Пароль</h6>
              <div style="display: flex">
                  <input id="pwd" type="password" v-model="password" placeholder="Ваш пароль" name="password" required>
                 <div class="toggle_password" @click="toggle_password()"><svg enable-background="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path clip-rule="evenodd" d="M12,4C4.063,4-0.012,12-0.012,12S3.063,20,12,20    c8.093,0,12.011-7.969,12.011-7.969S20.062,4,12,4z M12.018,17c-2.902,0-5-2.188-5-5c0-2.813,2.098-5,5-5c2.902,0,5,2.187,5,5    C17.018,14.812,14.92,17,12.018,17z M12.018,9c-1.658,0.003-3,1.393-3,3c0,1.606,1.342,3,3,3c1.658,0,3-1.395,3-3    C15.018,10.392,13.676,8.997,12.018,9z" fill-rule="evenodd"/></g></g></svg></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "inputPassword",
    methods: {
        toggle_password() {
            let inp = document.getElementById("pwd");
            if(inp.type == "password") {
                inp.type = "text";
            } 
            else {
                inp.type = "password";
            }
        }
    }
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'inputPassword.scss';
</style>