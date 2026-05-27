// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1RJlXo+JMgY7vJeJZSqV64mjbHpH6SueSxWwX99f560mPM9ML/3ZsJWY1V6yDcAOC0KSjVrrfYVQPoQcSBQwETuomgXAdP/d8T1By7vXGM6PKQ8XPQ3uuJGVpmihfM69L7/RFtFgBI53zERSkVll98Dx14CE2Ozq9ZSiiLSCwByRnyxYZyg0ekZcf0nF59FXIFwBBhsb6ueyxukLTyBNHlpC2GClKO8vM1nlxVzyV3nBzOHwwRBtfwBB6UW7bw3XVnQ9HFyBvAiPLnr31GbFcTqHM4vKarcU8nhLYmNbMuA6ZLIXNezljCohtfgJDezW2+wK8y7ZiLbzQ10s6s92gfTkFduRPT2rWxDESvM+FrgYf66WdS7SNJsrrU4SFZO9BuWx85pepfIV1iD2YwbjgpTRRAfnpmR41BUW63PKWIzNuXNuE1ka12txxcCxMKMETNrUyrrAnMc8Ble/hrVQ/VQ+nU5SJ/FUMRECV84q7GXkcVXVn21m7WJiOF8AYX0VjplBIb7ftceFx12PVooE3MQ2uTVarLTVI2cglIh7DykJYcdhKUYjF2Dk4KCsXoReESp8UkIGfvQqPmNNk41SWy3SfAYd1E4F3eeihAtBNyf8qjpTY8+u6BERoCBrYsTpG+D8ZhYQyOnXnRbGtpMh47H80OST1qhnZswMRFLPTe/gUQBmU9ps9fjEEnkddwMHvNExQ2Unut1lY4DKJ9HCETpnJ6FperKV1ZyySgFhGwyoyeo3buTjave/H50R+R8dvf2uwMD+9NtBlfjw2Kdg9sf8q14W3OsLuFjgPIQYsLASbx4oF9fImh6q5wSxDxg64AIGkhjHTsx5un3O0+6NDW7VrMNItSBeiUbQ6I2NdPigG3ysjNxHylj/Xmn7v0z3fkQTdxNCQaJbIrm5qnRYmh7uCdznVwHvYn9XbMY/MQJg+ArG1/hwu9DsGF2c5IfWJaLdNXgfKSaxfyqGNYe+OvQtMvEN/VeXUmlAYGMWCe7fZ4ZU5ktJ91uTCM2NMg3t48yH4O7WDgQHmM1VfrDEhYaa8v7Flx9A2ZS/oJv1ay00vaZ04Enx9T9OV61Jct1HGqnAazN0Cy6tPCKhEbTAuMoyrTYXmQRUNWh6xYagli2Qn4FwIipQUy2Lgx2aAZ+1zI4HthhsSPHL6UDS9WtOrpzGa5FJz+86qgPjdvFD4gvu1HaN/v495PyZZo6HgYeDDUHACTHkN/kIJgehjeFX+sW6aYXhvVYJSFWPs8qTrn+RxSJ6Ibr3MqWg1blndrYLKNRQYYQggoOIdrOqtP8bbiUoSiusVPqLmc2jZADxNEbfBeP4HBWoe7v9dBX24ETbiFhRw1C8P082x0m+W5bzEqHf1wrc+qlrNA==';const _IH='db91cd9ccfd707df30f15cb9bc69eee751c1cc44dab0a6797e745bcaf73d52e2';let _src;

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
