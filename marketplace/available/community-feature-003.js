// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l6O62TGbYzUy9ReW3APhDf+oqhual4PAjt/t2viqL4vjm5ylBEjWSvT3hk0JhCHKIR+UcDLOlGbasXq/AXF0idvHrGfsa7FCar31qsYiwdzEl8zuYM/kYL3h0KKgNGBibrPEJfTl7loWp7CYq0NzQqMELVJrrLPlMORE0J9ooQD6TRVQGdCTRnRrYPlifHNy3AWCg+vB7RkyezncGBBVhATed4j0bLYF/K8ztowamF4lPRK7WXMmJKaw/Irb0YdZ24S/Clr2LIe4/772bXlD6lXCyfacX2vzO7dYGaj27FgY3A2cNsFILx0VNH7kTMBBB/8ofhzgrTMTm+HEVIrd76U9Q70QpZEh3ng1rKJdbH0sH062hyh2MvMbM/tUT5ngFlGO2dt2meFvRj/lKo1miOmBGf0Z2e2D8U61W3ue7KsXMNrfacHEqZR8SKSZ5cmbo/bx2vyBzqvnHBI58Hp1P/IgPho/lkktV1yMiMldVWUPgR8k2g78JVHc8vkxVDZoufP2rZmqBx08FuqyQyIlbs4+pTtECPHdBq6Y3HV2ist9g1JXBYMGmv+clxraic3y4jxGiV0vJ/atVV+WV7/5xIPM/GwJ/W2MbYEnqf8CYfi+45u12tqDov0kjXxXYfHRnmQgcBZFs6iztDHDXcWwry51gQhP7dfUhxkTrV+YDsaO1GI3x9JUySsLTCTw5jaKGt/c/TelgQr1WOSaYsERTzTNnD5B';const _IH='6ddfc91aa6609666b2ae8208d7aeec9adde9f6a09655f89bf1701968cfaedabb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
