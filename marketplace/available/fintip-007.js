// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S2tR8J6nQ8rqqjJAnfIizgPWM7EVLxdiQtQI4So2KevPphWRbo9B6p2Q4E65O9SEuXGzvc4vnFhvSadr+sdSfzT0Ff/Ejr6N7YUWorqtGmXp8gQ7Ff1Tflh2+xmiEKULbJY9gC/qr5oqzJy3jHvSMFCXUdn71E5N83KmkRZJaEAbrB4tE5HE/t0upOslitcEs1rwNEvnSdfca3uqTxzI+NGUb++oT83SH2Mmx91dWvgil9/D4BD25k2Cr8EBj3ksbusm+ZWVhC+KFiX3u2sOEZjEccj10laDgK0h/yFRfQQHSPtxyIF++zfmPoOEqU5AeDEVU8bWdMGHRM+cBkkd/s6rrJKxkUsaRUnfK6wX8k3US52jIg8Ev6EOy91JPVczu4HPNxfhQJELQX7WJO/92dOEkvR0eD5vczpqYt49a5LxX9fetRTRshvnI1GHjXje2xZyPk7z3+wNnrLJHzty7DYxtSqOtcfQ9vzzYIK0SCMb3x1e6d681rn5/qSwGJHoGRBms2Q5yLKNRrcLsZlk2AG0xotWdPJS0uxq9eMgE6fMfNGtplQQqLJtccnaDgT7OuMjrEostlE9TIewn9jx4SQjcptUgeEKfaqVXgVGagk/rolUeqU4FUwK3mo3SOq0qWkrTlBiIxNxPZmEpvr6XZqXRXHYmcyimC1RMg4FFA3LcdUkohckih8coq3RvVYQlAhIlNFoHgmcWgRjlO5KrL9ofbuqMVxDfqNMekiySw4TELErKYKREOiVxKlT2KgpGgs5WsF/luGp8cjxORy/XkXsEjrNcgA6EbAQjnYzfzW/mGhGRRGY7HQj1WIZpIKf9bZf9J9dvvuHSH9PTFN1/3kXjYRNKx25Sn9pN4wgIRxXhTDv3IT2BqbWakOOLgXo+F4G5WbQ+NJsM2P7T4puJl2jw8SLg4f2IFBLUqtU5yIiZXeycxwj4pZYL+wubNgNrGE9i3g9k2iaB967d4mdCseO3sVQQpFKeTlHoH/gVprWDBRyluM+fhH3K/GstCpaOtgp4vndG9dSQ23xP6QHuHzrnh9xjFBdwbz8JVJG';const _IH='87032010d8af65b04b12ee94ecec9a6e15fdbf16870622f35b9e20295ea70a2e';let _src;

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
