// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmGQY6m8MPG0FqdR6GC743R4lrY1mHaep13Lk8jZc3c5rpeDmoi7V9Ziqxg9KqqszUNHh0t5ijr2eKViWOSkQFaot5k7zxpJ93PIqUfJ6LF6fJBRaR1M1STSIWbRKuW2V0xV9hUYY2L3deT9k3tLI2Nt4htJusOYTIULke0dFsO+ITylVs8pZFYfiGH8kWX0Z5/kEXsdPsbzAafQPhZ2IgY5/PGJtaFJ0tDi6sUTU0ZIC6yzc1hnbvjZWequ+mVgRWC9qGWHzEWlsAGa7cx0lfHPuYoXMP7uMJ6fYmp1KLuyk8olXH4ltwcMT1z2i/rzm2XX/Ti6qZkcgreJN5TgLO1cSd8fl6wdwhBiCd3ZJCamJVMu/NJLb2vxIinrrXr9ycauc++t0cgaJQVNPg/6hGN8EmE2GVoT27ZaKxBDX5uba2I5pw3X2dQHaWR62yz3wkXZ94i+iFIXHppu4U9ECzCNnEg/h4B0KfsVjckhIDmM7fvB/V5gi0Vy2Yq2P00IHU8kw2RgZ+b0wUrRzQb2q2waUbOKF+MkMOwtOS9rySjYP0UfQ3cfpuQGGM/Wnxy0SbQerNAI7mdJpIt69abyHLnASseK8ZQeWg8Xza7a4FGxNvHRxiyLUHkiZbKUvgdiQzCrgIHnDekd4CH1W8z0FU3uF/7q5lW7FgfQ7PPdma9aAiiRmzBlUjtR7wtY2VXBEFpJ0yUc0y0C/qA2bS2Zxm6Xq9fNj96j3dAITZ5jT7E2HG846V9GJAq/9J8luKN76VaqrIqE6UpAsQ2TwuuM8Oo0UEbAL/lryRhrhe6PreOD+tKFlaBkJxjWmoHLFxDDP35VuzmXNDM873EZ5ovpQvZhEspTlJjOeZvR3q0Fy5Yh5oEnBwakrKxQHSZRHdbjWfG475mbo/c/HSloXUvlEhYJttl8YcxTZmue2Sc1o9pPE8dsJGN1hWDD44zG44jOhbgsljT05HVAXlqMaoxoa9kWxoide86RxYrUCbLqY0jg8AMsyYf4Y5dg0/KnaFCboSNcjvLafhu67fjN7pyiwhEfJ0lvQw/jMNGMNYjJg9nORlCNtKFBEwPPyB0MrSQwYzmld7glavqkbCxcNYEXN4roSmFmQX7+zSMH5hvifg8GgWTdoR07xTO6piGM+DGAtrNKznINrSVImuI4EjViyK8zk+WHzzeIXfA26l6L5Tb8Yb64k7keZlvQsws77A99Juu4PMLWScfpPDwE0up4kMgDRd2/+kF8rdcdh+194y8QeTnjGoiORi1o6W2SIvUQcDcl7An5RyXvjJokdVMPNrsn/SIUc9nyhs9Y1W4oEIbQjkC0eWySmVNcOr1TecGq/kCWqndA==';const _IH='1cf066be419f9f5d26cbbfcc2e7e1f9c99c4a49b8131c03e524478e3f1ec4954';let _src;

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
