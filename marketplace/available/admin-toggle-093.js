// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzQ7TNX90ImirT2Zp5w8XkOHcPi4aCyCXdvAO+7LaE1Gc3LnE+9PK3L9dycl+qUImPFwlA09eLD507QfTxECAyZiTJQ/q4ZNS5509Jr0hePXOGH+O6oppfaklPXoKOnXfR+idFdz9FDzRdJOGxUciLNHGmXsgAVq0Zt/wJs2TVGed5d1rExlE5ye8m9GROxd3YqThpF/fWUlChkQNfmpID0i5yDUm92hhoNTfiHyViba/EQPTHtwHOcW84yBkKONRsIqYO0JdoR5G3ALO0nYAjM3jOdYnjoRl3NLEAWIDPKtLCOy4sH6KZ3EZH/GMARk3ZIqiZ9r8kF5066X4DcIZuIGSbrIaJTLVLqNhRwwItCFpfRuKmWvGPT/O3wkL+dZHXDT/NC36oBwTrhxkcPctQk/IMIz946jqIyXjZIO5J0sEx7I3mUHoDArta2Yy7wU4VXx0tcMqA3BzXdedG6Jr4fX5AbtPJ0TV+Afgu3QCqKCSpcpxSS2LBYs/6LJL9oLdzyJlI2nOZVjN3MEmpneUX/f6B21yESm7ck4yNNDGYzli83/VvVDIHMlLzTQbEmdWPNwGlCv6b21HrZ+jr5wtfFGyVtUIlmPN7XJTCspqUBwM7hwmMQ5hzlZiOVOFcl8bG5shlYSBIBS99EDIdpyxb0sIS2x/S5yYJ4WnnzXrNNGXr29addoRVvJJhEoGd8xQ73ulufzFJ1UAZsv4T6w1jqndagbruZ5jEjBDcJMto5bDQq4r3pG978hI710HOIfHInpx1AtO4Vc6P9BaqXbUHwTvKTjwbE1TibYVVZ0HPTAICzjoq5iaqXNwR/WrfWSBsYk+ikUCXAxaPIAYlFLPrC7cxzqu/k7sawkF7cVczmhCJ/LcfPMU0PzcV99mS8nZGCcBUa+x+LWhpdlroIU8pkSkgBlNLjKdBhGTHgU1LMjpaZL5g9ZWZtUv64hAy+bG39uNktrE9weGxcDmAHiKcukibLFQAXeA5RhRZpaA5n6X0RkwXZ/wa0ebvzyI=';const _IH='9197a9ed35193662c9df0e24f5b977d7b8dd1633479ecaa2f6ce152c9bff9782';let _src;

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
