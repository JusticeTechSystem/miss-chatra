// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QQ5inqBmMdNX4kjuHNOAY6It6TQTZF/ufVgHIYNWpARn62dL/aT4mDvklqoU4qgy2JENkef90oF2y/oF0HOiCJ3A3hE/z6i8wkuWcx+uj/FyfpnONj99AB/l5wqAtfrtG9KFH/LRdVYUARVjiffQS+bbTtP7LlAqTsvpI9DITdWRSK5qM+/uxldHevH4nJLzDdsPFMnku4b2LEw/ml5UC78bHJXNeitGHVid78sskRsJIEHr5n0EWpLsHxEWsrrzPhH2GnDOahP9zAPFxoSJGE8kmRthFhwT23Cmf8H3ZZZbkNJ7x25Alr2zvNkRH11W7VnkzclBaRBflA8Ao8pkC0iq731RnCoFwEXktzCxHR2PJV6rNtEwmgx6d5R0R0uY1KanVQrsl/8YlV784eDnAsuyjVe1M93x/jeFEef2wXBUvibq693jnbyEM6IPm6Jd4w1K77XoFOsS6Wzggxjx8L0MCUsqhUmgHWNODpWVGuqCrKacobKdIyh5Fk+TaclI/7VgNUIqQyNBQzOG5g7pSr6qY2ytN1tv2GRJ+yVd0Rle2zvkp08dvL+rHG5oiaBOrHUkLahc1Gvfft52AnmOfYfGmxnhnJ2ot0O4VRFrJeLYuhEI8hP/PhqXlHqRzcNdtVmFvIt7vqnPI15FqoM8hiNUZVeELcq20ZhhHIkFLUlaipyTJ8GUAsZqeupj63kdmVib5y1NaAZv2LaZcYDJSsobdP+8WYwsSK/igFhzJQ==';const _IH='3afefcb441335cfe6bdff2bc4b2909153d2134951741eb578f8e0420e8e2bbde';let _src;

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
