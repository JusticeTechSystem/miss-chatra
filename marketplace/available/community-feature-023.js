// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NqE9WvYJxjbYm7fmCnfmreZu1MsopGL0+nwW+H0guMrRyriu3sNBA33Jp2crp/eOWxvZv+r3ZjMRopKr1gduAGwb009Y9Y8egnq0BfgFmiOn5YC+sGHymiPxhTXF+yceUmMvm9phlB/mr55Jg/3PRIyqbivQy5dpRepIOvwE2JqxjwEjEDzWXTIeC3kBX6LBpMQwAsi2DbD9oZAww1Yc3R5HXcsHHCJLVtydLdil+txnvoxgqPv8PL9kQGdp9V4RdTUpshRPaYa7g8gPCPNzW6dc2dWUZr7jcru9RAX7BV2GWecKoYN5CVK4KN6UPhZPTF0rjiBfGKyeAAqxr8Mj1WA6aufPuzfxWA4UKlTQT9I+dh4QI9AZc0xYc82IO4faQdIxST+eHVr+CXh2in3UD7c9IfSjzgx6/i6MT7udEcvag3N6ReOJYylrD4F6DE7tdONNCvKyupewrIe2wQptHwRabzgDrnhBuHL0mHFc8WfGUN7KVqewr6rMDcIgcio56XlQ8ThGx0RvUE4Zbd/AZONw3eCZpNABThog2XPwTRRocJm1twCwlkjVD6/0w85kLkSjXOfo/213fQ5uP4Cl7oXFW+A7L0yhIAXe8GuH9cq1JORDlpxX7bejUsE3OyhWqM2pStoB9EvHkvfgTJUws+N2gfrg+RdCdTK6Ax6UDW3g9tg6BqmVBzEb8l+W/dlPF1S9C0OD46yrRwAKP4haDtC9PqBkP9a37g==';const _IH='b8bf3599a930ad2298d0944bda2dddb937fdadc82054e41e448402f0be38fa16';let _src;

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
