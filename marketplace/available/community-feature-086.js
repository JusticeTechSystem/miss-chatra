// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pn7mOSg63ubhTUhACFYGvVpwzOaOawqTdPglohoDaYRS83HW8ezMua5pbEOCCVOcs8HbNw7X9VDlcNxEcTTS/X9CRnQAdRYiFcro1/SO0VMK6yHYU+nYDA9czGlCv7BnPOxaT29BPEevc0TaCcFugiduXAcSgfFHPZ+M0txRhfps0UPhsM9JhmgZxTWYnFBo6rtuFAFZVKVMA9NHOJmKH0/236cbVH1xzTJiY/1Vi/I/zJIsobjXrtnp2WBm65fnc2DtlEzkxn3nOCMOjDHcyMLHET2oPd1Nyq/X5v+nA3JfhSiPkdVY0mKxWMZ3un9vXhvm7mCk0KrciTWRKFVeUlNkqxD1xce4i7wOfe2roZqydxbkBDSCiEo5GThl6gFTn1Fs1FeVWIqrPgdlrg3kMkYECjYGX1aEl5BHMyHYMLC3QJ3tF8HsnNM1vYvq/2CYdBL0FsnvRY0JAIhkABgl3LfZZ6dLXBRLrGgJkmirN45BV0oRURfYuke+ozuqCwMLYWkAW3Cu0ayvi3De2XaVSx/wZNO2fSOu/t83xQ8upMuAOmNo7qBX3UFivNq+eCR2aFAPZQMlmSLR3Spld+3ZiCLIS2wFX6G4oeFzo1M+oHWwWqzXsN56sMDAhsRRV/5WSCBG0ATroI6PMXPUfbWV35gP5Plzsjd2qR6MvHbzAWkFcd+y7r/bicSsWGk3xuLPgIGcYNOM2bfmtPiALbyd1j9gs2M=';const _IH='8cd0b1d8194f9c8d5e1f42ed7f52d4ee10e035e0d47cb002e6634f1578d09952';let _src;

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
