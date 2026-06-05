// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U8E84/J4XUhGveA+CD9Wkm43vD+rM+SZwjZfYMPumi71IqR4J9q3cRy5RITY4Lx8LOn3NnD6GF9UJD9Fn2ONVWVkptK3hxn1zFkmkt9dT0AqRHJRyYOnc5KU6rNRa0Vqu9P9AssKYf6XjjmkKutzL6rTAtDKxA7AOxplIvDLbMqXI8xAQHNgPAvea7w4v+enXI2/aCabmg545LpnJg4Xinb8rq6AJgBbfoEfnWTu2QKtmPfe1R8h3etUb2ITo/SNcqp+Gh3vgYwvWXKuEuBV/uVjMOjCcMM20NudzNrh5YtKLWC5s4wjyf25wtJcmt7uRt1Bexmu2lE48V9/z6leCEo+oV1Eg4HLMa8M0UM8UGM1i7kSbjS+aNxbPvB13/aNmzjyUZw90JdCDj5ZNUcVg5yFeAu5hM4A254+bda6UobWH2wjovy1tooxUEoibhTwczCD5dGeyoNdeZWiRIO3X8fOk2Q596h6dS+W3UZdD++EoN7VtIBa/UsA5veZKgDtMgxC9E05u+1qLNpXMf10syiSR2CBlOpI1/aiEu1qfI51bTJ1rbalci3/UBjZNUVLDwiEpDPPbkqMlBboPWgCHDS+UljuiJG+bHUB4Omb2PwJP5duCDI6fGleJNtRCJeU3kRjQxHFqsTZ1AgCa7q49fmZUk9fmQTpPo86GRnpqCA9g235+fy2FJj/TobvXKa9zYGp6ZPbBBfnv+Xqn2BYe7aAm+p3ghyzbed1KIw9NrsBw/UsUpve8WjuhQOrkSs2gqgRFiAKkFzg9u305sS46AEHd3CV6PfOyRZp8pog+VHGojxUJBDroFV32xaCi4I5/znWEH8lCVLNu0ldMQ1pHbc68W9LhLP4l9XF7Q1QjfUoxxYOXmRY8MMRBPISUekRL6v0dykPajeWbLHHwPGzPx5IU60Bz+g1Xo9q0XNafgZGUvM99nBopV3D5sUZaSVeADSfXyRp4AkEXPrm3DSpoJYwCJRvJB2EA3cDdNcwL1KuzSMmuzW2/GPuG1IW/gdbwS23PmV+orepd1MTHCjR9M2PccNR5QrCDduMeywEq2t5l1bmYs2sMa4N6jJVZxUL6kRNcMKxRVeU43EZYaln4GvYS1xq3RXOS3r18BlP+BSXa5gduQwvwxx1I/SuJK/+ePaCWUgJicsxst/WFXr/xIWs+9RCcfWQtKC6J3c9eTlPq1v/C96agoCCvVpr8R+/BuJje9DH9EH2ya1T9CoKPKltbSrcjZFi0QcIGcRRCF1/IhYAvpuQs1udhA8P+l2GbMm2hj8Ta14WDtmcJVGwTZnPPmQiMjdNkHNs89VkjAxKHolU6NAp+rtDGnZa2NwgGnK0s7Yez7T35qG3JI/igjGYhlT82LtEmesP65Gh';const _IH='39520cebe1dcb8aae53251699063038b05eea0278f8b804db06008d42645b0d1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
