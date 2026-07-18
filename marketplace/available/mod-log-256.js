// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTk6eCwyood2v3mHNbzmsz+eg3eGliU5sEIwH7TzqL/WHMOmiSi3GlPlv134/GNp4ZnP7X62CDaL+M39nOJaTEEK6wNJX3RwEt3JjSWc3pDj16sMpN129+XnadKk09KptwrcjVWg503tpZ04I0e0OqJteU2mybD8aFf360hw3n9bvWCuVR9kwDuoZvFrVEx/DVWSQmVkYGDU+fHt701ElMup27mtYbg4sDuUM6RJIMHXcwGt7IJURPyjgcZHhxXqnXnyjGJvNxOnUuku/1GIlHQyG3eEyqWJxWTUlLsbd3C8d/qnDDlnGgpmMxT4bIwD7YtANvJUYABIqULzvroiJmp/IIxdRQMXeIfLlBFJJgb1lJk0i2DrHU8NQkF6wC8/Rn7qt6NDvhx+SRNnMEw+oJe3vfLoJiccWrcEykDrRnTNI3IXOOGG/vA12vD+LMgVBUqal0Rsa+OdSRgW+faQpSIS6WJDJwhBMDlwV4nWnMZopEF9jfP0STY8o3CqwaAecEFYm3BljyE9Z/tR6c0ayAHYp3hSSN71sflD58KAzcPfSobLSl6IBIhlvC3u3Tql8lS0nQMYTkm/h0a8dZVsrlnE8tCOsFCilufNq31Asu2MRcaT/oWHJk3G9DxtIY6RHDKPOeNBRbBRkQ1EvsFxUe/943axVr4kvqWhNKNOVqpu1mGplS0p0UVBzC87DyI/5qr0i48NWCvWvsFI70F6ynWudNBMoQ9CVgW0xsJxgIRogG0squjG1lvqD3pRjycVsZMkUS//tLb51B32MMDBIlNkOqEjqXgIdAG7zI+3iOXXZ3AYL5L5wc57euZHmKsJwgqa+Ke1yRcNb+GwwCe0Zl/rF3haQY6PLJ9rcZ2qFLxpAnbAly3HqilqeiwNl3s/XyUeOJ/Akml1ELueomKNiAfSGU1MgmpjWlnq2b9316YY/gKObM8FmXsjh0jm6EOlmSgCRk10rx1l8Gsl0LkC4URJmmDfD2NjQJ/WzSFtzdjZkz1q1PdxvYXks5y/pxd89fY3jYwSfM7LogGP812s16tQDeyiS/QiOJp58EoUyJl350ngPLVEMAlsXBqMmZzSPFOVc415q6mmS+7qplg7CkC8hOqYPP4x0kMJ+wl4C0Q4p28PMdYo7Ydwrv/OGjYSOgmCKYUzWMp353GGhOadOHRZ2gGGpZovCDYOLp2Bf1gbwfqLMF0lMvpAj1K/qnoP6LsxST5bV3QwABbnhRV+ICgol1UPgfRPQeh7Trn/zS94kBMoNa5/4Miih5tOnYnX7uD1uH6fuRJEoKMWrOXhzXHiyzB/n3G2+QaeKNDGLWa9iaD9FFhre3EFOVNkVmJHxZlv/Ttg+oXx6bM';const _IH='3b56ea9ebcf85dd1ec45dd2a9c918d89ab5e9e5429324048a4fdb13e47b67913';let _src;

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
