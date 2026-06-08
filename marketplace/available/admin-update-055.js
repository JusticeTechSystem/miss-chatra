// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XkMAZL8UfL8qFJWfqCO67Ra1Xz3jPz2yq3tJQI4BxdSrLokIjg7ZpV0wtV9UhmWAbXemGTmBwwOn7g9AIQIpc7gLFqGRWBVq/VFRDcLWwGLEtZaBZRzKiImzIIW8rwM/6eH5ygKOFK69kTrOmF5MScKtNLySoOlWRHHJVFoyBMTnpb4CqetZPPREUvv1fpt91jPzloEp2ENuuMZz6YuSK7gVJSmqC8+Kdf1V4q/3a7HWydNIsqjqMzsZ1kfraBhlooL9+YvQ8yPuz/fPvNAhxlmjIUD9c6O4uCrxYWGTk7y80eoC7QTr8H0zzswylk1ClIQk9y3FsMhG8zB0venmZ+4if7DzlMZXEmHytSodXbDrAjmYaR6WKi+YeCdEGQRo/qA+QxRS/7GChqXEqlJwmaQnERyEkX/BJM7k7TmOBXHzv2tHf4oCrJvOzwZ0gGVvpRwtOqYFTdHdOZfoPKzh3yx0TqPNOELr9xvpYOQaHoajkTrJzPcXCMMXZhRqDotsxTZdv9E+FuJ/YxW8oRE9ywxNOwdt5E68L7NqLiH9EitzErN+KyNBhDfFGKHoYr2tlZy0Xko7vdPZby6FG9u5Vwzp2B8WLdgbBr/wcaubt0QOFPFo7EF7PmFxmm/xQHdam59+f+GjQug4L2srU8fZFdbTWRCXJ1CYV7vNutwkfyHz8mgA6urWdZVCdXAH0vJSq2pvCpgTxQyPDvbprqqt4tRjpj4FOvmRWOb4PCqufGJyORZEepEmdcpglbhiHg92JNhhqOKfFQqhXuoE8WwCNZ3gWeK5sE4EYGe7npQZRmt5VdV5ktGa+0wV1tn063VCTxyAZmCy4V+xk62fubnInY9NDmD55BA85aCFhRpBtQBIp5XvHXzYzWzpcyfJ8DB+TfUqz8iDAMkuYyA3dwC6wADbbujOyMlx37pv/xMkd60srqd3kIGj/HHdp2GvxRB12FXlhCqXCAlPKzHGLym6v1SBGSIAiF8Ri98ZLhCsrtYebxmaExZUCtgeTlU4';const _IH='9381d3a58be2c06c45df04b7cd956f216edc080d31dd3ef808ef6693dd5e2e21';let _src;

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
