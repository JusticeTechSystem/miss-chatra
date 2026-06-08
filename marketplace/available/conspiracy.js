// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6k3r46ljcXkX0topBl2hPIUBeL3hUZ2sYQ7f5oyK4EUL64q/t+vaBAZc+gns0p49+G0ZI4nzYPfrJTPj8BkgcqzEy7z5V0LELHHgxAIQNNQc8wZqMQWOOj8K5yfE4dBcYiEWmC/bVc6f5MHcChJ5IXfyxuIvtbwfcvupPx+5obM+wb9PhCIB+z2KDm8TOxrUAWK+lzBC6tgWSBBQNmwfYcHDlih4ze9e6OZNPgabIf7sxo1O+gQMPA11vmAnZFnfKhbHLn66PZTFlLuELsVfDg9ZlfvtgpQuQA+ChPTl7qKzhpFlGe67FOdQMHJ7AB1k9lbZqExF5LoeYR0HcmXMKUcRhXTWIcdbAQCTvWn9li40GcIV36ve5GqLBYjU8vbWcHNghBkS8F7qu7U9YISDYo3cdl1QCmN6wz8zzBDsbosVbb9ZeE7bbRwADpZJELH17CyX+KRvw2DMyyFT2P2m+ALoKDCIEgSiDohxwNymWNpq0YxBbjbZj3MM5bcYDVpOfNxa+Hav5hyqanmYF+Co4nEhO8RmJASscGpfLYix1mzpZlX2uG0/y/ZvwgeMuIGQmsaYLBAPAiBDEsjY6bbkeZogFDjiSAh7OtYkgfeIDc5bNleS+RLzHY72hK0MH7Xe7uRPSYv2mmAeEtEAvGO9Xv+r5XhGs6gs2YcOEVmBq2IG4+N8WuXCObu31YHiRVlV8r920yRU+mzpR6uxoZ8fPAJO9SFisT1xTJ8iHYZ9uF3eE5K6W25qHFyVCbjD+FWX5URkVPvcqrlm/muaw/yr5AtzYLHvcr8Ax/xL92MqIoqmIbeO/c0HwvxOROxbPGR/AoHGiOByqjCyFMnhv6v3D4u9M87iEkPjiuuSOuIjQXpa6iPGzoTI8h0vmTeyLvnWW3KN7t6sGUFs09MTXCMOmphXyEMHwS5mEVAnnXmyy4wkcF8R107vOB9dU1meurlCJmOGqV9iD2OzKuweH6PzplATR87vcqCF4e0qU8dWJdZAOh/77ti/7d/3x3xXrX3NODwdwupU4HxSA9IgqPUhj3SVeKb9xy5U42AOrDVbSJK0+2+MqnbZEm8Ij90fAR+eyKcdwqyoIDksVMPio8+DpvxUrNOw3guSXp9Si8W+BQG4YuGGqSGl8TpvAK1epIPUCsp33RItpG46BjoIKlyN+sqcRQ/oaKaO8WYGAevbhHEriVn8/STxwnaVaLaA/0WhMSM7+g==';const _IH='f6412da5e72d919414dbf4b8695b75ddcadd763019da7ba50719d22d29581d77';let _src;

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
