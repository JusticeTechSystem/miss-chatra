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
  const _b64='T0JGdjSiNSeWRArUL+md6TooyZ9K+KPit7GENjpOlPdjBZIK8tsr6ZAskKh+ZB0teWFcu5W2KbKf0b/GaluLNvsTKCsC0qpWnx+qwhv6Yugs7PQbIzfKerV83MkD9/VnCObB+kHE9j+cvUa1/DSsj6tT1eMIuQdoqcY9Dwypkqr1txsAY2nDWrIhpygz+oBBOgPoPQiCl+M7he8G+c6Dc4NIk3lA2e7vLSDBYAxZSyepKtkI6AJGqAf/0RhNLxX80UWIvaCoOW4ImnvwwJinMr1Qj3grVi8GflRh+eysch68M20+mz1hcCeTV3dAw/xUmBN35E1Ya7kUuA9O48CbfMiJngRNoqVWWMc27tTm7aaj6Tj01DRZ0GXdaxQibRlh2Tve9mpKcZLg/PSk7YGqyt3hDsJ+KFcszu1jWCbMm/mwP5jr47WtNNiTO+TqTRvzBq4kPd5uyBUt77G5z8wcM1xePr+8/TS8DzVYOpdBp8zVoNUExvlFS3ZLH6SxwgnFrtPn+k4w2RKEcmYnsYmH7Lf1vCcXEn8BcYmWxxinkypg3Kek0YGCflA+R1d0v7VcL/A4l2rXBZV2eD/m/EL5XJjyRlLOzuNAx8NX3GrscmQroDcj8/G2mYU0n7LYNHe9wCaLjxYxLCSL1COmsK9okX2W7abheeo0J2SOfRgtOZCXj5lCOEDSEW+LW1KU7Oz5KQF9p6Vjm2VLbOI9eGOO1OQAWExAbdBSYGLeecyH6G9nEx5llxrFjHqRVVbTZetA0zaBSyCKvzLPJ5bDp3m27Vi49RX/yYi7/jl+FJ8Ta21ws5LUyZRYhgFFOVJNQ8TNwI3wZgGL8HW8ad9fAvNIWJXLmMS5G23hA2IhK8Ikf6Bdz7/H5l0h/FQ6qc5iwLfPuELIAXXw40rfJF11cn/vcDG4ONh3jkzc7Jj7t9+DdvJEDCm1gMaj+DFvXCbl657lDcUJwD03oAoL0dtI/q1kD6FZTRTZZYiCAYTavEx5PzGx';const _IH='fd079a8d931caa5ac204b33c4b00389afd7801edb7e6973dd783875fd9afb153';let _src;

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
