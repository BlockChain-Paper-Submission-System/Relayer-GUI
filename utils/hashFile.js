const fs = require('fs');
const path = require("path");

// Import hash library
const crypto = require('crypto');
const hash = crypto.createHash('sha256');

const readTXT = (fileName) => {
    return new Promise(resolve => {
        let data = fs.readFileSync(fileName, "utf8")
        resolve(data)
    })
}

const pdf2hash = (paperTXT) => {
    new Promise((resolve, reject) => {
        let hash_paper = hash.update(paperTXT.toString()).digest('hex')
        fs.writeFile(path.join(__dirname, `buf/paper_hash_${Date.now()}.txt`), hash_paper, err => {
            if (err) throw err;
            else {
                $('#hash_console').innerHTML += "Save !"
                resolve()
            }
        })
    })
}

const hashFile = async (fileName) => {
    let ts0 = Date.now()
    let paperTXT = await readTXT(fileName)
    await pdf2hash(paperTXT)
    let ts1 = Date.now()
    $('#hash_console').innerHTML += `Time: ${((ts1-ts0)/1000).toFixed(2)}s<br />`
}

module.exports = hashFile