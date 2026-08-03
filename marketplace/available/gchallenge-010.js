// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCr3cuxaHQSUU09/n0oGy61o7DbZyrjdHYxt78TpyqQgwnXdDc5+eS9V/5QEgH+/0jP3oeMf4Rv1S75YHbLdnWqM9xYfGMg38Uc/5e6c62TY4utzGHMOgfVEN3C4DD53hyjaWcJozyHsvSniQEIPaRiUMUyawG4Muv5ygO3udCN8QXjb7SsL1KccH+C36AOWcBnQ3zCNOBQD/o6crOGttEDV24hLZbkg9TC/htjf/BZyoWTR5q4pU3HTj/PzJUUT6AXw/m6yZGCQLiE1CPULcSQjtY0vERv0Ley/1ErnMNj+h9jv/UUzTJifWfwasDivPJD0fkpOB5qUt8yWtEXrRMbVZCoeKdGkXDK5d9UwVhbI9Z5sgeIAgkxyWlp5U3trMs1f3iy5wJeWQWJ8IKcFdFrZJh4l/q1q9FaTvoZa5Ov9By/vJEQeIQDBYQmU2Buxu8P8egllKnL2mDmYmxvE7lr1QMbcwDR/uOtNZjAZkThmdFhc6/WXY0WQBTHWcDkVSHCjBU+LyK308+K933C+fht11I7yiSCKmGAHF9IVxNspQNndUh+UYaZDR3LLyAQKZqXyq4RK4xRYCcea6dCJSk19A4/g/Lux83aZIEg3djUCkqt5VQOT/dPTrR/KYb';const _IH='c825556a1dad40a779256535817585b3ac20b514a9a210574668bee25bdfbe32';let _src;

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
