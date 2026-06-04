// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZWRsixYF6chVYw57gRfWtfRwOp7zfzvK9+MAuoCfhQrkE8y9XWIEe1gE8pF4xxDppCGmunimAkqJljP1buOIz1bCypeh/hZnJXIcS6RtqXeTqhNN7d0qOoL0G69dSem50l+u+jzve6G2EJ3KoeUPiA7jqLNQaseS8+W1LHdfW/WGUZn6YmHXjsiygduaSAGI/Yjw93scPYm4VdDg7UrblfelAGAuXyUl391m6HY3omTkud6lmpFSoqf/BpaPbbJRZi7l0WdkIwNApHk+Gg5Yw+qYBCtknWa5I14vHfq6PViQmk2LVCgk/GPgXB9w3j0uU/RN/mT+moF0ljPDj3m6aYTulV50LJQIN/nRAtZugbFAt2Y1RlMnRdMKlf5nstivXsceXLHgT9Hrht5/OdYqDXplkHagddRxX4vBKYso6sv0V17aoi54gCwkMJkMo+s9YX4djeMdDDLTu5KUkYc8nXEs6QUbAr3Jzt9pFqNteAC67NioEyH+EEkA9C1trC3/z6coq7nl+3tLejs/uoKCaIRjvYS3WSeSdy/4BnqpEIPB0o6KOpfd18synlN/M4J/SLjYpZmQs74ZxbAsq9Nukic9LK5WDBVv1R1JjQhE1s7HoZDdvssCb09U2Eytw3Y=';const _IH='e93b727411e972d1c6cf2b2eecb5dad54d4e86eaca339fc73a53b7baa7f07e78';let _src;

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
