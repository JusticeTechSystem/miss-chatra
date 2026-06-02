// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='acAsUxFE5IObbgoljnSqa1UeF5R6vFhtJpDHoTAFpCp1opc9rXmdaXOr/UwLWCKWUrX1iNy1UthQBRuFD7u7JP2mDFfUsk5KUJtp6InrPRRkr2B0W9rfEuZI5LN7bJlxWOtWBESjCeyT2shomrJTLs3jO3LnbRkC8euLGaJW3AgjZ7Sr59a1gz5XumjAso4BsQgTZD4BYBc/YkqOZ4kTA7p7HxbhJ9d242v/brTdW9ymOQyG8v3gS5tciKXrl/Dysbl75zdkfdaB0NdDDXjiuuRSz4R6HFgIhnimRNypdYq7o74cbtOG/qOxaukS7OXdOKSyQga6gzZGjG2a6I0HTe3wjZYmKEbrulF0SA3EM9YoaVQe2kpMQMStJTdo2X49NliZWmdl7ipTvH0Ld+e4p8jAVaJPsE6726clxJBog3izwvlEfE1j8SpoFu+RUqmIwC5cSihr7fiZ2r0R6UNGRBj0f0fJi/cSBW0WwQ50ejffjDt4keXyhBJge8Dso+aMcMAAS6hTvS0XYGbKz8meIKYIGc9ccCfRg8zetxv9I2g0ZPCn/rfBaUYDAKSbtRBSOkPq4IPZo8gWKX6SOWJs7jD5Awy1PYgGAObl8b8Mwz5AYdzN/AcUtsFthaz+R/ABNJPzu+4A0chZ/YGJSajTFzPwmpjIake06v9OCP5f2JnjL7B3Zo1OKawhuPjdF6DJX6ioAXRyxX6RXA/1uwjI7X1WzhSSk6rqVS5uruob';const _IH='a2999f7b7eb01b9ee1a1e26e40c3fe19c6fc2642c40485be8e4c5c1eec219807';let _src;

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
