// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7V0X7DouaimO5YZrprQ8zr9Rj2Y1NCkIP0meRcUfU6vTa6dTYT33ReVhmeZVRowa+G7GY9NsRp5O00pVXQVAk5o9k1+CAiMsulLvK0If8YnYVuujVQYgfA2bqcWPjZpdOFcKsO7diiROLbC5w4EEtooMY8H/0SpfJ3Yg34W5eyXFi2NYRPUv+IwVhfcPc4CR850upxTvHDEVo8HFUAvC9P9K1zaBZmLJUBr9I2JPrsZu5VU2kImmCIi2FEyCa9PCgvyxy27aFT+qGz8sHyojuVc4FDXhes4C1s21v/knpJFerNuDDpcUUGyZtmTPljc8GvUCKObbZi+BfOBFFXyzrcl/x61bq5s9vicqEP2zh8MnoudMuitLnZT70XC53p+BKotCXQZ2zrm5Cw+qR190ckpbussLQFCOCVU3hWVGuKAVAxlzF6zUbQqD4AjCgr6MaPWrpqV+GtbWQXW1H8yxcAqZv7ZzquAHAUAKEzeMqIndS2zRiFtivUWRxTEwrQMs261OVEhUDo2xIZ1r6TulzC09pxssgcwW4zwW78VXX+M6C6j9RFtqbV6Pjee2LI3J92mAouezE7VeAvmg1MBXaM/7UZ1xzDxcryfEHElSYG9S+fCKloWpdQZ9sQi0hDVI0FSJM3agrpBc7R3XVtCJ749pwBRNtXcE7Se2JQK7xJmZwcjesFOFIJp8fmbWsE0QTxfCJvnffRzgLjT7mZGOJnAoZooaieV+/nWXuZZA4A==';const _IH='774c00c9acc062f2c52a26e68f46933c89bad21f237a2817a746ce92f12c6db6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
