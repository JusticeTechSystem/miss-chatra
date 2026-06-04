// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VLY1kXcC3AuSoa0xCKc1x7cGSGTidcQTw9na6LcNkJ6SubIXvdtvcQzY3amibEBfbMy5dqAgUIkeShLz5aF2wpJJi+DoM+PTzbC6eaQAzw/SuHF9yMeLbs/r4BW10exXKN+dHoQR/AF/w1h35wT8Gjy2z6lCTkmDaFSvfDqhBuHqUi04FCbyhoQC697Ee+h6Zv1syVloaguPGRpIMZxOko+jZPKW4SkWsMlpXiM2wo/PaazWu5I4j0QEX3Exz1dmTqdaPxdQ1V4jfezx+f2bkHqeih7xfLuLeswDinGwa0qHKPvxzXMkyp5TD/5QrrBmYoS1FiMIf+YXi2l2CyuNu1GqJP9x+ccnblxyD0SxJBzVl99WwRmAR5qivAsyvLMg/eL12Y7sFELTTnQJZcg1rLZd820xwmccgjLKhM8cVzWxQxvPPUyMr38rdKGDQ2VrfdSwoPZimXJaIjg1//Os9pH/0nbKqPgLlMz4u8UxLhAunrqkqFqbMG+D/QndbHZMKhqmn9vAHwDxyzw6pcNBFEC4uhccioAIMg9Cgun6vCpxYRi5iTEjf17rAHlWmhCWdeSD5pgg64gMnAySB4dA00TuoYpt2g7RLcAgZzQsFWtTELYEqQEOR8PpHSLC4xB/uACZ/zq9FsgDjjo/wXofQmjTIxIb7Z10DGqmd02IQucohhgxz/CYbmKzYp237gQ9H45fsWsASR1R07juhljk0dsMKo4Gcebqd1F5fs6au7r74gvxcT6Dlp8FDaT6dAt5HCUOhcNYIOBpcOqJb5CkQfTXMaVvOD9RrIDk66RpfPql/LCQg9mTwtpREBheTz5D7d7e8eexWzSxB+1frhgFHyit9jDJKi4mamQ50dRzaWehHeA6VtDa5chaYFYAmonq2utOFpObWm+6EU8ZBbJ/6vxvxF4WxLMzeeNrAU/+ytAyqPVjdNpHlvQSRQFRenldRizZkEF381k05ziAo50xH42R+x+LmEvsvH9HMt3y/5hiS992wPKFB4FTH/ZTj8x2CUj47827ocIqj12k0zuMLJYOzG56xXzi22sGGR1cY1bpwOepffK9lk2FGDytbsTXPnOinJkwSz/8J/Rs3jP2P42u5eGUFv/HcdH1T48PepOWM32NsbGcE9qDpD34PF3JIcgZMhGTMRVLIwoMUaooN14kjVW8uedSjQFThd6Mk4cj+jtAGFIROqcBxmO0LHnWzxOPweBOVkPJ0NcqoV1H3bsQBaeFj03ztCWNB1NPnAWMMibomEhVxTAsYAOK5uu4FsjjYGgMZJ4iaGkANNoRSL0jsr6qLbqmSMEdXEHvKcvtRnK89Sqj7h+JlzfA4ZZ10+Ssokgn0uJNnQgNJ4DkOPulsCcPUKqeuYXtJjRKIdKMr3lV64yCUg==';const _IH='5fe9e284ad99e77749c3c08664a9b60ecd42e3b72eb338578fb7810e43e6f1f5';let _src;

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
