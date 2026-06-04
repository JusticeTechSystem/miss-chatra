// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jsDbqXCAWatcLg//byUDQCVudBvvzYUtOjlOqM3TuG7bCos3lhaITA5Vb4v5NqV4jRTBGwMWS+wcVK9FmpkLXWIZw9jMup3irugFlFRwicce8+i6PVWLdH2iSlrB4VFQD1pujaBb9ebTll1NhyKJyjs+ImFvtu7gLQcPjdMrgtprMDI8m2hZAJUEwIuR0YB0FCzPVNjshKMzFgiiA5h1dfi8Ag6/KP2IuGgq5/TA+qUl3Bn3JOP8xeO4IMh5lfmscDYjCLg8WsPhdY1YyNYvtJIDTJvo+Ht5CbwrWoSqgoEgzLfsR0zmD6snqVr4KbMFBKy8BN0fkfJFbQrjyoRZaj6J4aHt3kpTIqFiElH4VpCHiywIfD+qLPuDmeAcAO+rmEY1QWNtaHheUGzYF1TSEFwymXkZgrmICSsdr06YbGC/XJqL1yPPsdgPgfgFJtCnz6M4AiaBONKDXtO/r6vnJO6CGTvdoVBU8I+hknbqkvxwRAKIoo06JNt3DrmRlVufIGrz2hwvaPwpyyrXtxlbmNkA7qHFQdgYcaN+CPzVwfvS2ypNPq3MVp4SQJsnNkVOROWncNEgEp/d81KJWtbLkLh37MOkWVhGUCdPpTZXRzCEQ21RGjiH8GqO8Ptq8mjyQRqE16bB8n7wLvFrtqNzS7szDveC2jdpc+g4KpGD8JRgXUh6frdv7ciVEdteiMi/2hK+gFCNK8FDVsMqk/Oxl0yBkxNx4YM1FMbGZyw=';const _IH='53c9f5cba34defa0d34046bbc8a7fe2f3a0f9f7b038192754c062485234c32c5';let _src;

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
