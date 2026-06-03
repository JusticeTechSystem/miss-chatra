// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ov5zcqXduf4N/5XIO0nuSSzIaAsKHv+xdQ06zZJ7cK5Tb9E51YIeeUeYzDxwibNefB8xd5BUUqjEDEnhUMnHCsMLgTH+2by0fyZBVMhMlq89hSixyaFTjTLl92FI4wbSMK7oU9wFUqB6LXSdTL7/ScmAxDtAWJsFMjCVK1/iqh5EQPicojTB2aDBcZEt/vs/LOd2z1S/K7lVWz34q47f8yQQNO7f0O5z5DPiw4hoeHzyffSYqKrtpPBczPz+d1jTRWiG05nrKxu1C4YIQrcHMXog5BST3dbU8jpn/BeMkxNzP7m4H4cK2ZY7QNEWKV7y0jSgds7PiElTXCSsZPR9vVVUryzBO/vYwp41HlpXondCkMAZm/hPi14kZk3CPV6K0CG7DDUy0Qk82G+SCsjNUZRuYjrdSslbI0v/9Mqqbbh7W7luhArhEYwujP5Ows6XiUJUmUO9+LNMLESkaxSG5n4OaBVK9ZaAiXgQ6zdmccBfBf3r5pZn570vBg0EihXGiDU2iwzgWcAfc5oKZaqSeV0rDP+hlYJ49cUaLPqiVEzKWz6Oh1NUQ1t8dnu1nRgC8XN6+WqtqYhuzXhBOW+mpjI9S/A+mT6Luc2Vl1czVi8CosCXc0sa/CZ/Bg0n7XuCAA9jpieewYzhV/3WsXuo7ypDcFNdPZ+elJ614cDIYaUUtS5XHcEUSxImdQnbkTTR4eHwh6r8vInEm1cGdsSNsE92dhpiIvGQwNeioiJtmkkaVn46mvxJX6MA/5qG9aX03mvTBrOAwd1xFjqII5Y0FJCDHrDZ9mHWKkuq9HrM4fGuZBK7efvEvO+2Z40MpznKAhl/XIQazy5scLyRhMFNlbt83605KUIsv0reBlVpZ/A3zgV5H6UC6Q60msiqju3y7mo3YlNCc4VQeAUBtyKJR8XFErQ+LVWWhqgCqPRr71QtOcJRZAmD++h68QNQ1h0WCVcHYW4HEezTWhgPjE930Bi8tHe6WmWQWxLVE6BR0NMOnVxxe6X0YpeSjfDQBsKivA5SAmkfq15MVqCHKzfTJq4ST3eVbOzUp6RfNVC9zMNqvUKYmCgrtM5L78KPccsuSuM7fjSrvxAL9CyJ1tNU6LtZxoyBGUA5YcptAo2+L6efxbxbqweL9+Fcl8pkn+zKOHRQ92TecNb97qavYNqiYyYv/nJo6Ejmf+21/GoKQSmb+cVY+r6T3QYRppA=';const _IH='c1c0c8dfbb749aebbded0e10797b0a5a72b202b1acf64ed6c21667f0fb3d4351';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
