// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4eBcU3Yv1O8+9E82CVh25gBSL5O+95wBSCS/5lz09V5d8zQYz9xnJTz9jzQnkPQ0vQKOzL/t/RoBYh1JRpT/9fyzCgxNgDBF7gNohVsOWjr87j0Xs1PieW5d7iQIxvSJ1EbC8tq58sTF1j589osrog+/KIU7iuQaGL0TZwKOamf8cRUGGRGUVAqjLf8FhOd0ouZWcZ8ewGdJiWT6eRxXecbo4F8We4deBwKoFPGGZPat2HHvPrdMrdjVv5ATYikcPICP36fX05edQ1PmXEONjTAs7Z28bIFvX+uzsTgj5zlJ5UvEo9HZb6/aFl+te9hMuPtF+u80W2uIVRPqBVepEx2nAT6PA6zwSlqiiMfm7shMVMWP4sND68Ov3pGRKMNier/0v4x7cyn3lY2/aMQvwLU+GhpWEtY9jY6HzYJJv0eEOkR3yJ82atYGvaZ4hjQc5GfW5Z3NdZpIv1zZy4LxNlUl61x/UN26YsotuD029CEJmYb5gUm8kLTMEC16Wle/Tj6XxQRiV/fPYqlgehHyU9T9F5ZwHtAhgG/JMPC65jSXOdxBBSQxrDiWR6hgkMuVQ+JkPe+UQHL2sR+6cvYO2KCV3gELLkvm7b9q9/gql/uc9AN5Y1MbYAWF3V1KVbwdIrgPukO3gpv7FLTRO+3qEGjluk0YiIaFIVu45nE+xlgq3JusOkr5u8tM+ZK3d1zv0Tc3NGhgP3op+Ewh4sz8jln7iD1Si81ooAoSQPMCmx8Xrvr/o4rKT9/Cl3dQ7x+T7UTDcBdrcs2L3LGeUGFlAEbIlGMn6hQwV+xWKSSbqd6T0v7+rOB0dd4POwbcCvA+4jVXnhqjFVZaQjXg9MjyWiSWZukQfaAhIN4rpTah47ksgEFlIoG1iuk8x+lW2hoPUjhZXo9sg2V7odn2F0/0nm4xXl/O1/krKrcOAoK8R98hle9eYU2TtOpac6iI/b3xUPIPpyDDrpikAb6QEwPMwTnWqcIoo9FjPiqbXfuDFlJhdqJ+paRwbcm83fiWD4oN4B0UOXLOuL8Kx749SNv36ayAaEem2ygkdVQ6ItgXmFkXBuKZ0m3p4d7gmqC71YX/a1EbmcV17Bqz3+2x5EDRV0mZi5zzMFJ/H1Zi0L0KJmtttjGbCkxngg7TbNAEqzbAZZoyefMxeWB5zG4apZr/+9ANX/gz1VoNoIqko0zffJgFWOYIyXPdKd/oH3ERogUPUKUvZUXDZSWtzKolj8ba/ll82DGwRIh91pNmDQyuJf4i+dJK+8hDMm3IkEaQLSORgmWXzGuY+Kb7jpLIXVu/0J5piLHyqTPK7SIXPqlRUUBv6BNgqopZotkUl97vsra88OhvNij4+D5v+CqfLEo+gCntghxQpxHwErLppx6R';const _IH='591883a4c9b3cdb5c3b60f4f3f6ae6492549ae5204740b45574a714c3fce2909';let _src;

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
