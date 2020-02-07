import httpClient from './httpClient'

// you can pass arguments to use as request parameters/data
const setPassword = (email, password) =>
  httpClient('/user/set_password', { email, password })
const createStudent = details =>
  httpClient('/user/register_student', details)
const createTraveller = details =>
  httpClient('/user/register_traveller', details)

//   fetch('https://europe-west1-schooler-dd7d9.cloudfunctions.net/api/user/setPassword', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//           },
//           body: JSON.stringify({ password: this.userPass, email: this.$route.query.res })
//         }).then((response) => response.json())
//           .then(data => {
//             this.submitting = false
//             if (data.success) {
//               this.failed = false
//               this.success = true
//               this.warn = false
//               this.neutral = false
//               this.$router.push('signIn')
//             } else {
//               this.failed = true
//               this.success = false
//               this.warn = false
//               this.neutral = false
//             }
//           }).catch((e) => {
//             console.log(e)
//             alert('There was an error')
//             this.failed = true
//             this.success = false
//             this.warn = false
//             this.neutral = false
//             this.submitting = false
//           })
export { setPassword, createStudent, createTraveller }
