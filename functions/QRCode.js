const qrcode = require('qrcode');

/**
* Creates a QR Code for websites
* @param {string} url The URL for the website 
* @returns {object.http} The QR Code image
*/

module.exports = async (url = 'url') => {
  let result = await new Promise((resolve, reject) => {
    qrcode.toDataURL(`${url}`, (err, url) => {
      if (err) {
        return reject(err);
      } else {
        let base64 = url.split(',')[1];
        return resolve(Buffer.from(base64, 'base64'));
      }
    })
  });
  return {
    headers: {
      'Content-Type': 'image/png'
    },
    body: result
  };
};