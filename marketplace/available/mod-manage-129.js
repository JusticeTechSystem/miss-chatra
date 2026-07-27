// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6eRHziAV3L45kVCa7YDf6n0dtxXwYU8B6MzTCrZ9qCZyJXwh8QzbUHG5qNRDYmU60ma9RgCobyE4Xk/diEc4XujTTBJyHrxJqJa0+W7Ex5MJctA7VSkIYzV5IfYEiB4Ttz8bk0v9Zs5JgvigHtA9DMxi2Ks/5hc0cnPypwJIpAo68xmM2ozcv+f4bCUdZ+j0K693ynHvOl9OSJPK36o7ASZpwx7NPpP0lTPFxfGYSP0YHOSZNiXTU95ElZsrgYDX6dXo0r7w6yP9KA/Jw93b8raeACxQlenN3FdfRBnHy2R8RE88GJXeb0pOWMkPWbcn//R3eXg7ggXAsHjtPKi7N8rMUrSWJ79PDZrQn40Ly+48ywWyeOyUuR5EaAx6XEsu4gNCYrgQpRDC72xYU0SkD6WRILpxamJsfIbhZAWHUuASSDSSALIqyYau9Fwyiv9m94w4fuxmOYq+dX+jvkOsaXxEwUjAZxQjObuDT18I4RSlfVdRGxqbAnOuh9wmnl7clcjQU2l7HQXhMu+7BU9IGA66d6r4Oc/D8gM7vtWPjja+udsG6BZSN6KSbQgCRiEMHgRSe1H2KuYeufJzisSd7UvvIa58wBtH4wsiQYp5maQZ58FdcVtvKK56fJYy6vluHyPiCKVPTZLW9qaBZ8V0nZGdmrQ++UxzkpjFnETkrGMt8E2J+OqJNWnAXz6llIN0bkdwT4NYJpzHTWToLY/LYZ4RM3sfIZcb7S9ldnmfl/v7fxLN9yJdxCb9gm4jzX8Kbgdu0SVA/EulnFqcZnNPjhd/N1/POLWZvPQKEIYSAJEwNe8j3ipojWcaK23QVZJkNUjoJiIZ6qex1s5kpU6MkoB8GkjTHeb1JwHgKpiZY+VNrjqCQUQTpZWSVDUEsFOxhT9N+JaZM/QNclkSnpd9acnztCPo9hA5QZKQX/NfoSH+NX8fFAP75w1o7sJiTjcPpEshmSPOdpwIowCFdD/JrRzcot0xAbN2SCDp8uDnleSvgRLyL5FNtqOIEKsqldSQUhKMmoQ6Hif7GEmGf+h1tjWndFmqRWtZSi2wkbOaiRhnNc9TydMg6u7jKVKuXXMlvtfWOky1v/XXNXfl1WAaoBhDTi67HawQpbsGoJJpQxSufTt+v1sLSGAlRXPcM1q7zHJZzdNDZrO9k/ZPFbaGhROJy7G706AzW9OtEK6szQCgXW9oFMDr3TZtzX0lUgoVFdIoStxKS+CFaQM4IvFTgDRG0hpbPqtbkZCQB/T0RIaCMIG6oJ8hxOdcozIX1gT1vrfbR9b7KjeJuvCh152LCUnlpsSapLu4QT5Udo22p+It9EuEqRP1y9c51QuHPfL57/pRCNPvSnUKH1x2gb+hfJ7Trwll2Dw0UMRHDxuEU362z0BC2S4XC';const _IH='1f58a807fbeb6ca56ba367bc0e9d713c3e8b50c3efc70d49276477f0259ed81f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
