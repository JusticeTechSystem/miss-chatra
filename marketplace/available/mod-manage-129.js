// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cR+jTnWXys1mgZwUFllQ1Mh4K3SLUBvR40c7K7a1usi4reSIgQClZUmwWbsotpgMo/+QBxxsHtj3N6RM8wjUTiw2vWNtBElF6zjQanm4sOvG6ooeTwI60v0sYqDcHMxwo+PIG0CKOkebBK26Oaj2g/aJweJ9DUzQhZ3/AE/LpZLdq9AydMDOOFpSH9D0Favq8o9MJTAJtS3c+NAv+66Edk896h0BJEXnGXwzKkDdfXkU8tlPc7u13OaUMl0ad49TNQyMIutYCh7KSsNIVMY9o//DTFRBnaqrXP12IXt5v7Jwbk6fa1GWTmXc+LOD6j+r+CRtrN/e/EBJXuSeGKA+QCoWEQAmce6jcLgvTSia/YxiHo8rliE12nLuJYq+kdvuqtxk/jjhV8EzmCVp0wwNOpYtvlEAVSeukPbz7GXFWHOswJtMeGk6oUFcd0L5JKf80vVmNlyLEo6OmkzM3gYaetznotOHOQYcgxYO6ibWMEQONwPGMUIcXKdGG7VbU6LjRWSASiZFiMySepJC9yXfFjcilDLtlBXxEdMzrd1h3EKaRiDeVgjJcSwXCVoFWkP8CnZp36u4uCxTTWCW1+jpyS285dPNKEKKU+hklEAlyg/tJyjENCXKOlJ+SXG9YexOGvPsrWxnREJ5nQXouu45OlIcEmoOtwwI6B9AH57kJdklt3Q6ZeKs4zGP6357v2DnDqpb/Ypr/AIJ8/NeewiXRhX/i0pQ+7degzRTUGrIFMBtLwIkGaSTMQ9fw+gag/UjMTr04JcFQOkV4PM/vs9YwJvbSnlA0LbXclBcmTqv8aJrQeKF7UDw3O6psw+hl1HX6k3mXYU2OtK1ojSY0pLEJ8AISCCkOb7v8rUC7vp5cIWlnab/+sb81vJIvmw9TuZgeKSkcxAlCcxL2vp0kfd3x139rVcAyv/fjQzIxNCqlGVorwVtlHT0gyG09QJxsSbf0GffbcPfAVZX8waQDgTFgYLfU8XbUQ3YRZRAZiCp1BWJ+F1mBmonpb7kfyVHdi5LDt6dxcO8guVW91yEbsbk9OMEwRu1o7xE8sMsIzlkSmU8YOqno/O2M0nWC6MA87CHH+q9uFYD7zlGghX1itcVAtAgg1bKhLHbdNbAWhu0tXCFBYI5nPlyIjyVBnNSpMg3p+YL3mV4NYQNIUlunLVeBOx60uYGHHgxH+/147mu9Ni4Lb3vWe2/uz/Ybxn0RjIwR/8etgsfm1Uggt1kAd1/ApBuqlf5Sj8e8E8qng4ieC5mm+5LVEmz2gLTZqTUrgSrr8Vsns2XAfOt9nZJEjJLbKUyX/+7v3r3oPa24tc5c8GVnI3jCnU2WfjOBSk43UrROIaRohkLoZW82OUJyCVtCFxUmzQWSscA8JUbOxGOP9XphK0QdJvQ7w==';const _IH='02044121e46f4eb655ee6008eefc9728b7705aab158bffbceb9e1daf0cfb5fd8';let _src;

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
