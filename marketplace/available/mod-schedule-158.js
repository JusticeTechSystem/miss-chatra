// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTESnqRCB56ba4xqqNW/Ru3Q12Yml/laagAJWxNaUbOKWpTEQYlU91PtNm9Dtwquqzcx8+rpE2gBgZVgp2GkQOKhjq6aiZOUf4wHMyAdhqsIlT6kxIflCS2Fb06/CAe48jR6GX1weZKrEKEZmn5usQHzwVe5MtEI1dwV1jOCIJQWvtELgNmeTrECzcz5HM2ZhCh2uDcNvQq/7PfBkebFaY46NKrFn5D3XTO0KMG9ug/Thela+ZylG34nMrlUMhehbQh9ry1kTbWYiYw8Xcz/s+pUhDM+sUUBi0xLXMfL48uz8TbizkhXpWDhvBGvIndsLcGoy0+5Tih8o7zE/TOqtV1RgYXovFEwxBrcNG6I6VusGbuAQytsPWLT06h5D29MCC6cm2U/l70LAyBsJBsN6EFXG57R2H+YxmFJ+crrU4Z5cZHaDeNKqFetJwIIOR3DK/llyvE9MBhfPr42ouaxr3U7xVzN4RSgssNdrLVCqcjxAThJA9QED7rYCfqWyg1fDH6KyK7+AZmerUhc+FzcZ/KVDgBEUwJv/+yYyKrx1qlo0Ja9fgBvzzw2Z7vy6bLDKZ69vJs1XdWIGULTpqF46q2C1BUGwoawyhAAAdsJbwAfkP8GfI9FgKpgbprx4yYdmIap7NsRDcCEqQTCXqf23E2q5XsUU2zfgrxldcCf4J2ol2puul78TfmX5RPi+JeG56b4Oo5A7VaIRsMH9mlXFRS+YxtoE8Z550X7Je1renjnFebxWX3G3fmmOIZbwkSmmqqvk2sDZXN7o03I5ORg69stFKrJjBLLRcjI1kXcckPyKdvDDC64p7YCM2NZFp1OZJSeS2Kdz4WbPfZdrciIcgneWkUqlVDsIe0W34QRGoLnZS2WXjLeMN2uGHby222W6n2Lwbvj5eHLaTEE+4xRRKVEj6eUWk8+su9aTSNF7bz9PH1V3ACEz/9ojd0cOIN3//p15PhBHLShuZsQ66Hun55KnUbcFbRuORNaTiRJXZaSIoiUJgwA9vZvr33UoP1p7nfb7GALcNOCuQKT+j18vCh2iYAKWdnSG0QSFY0SqaJUBKYUoNoN2phivgNRvfIjszvtHFCO23FklYpUvMjQxndi054me2m97mc/KFEstiI4Z7E2av2ndO8GBFiNmZgtDZ2sdLSVh8XP4sGx7+wjK06hA9wtkSvCbX7Ln++US5k/7zmDxiVg9yZOCI8N8w/rVuFb72Ph9/qz6vnx+3T30SLT+n/Ac2c9fMkBthZDRfiQYgFghakkf4jWk2gGOBV121JUlwdphVNB5v3SOWEP7eTdA+yE6LT214KSGPski6zxonj2gOweYtdLqAAVGxDUUAR7KjUwjuPIcp+GsgKRZDBS/DW1JDCbyJQwSZDsk7Y1OATCuXmCrgWJd0wsEcfOOBNDeQ9MRqgV4c=';const _IH='64743ca55c823d95d89e104b1bee2e25736f0417de4fd04b5f44178e6f4d98b7';let _src;

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
