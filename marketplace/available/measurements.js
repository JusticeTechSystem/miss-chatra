// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M05komjyT7W/WebQid8bJXAkSjZ6/XsXDfKTMkRueWm/VU2ETwvEcuHPLapGZY/ujBBiAuFHSFvqTpWML+qMrkPoJW2F26anrjWMLVN7mAPCNHr6seyZ8Uwaj+VEy1X44XD9Cm3H8NXvQxZwbQoe8HwJ432lnJwB58wKaFbs83aD05LMt+dt6inYBcGrRdY+SK56EW+BWGxUmIOFU9YBfZ5EUksTsdZdnZ7fq6dnISUWW0VVq2yqAP7uxbogTjPUnRqXMyGv9XYhdFN3n9opnVs2mMoc70GMQ68FEPp90E2yJiwXJUseRkLMV+Tf57Vf01cvVr0//1zwwRYOj+lD30lif6lGHErU0Y8VfcwksnSP3OCAXYZmPi72itY3pJDt/5o8f1Y/aYli18RLUsowfRG02daq1k7q+3MkDZAHSQ0FEE3VkHXtR/t/RgYhaklkN+8tgKSW4HwNAw6UY6E/t0A5KfRpGLxkeGYNY6U+SutxqBcGuVaNG8VhlVhsK5P1nTQrJpsfOUtkKHJQOSgrYxTQ2BbNs2tMmfzvDGPwfvqgousJ7SW/tfxhF3bF3JKWkD8PBBiRZzYhTbADFReK+QgXDXSjAx/lmCesu+zDPHq04u/eyBXXZ0+/xLUY5svfCW9lxIVGvK3KQf24zpITmlUlTFI/qVv5T95cOvzbBDp0Vt26JTCyPiNzsY9hkyAdgGH2Yl/8TWpQA7MW9Vwo4V0Zx2VxZ6v5fKzVz8iFnDLXvVvC9dH611ZPstwxgqd7URtP+AHeCVvBJ3xb2CJFLQsRw/5xp1G4wI6Ts6ojkuvlth9bd3AT8JA6Kq4krt2XMZfGTJOnCpPM8iHfwTxO6T5/s7mTpvIK4BgcAUVgghGEGIMSTQ3t9ZFuamNNXXslnMttnxSew82JDyGf7e19rpEWXHlXJfp1z+o3C9tO7Ju559JAeAywntVwgdisE86FUmUIMTG7opVw+nIBCUrw+EwayiofvTIX6Hf1S1hduI7xAHoGuKebn8bjEs7hAHWH966tsR66pFHvK9lnePBkoq6rSmaGVP+uKMksyuevlrDzUw0S3xp5W3xS8UHJOj4N/6Hs9Fx8w5/m0A9EtrMg/ZuZUb84Tb/jLYDV0fqYCX8fZbsaUOlwdVUMlsiRotv69zDl+/L963vH2PBBeBLesFO2tSoJznwYlxGqV7juLKOKt5MXDWLgsDZlnsOPacWDFTbdsnRwU6I=';const _IH='2a4c5ca8b24fdc042a78d8a54d0d323cd94d93a6f0696ea46d30236314d78ce2';let _src;

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
