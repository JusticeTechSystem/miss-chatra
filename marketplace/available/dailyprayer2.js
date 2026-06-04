// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pFVoZqn6wW/1JL0KkwePg2MwUFPbQ8JHVMJ3UrajYZLUpeqFYzgNqa+G4lRAhu+Iu5Nt1qGe43FILbTHQko+R0von1RyUBZgo1OblmH9RZraeXN10aNuNH7GTcXahV5ruwooW+tr1+pLtz3Oy2+NQvz17xDNA6NfCA2DFmvPKBh2JgB97KzFB+zlWVT6v+At4eXoLoWTVIuFkemkTvmkT0QhFz4Ez3jnPnrLVyO491I+h4gDM3TfcCqCat8OJ+vzCuYOGWbLgeSe0uQIgD9QnvRYd1nJWL4keP9Bm8x02I4kq/BRbw5wygYl8MMrn7BZurQyJLUNzz1m6FffxatBRrGIlu6UETSbtfydzPMmMLF9bhZXffcebeF/VMRVHLE5ceVPzriNp7lyYZBDFo5OZe7G7EY5bXpjmVDiwENfCK51UcE5JbMwztWXNdp4zr5+fBRsfU9WMvD7xVbPmWSQITDyLfyDUxG0r2Psjb6+IEXoWcaGDHCQ3Bq9kZSjxdRJiYpUaVwNGwH7pABhxm+xGbGU/K1VMCX19385nQMp37N8bDML/0xcmlMjiTOrfxKsC4+jfdsYyQRRE6pE4AZCAtAEqVfigDJC9Ym2cZUCz9FbMFtcCkhdHBvuWwBrMO8dT/ajemukVfPF2eV5g3bXE4Osy5wblWzF7hBAU85FURE9XWc/IWrLsMqxnzraVpuLST2V+89k8p7utzUEX66isJzN2TF2N2xMwuoV4z9wfApqnMg+YEIONMe30vIlDGbURUCPU2fpI0j4gi8TGcsAFs7Kfz6RDkyJXL1K9BeBDtQA8n+b8HYtp8tKkpQcfg7cbc7SlshAlRDjCOpFcSfbi2CfjfevGkUYmCIYd/A0woxLaz1lOwULZeaZaF1FkGgFAQ3NN3guNTG3fTHmq3j7Onp9zz2Qezp4AM98XtwL6ouSE5ofAhWQCuatPnK8vWZPqgkmm6AZEOYEemFcozNkbEma0qNB1T7mxQyfU0durdGAW85hpW7xmezMOxqR9sQ9CWzxcezDjWN9CX+dZr9HLt4ZUbYDOIR5UVBGj1C10SO9m1Bini2FMaEyCnM93tugbH6LTp7ynpq4uLddRYG0PdI0DklrCmg1VpU2EPdZTRGSSwpNDtOO1cj6ukIkzRkkah7w404Nywprz4ZbVnAHIHUbqQhnb7a2HERIll8SiRtj4RlwsCF3Z999NOCzn1D5V17SZcMTC3M=';const _IH='167b4ac303735b7eab398245ef3a41954c2666c10cbdea74210919273244b381';let _src;

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
