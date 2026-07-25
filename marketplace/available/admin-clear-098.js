// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgk/Ege9SYBMgSmQoiGhcOv9jeU2/075VLrktcrnVsYE6FKUKbq/XozA6uJVI4zN4US9kKqeSTlH/IZSTCQCuU4UJADWBupvdzk/2cNRzmbhZKbjuaA4Ih4Qyk5/rsoVRA3wXEpzv+Srs8yU2mbpsqUhb1/nY+VBbI2fuwI5TIUQZ/lFcHHDya0SbGZKVpQuA0jOiF0B88wAp4+udILbktssTh3qQ+trarFkry113CE4uqjip6xoop5gdW3RRUBSfzX+VV0iUuNXzqZQNHsSZCChoUlYKH9Ej1I8o9luc8NlckFD1ky4il4EExHrRNf0GYvi84WsB1Qqs0pQZTufcVYeV4ci9v3Fy9guwiQCmEea8162ydDfWG+y+DDLRfZwFoU28L3D/fAO+TzUZ+R7lHQtQDHQUUWDpSWlxhXLBRw+Kww2sdcdaEvf0YOYA+j3zrxBYjwt9HuGy7mKDgXqayNz89sOUg1yufGel8MWYSVddcfqJ/OoocFiVllLYsO/QQnyty7IeIv/1LhGhBY4PrRUt0liIHG/gU1CkPOOODSk0r/fczSIfqEI7tfZgyAQkigJLGRDLCmwdMIiLgg5pzreM6Hv1q0L/a+5S6twtf72ssqwY3zzk9lnR4DLZQpfFnK+0Y5Ji1y9n7DLCwkt/ITFAIwYclE4MOlVwu5MN8c3lMHWKc3DlxDdJo3RH2bMUiE1kxRSH2BDMq1T/DU07kavphYdH+6ASGmOZohmh+hVId1QAjxLAU9OompWw9Y5qlLghKK4ne/9wC5Ji1B3BQhhR+U7Itj0q+dPGkNvvoj6Ab3/D6O2K1ofUlSkt1HlVYLHqs+efCWNCN3ypSxcJUcM/Qrut6dgbsPkRJ2jk5AnidnV1xsEkDCIiyN9AXKDukbOD9NOgeRVA245FL0bXV7QodnaEltWd32n5FSPkTAbDSYdwtvUyLSmZTMBXvGTovpR7J0d/X+cVMh6ZEXt5jOf3KNL4io9cMx5HiP8PXTWPL8F86iQ==';const _IH='0946dc97bec98013687efab16e6d27e1548578353b0d41242e2f7c042a513b74';let _src;

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
