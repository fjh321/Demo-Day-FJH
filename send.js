
const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: "acc7f4f8",
    apiSecret: "ljU33XcqutGDhLMu"
})


const from = "19847109789"
const to = "12064198205"
const text = 'Testing Vonage API with Demo Day (Fernando J. Hernandez).'

async function sendSMS() {
    await vonage.sms.send({ to, from, text })
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}


