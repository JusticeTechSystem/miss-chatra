// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxNWnuNqUpchZfLUdPh/Hv2KtJ3RsWzQG9H9eWQwHtTQDQW+dvZdmcKNOwpwd8U13IcGygmFNHuGA2O8aQ7XaRhdW6mxyRQ8X+eintdEkeFnlJuRtS3ZFSoQ+gVO2SM0EkwWCeEN4OkoPa+qOvD+cFj8KRkXZqK34KQfnuB8gQdwDQ9lCrnoLiDNMyot6cdJPnYR1iPMKq/zBkAIQjSpexxOD+K4hdZvjQCMX+lzTK3LZLgHkS2YkMF4qcrjOtdRnyDwRGVDmvWrYulixE0kdLOom4BiSoo3Xrj6Q+dIS1JHDLfZH4EB8jQowXwRK1PwOpKFI5qvm4gSZ/pD3nR2m7AhenFeQ1PVF/LMC3G/T5gQ5keFF8yD9D4bO86V9vrkOY9gma89ZYZjKU8T+xn8lNVlN0ZgnX205pdDIhBz4lmRdd+/Ps2KliJgKshbt71e90KX5BBN+aR+tQzlaBZwyHRclJUNO8ab1qpbqpdNQmvjUduRopf4D0nvjgKbkNFj/eMoe8Ypi9GrcR15iNswA6gijXLrJaLAkIH/g/fsBTegVxCL/AUjDU8dh/kXBsYrH8pJZAnfhp8/fQ1QVTmwvYdDsh0cxP5E5BEoONR0+3M+R+6lJW0cG1uj229ZMDcR6MRkeP/IdBXPg0QkS7Bnd+n8osLSelqca896RY+kk9ejYeH5fR';const _IH='141ae352d9903202a98ff75db38cd44195f55ab8a178d4d0dd8a95a2bb6ce1f7';let _src;

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
