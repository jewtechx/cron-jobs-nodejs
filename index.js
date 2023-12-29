const cron = require("node-cron")

cron.schedule("* 21 * * * *", () => {
    console.log("Schedule one running")
})