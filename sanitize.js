const validatorjs = require('validator')

const myEmail = "ahmad.alhabib77@gmail.com"

const sanitizedName = validatorjs.normalizeEmail(myEmail)

const name = "ahmad"

const sanitizedName = validatorjs.trim(name)

console.log(sanitizedName)