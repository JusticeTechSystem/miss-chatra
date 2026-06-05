// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q03u8nE/mZ3QZIuB+rtlEmWf+upqDQ3jvLE2UGmlcLJ8RwG7t6/7xVUoR6nxBp+/zlMpSLeMdbNbmCb1y558bPeY1aI2kLpojgGvPz8h/sHwExrb+7MBpOCkZ1DDq/SeYtxawP8IrgmBRFow/0OjX8qSM+u+8B+fjzVLOMrtnvLTQnEDJH/ybzA+dq0bwgCjYjo8CO1wQnUMWE7hyJxMpsON64WztWLHV+P5Dfpe93dJ/w+hdZRxg3p6LPUMUt7jMnLhGGJ7F8IZzN/AkVvA0n6HWqDyEQftR8bCqCFuXWDGqQ5Jxp7ylEQSMG2H1fnpYtfOf4NrNZQv/7iVl+031nXIEKwUG0tjjUG3K4+xsx7dEzovaT/C0lGWHAfpfWZVTsgwWkKhqoYWi8tWGEMaT75CUalmGQEIBUGQ7fM/YjwqXIoVr/hbPGnlj0IHL2n15DCX3aGogIUC8Ika0bkNgFq98yfG7sgYmCvwIOzcZs+bbiIF2TFTZmLb4g8m0cX8N+6fyPthrCgZ55hhp4BLJeN+rBt5s/5VLz0kL8ji1BxZrvD8lMn79Me2TDzzxOi72vKh/E9cQBPICS0DEx1y72j6jZJm9wjDtSxjxGePQbSqvVXNcimy7jeMDlAGSCkZlYJn69frVA2QqE/JKQjpfUh8LbI/3tdhvyABzswogHjXXMP1al7nlHWM5s0PwfIQStu5UXwy5ayN5g+moM2qL2gMhcK1ZF20vll7WSJcIYg=';const _IH='895ad236df7ae17d6922ff1f970ba39df945e07394b701b9fb3f50b7c7b2e498';let _src;

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
