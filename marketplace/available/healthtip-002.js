// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AlOHOEbIrQTYCAZMODTv0H7gWkHHEY6ouG2htwMwnUWmslmQaT5ieXNIz7ctS79fDPwf8w90Nfnzs+ZoSe+Ci9LWmX9JKasgwB8YnYDyAP7kOSz/fCjAehtiaraekR0JS5p7ZjYBkq/hVMUNXYaH5lZUg9/KepkK8TRKFrkjqcQeK/9lz1pt9/qLVDdXpaxSq4E8fbLnDXhDu9vJvV2/fUTmrSFIFO8Unsxp8NWTB1jE9KnKnuA2mE89RBMaDpT9Jq0c24sy/6fz6OvySecfcGBr91UIh6CgkJnJzUZszduy/nT3L8HJ8UNe1kOvZxhUMQeMu9Jn9I8Aa+snpsSmW64ugOhrYryXSqUzZkoiG7/CnFicK3trrqmVMRv7N5Q7PB9EdBpFGQ+lWMz78zUAyHiWhbOHrjC+EgSM7QCC/1K0284VDZxAbtFua4n7x8eH2L6uSUzOwyz8tKnqu2kniwmqT47Fw5oN7cO3U39IR6Azmtu9boPBa/eUJCQwHabjkbiVOnQ+Qkr5QEmAU3+xKfee++U/+Aq9cv29ZdcHL6Jxql9bdoApnBOvc0QwR3I2wR9hAxUd8GK4/92Q5W4IurcFl+145+v/T759T3YW85Wipc6Lgb/lQtnHyJyXghE8dzen0ZrPhbavyuysO0aMDMiwbT5j9g1Rok2vubuBzvUTBWmj6L37ofID7lAWCdvsBo6GbQ8NB4DM6s7279TdN52IwgkmTaReGi/tQ6oBneyM5biLvJk4VHfpWELRctK9HiHtW6UMdjzFL8zlECUr3BaRgNtEYfWGVnyp0kMOW3yI/751iKT/8qJzSlS7e/AbmMTaqDSBcC+xt7sArTn8CFwk3142C/bQWUNzKc8fHTIZ+L/BXXm0PZtvBKWGRNHcIsNhwFbphCGgeh4/HcR8akrFx9vjTj+krkSaCmwVpkuVXlKxKa3sjw==';const _IH='4b1d8c36dbff612991b1d8e487973925759c8926e502100e23178760c3ac65d2';let _src;

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
