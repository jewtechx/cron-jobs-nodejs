const cron = require("node-cron")

cron.schedule("* 21 * * * *", () => {
    console.log("Schedule one running")
})

cron.schedule("1-2 * * * * *" , () => {
    const mail = {
        to:"jwlarbi15@gmail.com",
        title:"Cron Jobs",
        subject:"Learning cron jobs",
        body:"I just learnt how to use cron jobs and its amazing"
    }

    const auth = {
        host:"gmail",
        email:"jklarbi_danquah@st.ug.edu.gh",
    }

    function sendMail(auth,options){
        console.table(auth,options)
    }
    sendMail(auth,mail)
})

//using ranges
cron.schedule("1-10 * * * * *", () => {
    console.log("running in range 1-10")
})

cron.schedule("1-10 * * 7 January-June *", () => {
    console.log("We've missed your presence. Visit us anytime you're ready")
})

cron.schedule("1 15 6 * December-May *" , () => {
    console.log("Sending at 6:15")
})

cron.schedule("1,2 * * * * *", () => {
    console.log("Sending in first and second seconds")
})

cron.schedule("*/2 * * * * *", () => {
    console.log("Run every two seconds")
})

// cron methods

const task = cron.schedule("1 */1 * * * *", () => {
    console.log("Method working")
})
task.start()
// task.stop()
// task.destroy()


// timezones
const timeZone = cron.schedule("1 */1 * * * *", () => {
    console.log("Method working")
},{
    scheduled:true,
    timezone:"GMT"
})
timeZone.start()
