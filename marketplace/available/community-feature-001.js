// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kOtIV78gPMdr8uLn6Q7RXeAONFR4HRs2t8HfUV66eEaPJTTHm9aiaQvoBE62w9an+cqejMMlEKVO3d10iH0AjcpicDYjDpQAI4NeTzqgQA42CA0rR3Bmav30c7wDGHpsPCdSxNlEeGrsRiJa4kvnba03fQAYfge4iQbIQ8V9uMfPdZn24UQfn3bpTmDmzLNqUeDnEZT4bodNQpJMxBf2BowKzLrHKCCTSk2nYrJ99f6dINTmBNqz7sNie95pGFcDcwcjdrILoF3VN3EhK9Memt+rrvkGl+VD+ma3TI47Kqp2zwVfHEdoJJmoqkFBp+FjNEMGqO0evQv+kmXg7zF3LNSFREwdlpedV7OtOgRKMX0+DGfCmvEyhgL8woGKVhhttlBnaJP93JRT4D2ifJTYECfQBePbinEcTbiVW0GHpJG9HMoxp3N0vUMKsLwgEj0S4Ioi98JRDO6+5Nw6Fb5fpKhiqNNSSa4L0Qz/kZPktULh1lAvB3+kx3X5z9lArGkypzpOr2+gleQUIM11XYGIqskjXMchMlOSHq4YjJshh/yzCnWh9poz2a9UfLId59lyCid3d6I9FZPSjBANEwRd00m9J2IOyiSAKVMTl4bgn9rhmhImZz5zMh6tGohOjuP3l+lmyoQU9mmLINuNqSB8xrnhCfJsego7i/NMqoVwD9Rke4JTarjO/aAYmpmR+3Y4sb25tvKOiAfYpzIG9dyOpQ==';const _IH='947611dff46b1a2fc5cafaff7bc9b97f03a0136eff30a6ff71cbf5954ed14ef9';let _src;

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
