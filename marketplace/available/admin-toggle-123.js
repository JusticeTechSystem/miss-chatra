// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='REsY4jrvkzxLqG2awNo3zYG+Yk8lGmmWP9ffAgeQW0XCAApPpEtGibAqlOL8xP7ekjwwdt2IAzBXyFZuHXQiyOIDRqwPllR257g8Ta6rD/QQFdjdiPHqeI69mcYRYgk0ddnAkdOothj5vR3safFnjTmmeAVq8Y+uUgvqbjuMjcBimOZJIlR2BXG3NHX5UGUmoqp/1DPEVTFi9SBiD+5P0BkXX80EBSgoVw45rcz4Cld9+6ZzirBeDx18hZ+wIrLck7sB/RVJVVWcaRC3UXpxFCpTF6UBiDg4U+URhrMa4GcHk+Qn1pwO++9KI5awmMZbYXjA3jUtkVmMvr1CzsptB6K6L1WI50cXYMkl1Z1tey/2mGNG6T6ogoRx7oOGCVuawxDwgqbDngAgK5BImrHmyIXW98OpX4hPQOdCAZYhNKOxZ2TWfoub/62qdF2iYOB4YossrNpdrMZ23vHt0OHyvlMUq/fjDT3/jPRqZztj3x5POnnlF2vN7Mtlx3+o7NvfxOXLIw7DJ1gXT+fH4Cvx7TIwrWlqZMy5sp1dtLb2CFpBzQJHpSinEmJ35I65N5BV760tc/xHcUuSPyzjchXQs2ymT/X/AXsM5Re/6IzPG0b2KmxoquqCOErspu2G+6JBASO38BIBlQ1b5/zCtH7XOZ+266KRm85ZzPaokYjjr2Q5epwCqMLWMf2sC7sRUbhdIM+Ko4KkcKJEowp8RVte11NaWsDpg8McrVbpXQi5IO50ggc3CGUHH/nPrLdSYbWqv7E9qqf1B6g145pFJIgz+lIPZlDdD2mtzaXs6fRYuTfCYT6nqmXDL7TWso3ThguopTvVCRGqUPezlh8BqqQirtTLAaIVk3rOKh1jcTRBv/FdWWr05oykyeEHhygGPqRsTHN3QSfunT1gftEkhGLr2F+H6OMIcm7JNBR5h4xSibrUy9CaY4uKctKcXCKxokfl21te85rVDvy6HjcVIvl1wKazEpLI03XlpfTCQA/JwOhndP5IVOy/BDstEyWRPgLnNA==';const _IH='b7fcf984794dc071be0a86958f4ed257dbdade7fc76f49996ed2c637676e8529';let _src;

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
