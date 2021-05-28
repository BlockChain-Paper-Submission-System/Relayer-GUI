// Load custom lib
const hashFile = require('./utils/hashFile')
const sender = require('./utils/sender')
const receiver = require('./utils/receiver')
const decode = require('./utils/decode')

// const $ = document.querySelector.bind(document)

$('#hashBtn').addEventListener("click", function () {
    let path = $('#hashFile').files[0].path
    hashFile(path)
})

$('#sendBtn').addEventListener("click", function () {
    let path = $('#uploadFile').files[0].path
    let orcid = $('#inputORCID').value
    let privateKey = $('#inputPrivatekey').value
    sender(orcid, path, privateKey)
})

$('#recBtn').addEventListener("click", function () {
    let ip = $('#inputIP').value
    receiver(ip)
})

$('#decodeBtn').addEventListener("click", function () {
    let fileName = $('#decodeFile').files[0].path
    let publicKey = $('#inputPublickey').value
    let filetype = null
    let selection = document.querySelectorAll('input[name="typeRadios"]')
    for (i = 0; i < selection.length; i++) {
        if (selection[i].checked)
            filetype = selection[i].value
    }
    decode(fileName, publicKey, filetype)
})