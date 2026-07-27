// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQozsQyIP6m/M2JSMumbxJ6Xq92iSy8qAwmH0l+kaYBLdqrcSclRuAVtOOAXlGP5fqjaauwHIIoEmgsWhO/ntRq5CGeqgB2zvHk9Eyeg3RRuhn/SrACdQPlnxpwQVQZbxfMn0CzDJJhKdVnlDqv3fDLxIml0U4W7GhOIjtiVz9I7gpT4xV9aaKuJgZvtOjU2k/DkC7SeZifonnA8F04NpUXlpKAfmamwK36imGSjnUz8bVMVGRZYJpxhXSo9+dcQ2EnMOnr+kc57z5Jgc8/4YJGzc0qnHK8SkT/9Vpa4chBgw9xRuRd0oTM/fjx/YV4SRvvVdgzGIZ/SEuFb3zxkZfTWcWykLuIGMHFHBOOffML/80rPSgHnD5TeTC+9Gi964igurmCKcP3IxeKlpdehCwWLmOxsYUZgNfhXzAFlXFFrra3b+NX1CjrVjpY7H+apduWusf/z9A/sADXb+1PafwYnspGcEQE8a+NjEEXc687tqPYArF59ERpGMLYrrB07UKDQCCGLe/bzzyG1n/mtchTVEYklNql3FVJ6dpXwKrLi7vZ2t/2cTgDsoHTYeGFT5JXc5m60BoYovDSSSn5LThG2opfBtkKN5CVhgx2RtunDr3k+Nira1MD5NjE6mcUoTpX2WfAx2DGhkmT7+LFOjSOqNkruuZfxqxbo4nPwL5Bltl8c2d2GtfqhhIfovWd4NjgQL/9CzFDuvmEWobrvVtB8BBiGLZ2ih0e/YaO2OfXX8tQL9SUlA==';const _IH='eb6b770bcf6584387f24855ec0b84947c6aa612f6031a9f1d2f8ab1aaa9c0e39';let _src;

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
