<template>
  <div class="contact-me-comp">
    <div class="back-lay"></div>
    <sectionHeading :title="$t('contact me')"></sectionHeading>
    <div class="container">
      <form @submit.prevent="validate()">
        <div
          v-motion
          :initial="{ opacity: 0, y: 50, scale: 0.8 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :duration="600"
          class="sender-and-email"
        >
          <div :class="{ 'input-box': true, error: v$.name.$error }">
            <input
              :class="{ filled: state.name.length > 0 }"
              v-model="state.name"
              type="text"
              id="name"
              name="name"
            />
            <transition name="error">
              <p v-if="v$.name.$error">{{ $t(v$.name.$errors[0].$message) }}</p>
            </transition>
            <label :style="lang == 'ar' ? 'right:10px' : 'left:10px'" for="name">{{
              $t('sender name')
            }}</label>
            <span></span>
          </div>
          <div :class="{ 'input-box': true, error: v$.email.$error }">
            <input
              :class="{ filled: state.email.length > 0 }"
              v-model="state.email"
              type="text"
              id="eamil"
              name="eamil"
              style="direction: ltr"
            />
            <transition name="error">
              <p v-if="v$.email.$error">{{ $t(v$.email.$errors[0].$message) }}</p>
            </transition>
            <label :style="lang == 'ar' ? 'right:10px' : 'left:10px'" for="eamil">{{
              $t('email')
            }}</label>
            <span></span>
          </div>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, y: -50, scale: 0.8 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :duration="600"
          class="message-and-submit"
        >
          <div :class="{ 'input-box': true, error: v$.message.$error }">
            <textarea
              :class="{ filled: state.message.length > 0 }"
              v-model="state.message"
              type="text"
              id="message"
              name="message"
            ></textarea>
            <transition name="error">
              <p v-if="v$.message.$error">{{ $t(v$.message.$errors[0].$message) }}</p>
            </transition>

            <label :style="lang == 'ar' ? 'right:10px' : 'left:10px'" for="message">{{
              $t('message')
            }}</label>
            <span></span>
          </div>
        </div>
        <myBtn class="send">
          {{ $t('send') }}
        </myBtn>
      </form>
      <!-- <p>
        <span v-for="(error, index) in v$.$errors" :key="index"
          >{{ error.$property }}-{{ error.$message }}</span
        >
      </p> -->
      <router-link :to="{ name: 'contact' }">
        <myBtn>{{ $t('other ways') }}</myBtn>
      </router-link>
      <toast :show="sent" :content="$t('sent')"></toast>
    </div>
  </div>
</template>
<script setup>
import toast from './toast.vue'
import myBtn from './myBtn.vue'
/////// from validation using vuelidate////////////////////////
import { reactive, ref } from 'vue' // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
const state = reactive({
  name: '',
  message: '',
  email: ''
})
// custom validation
const containTwoWords = (value) => {
  return value.split(' ').filter((e) => e != '').length >= 2
}
const rules = computed(() => ({
  name: {
    required: helpers.withMessage('required', required),
    minLength: helpers.withMessage('min 2', minLength(2))
  }, // Matches state.name
  message: {
    required: helpers.withMessage('required', required),
    minLength: helpers.withMessage('two words', containTwoWords)
  }, // Matches state.message
  email: {
    required: helpers.withMessage('required', required),
    email: helpers.withMessage('email error', email)
  } // Matches state.email
}))
const v$ = useVuelidate(rules, state)

async function validate() {
  const result = await v$.value.$validate()
  if (result) {
    sendMessage()
    v$.value.$reset()
  } else {
    document.querySelector('.contact-me-comp').scrollIntoView({ behavior: 'smooth' })
  }
}
/////////////////////////////////////////////////////////
import emailjs from 'emailjs-com'
import sectionHeading from './sectionHeading.vue'
import { computed } from 'vue'
import { mainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'
const store = mainStore()
const lang = storeToRefs(store).lang
// sending with email js
const sent = ref(false)
const templateParams = computed(() => ({
  from_name: state.name,
  email_id: state.email,
  message: state.message
}))
function sendMessage() {
  emailjs
    .send('service_qb40xle', 'template_obc33vr', templateParams.value, 'WNy7dEwsjiX1JDSWl')
    .then(
      () => {
        state.name = ''
        state.email = ''
        state.message = ''
        sent.value = true
        setTimeout(() => {
          sent.value = false
        }, 3000)
      },
      (error) => {
        // console.log(
        //   'This form failed to submit, please kindly check your internet connection',
        //   error.text
        // )
      }
    )
}
</script>
<style lang="scss">
textarea {
  resize: none;
  caret-color: var(--active-color);
  background-color: inherit;
  display: block;
  min-height: 150px;
}

.contact-me-comp {
  background-image: url('../assets/emailBack.webp');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 40px 0;
  position: relative;
  z-index: 1;
  .back-lay {
    background-color: var(--back-color);
    // background-color: transparent;
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.65;
  }
  .container {
    form {
      margin-bottom: 50px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      justify-content: center;
      direction: var(--dir);
      background-color: transparent;
      // the error message
      p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: transparent;
        color: var(--red);
        font-size: 18px;
        font-weight: bold;
        white-space: nowrap;
        max-width: 100%;
        text-overflow: ellipsis;
      }

      > div {
        background-color: inherit;
        flex-grow: 1;
      }
      .sender-and-email {
        background-color: inherit;
        display: flex;
        flex-direction: column;
        gap: 40px;
        .input-box {
          background-color: inherit;
          position: relative;
          border-radius: 3px;
          input {
            background-color: inherit;
            padding: 5px 10px;
            caret-color: var(--active-color);
            font-size: 25px;
            width: 100%;
            border: none;
            outline: none;
            border-radius: 3px;

            border-bottom: 3px solid var(--text-color);
            &:focus ~ span,
            &.filled ~ span {
              transform: scaleX(1);
            }
            &:focus ~ label,
            &.filled ~ label {
              color: var(--active-color);
              top: 0;
              transform: scale(0.75) translateY(-76%);
            }
          }
          label {
            background-color: inherit;
            font-size: 25px;
            position: absolute;
            top: 5px;
            // left: 10px;
            transition:
              transform 0.3s,
              top 0.3s;
          }
          span {
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: var(--active-color);
            transform: scaleX(0);
            transition: transform 0.3s;
          }
        }
      }
      .message-and-submit {
        background-color: transparent;
        .input-box {
          background-color: inherit;
          height: 100%;
          position: relative;
          label {
            background-color: inherit;
            font-size: 25px;
            position: absolute;
            top: 5px;
            // left: 10px;
            transition:
              transform 0.3s,
              top 0.3s;
          }
          span {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            transform: scaleX(0);
            background-color: var(--active-color);
            transition: transform 0.3s;
          }
          textarea {
            background-color: inherit;
            width: 100%;
            padding: 5px 10px;
            font-size: 25px;
            border: none;
            outline: none;
            height: 100%;
            border-bottom: 3px solid var(--text-color);
            border-radius: 3px;

            &:focus ~ span,
            &.filled ~ span {
              transform: scaleX(1);
            }
            &:focus ~ label,
            &.filled ~ label {
              color: var(--active-color);
              top: 0;
              transform: scale(0.75) translateY(-76%);
            }
          }
        }
      }
      .send {
        grid-column: 1 / 3;
        width: fit-content;
        margin: 0 auto;
        padding: 5px 40px;
      }
    }
  }
}
.input-box.error {
}
.contact-me-comp .container form div .input-box.error {
  label {
    color: var(--red);
  }
}
.contact-me-comp .container form div .input-box.error input,
.contact-me-comp .container form div .input-box.error textarea {
  border-color: var(--red);
  &:focus ~ span,
  &.filled ~ span {
    color: var(--red);
  }
  &:focus ~ label,
  &.filled ~ label {
    color: var(--red);
  }
}
@media (max-width: 767px) {
  .contact-me-comp {
    .container {
      form {
        display: flex;
        flex-direction: column;
        gap: 50px;
        p {
          font-size: 16px;
        }
        .sender-and-email {
          gap: 50px;
        }
      }
    }
  }
}
// error message transition
.error-enter-from,
.error-leave-to {
  transform: translateX(-50%) translateY(-10px) scale(0.5) !important;
  opacity: 0;
}
.error-enter-active,
.error-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
// notification
.notification {
  direction: var(--dir);
  padding: 10px 15px;
  background-color: var(--active-color);
  color: var(--back-color);
  position: fixed;
  bottom: 30px;
  left: 50%;
  translate: -50%;
  z-index: 30;
  box-shadow: 0 0 20px 0px var(--text-color);
  font-size: 20px;
  border-radius: 3px;
}
.notification-enter-from,
.notification-leave-to {
  // transform: translateX(-50%) translateY(20px) ;
  opacity: 0;
}
.notification-enter-to,
.notification-leave-from {
  opacity: 1;
  // transform: translateX(-50%);
}
.notification-enter-active,
.notification-leave-active {
  transition: opacity 0.3s;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: all 5000s ease-in-out 0s;
  transition-property: background-color, color;
}
</style>
