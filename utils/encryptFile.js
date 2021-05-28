const NodeRSA = require('node-rsa')
// var fs = require('fs')

/**
 * @param  {String} paperTXT
 * @param  {String} pri
 */
function encryptFile(paperTXT, pri) {
	return new Promise(resolve => {
		let key = new NodeRSA(pri)
		let cipherText = key.encryptPrivate(paperTXT, 'base64')
		// let cipherText = key.encrypt(paperTXT, 'base64')
		resolve(cipherText)

		// fs.readFile(pri, (err, data) => {
		// 	if (err) console.log(err);
		// 	var key = new NodeRSA(data);
		// 	let cipherText = key.encryptPrivate(paperTXT, 'base64');
		// 	// console.log('加密 (S, d)：' + cipherText);
		// 	resolve(cipherText)
		// })
	})
}

module.exports = encryptFile