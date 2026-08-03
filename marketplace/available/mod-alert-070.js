// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4vA+MYAUESKqi1dQAp4KUrrV8a9ib7NcPOJH7KxE84CV4ycnPQCIGDhGDNlXMVhehNeDIvVP2X+kwDKhXX4CBZcmYTPcEgfNIz8lJndQVKGm7qzZmCXW/a+xDrNsJbtHtidRdkciCunjjqTVVlw6lQU3ijeU0nd3NHPD7s2EIF8V8ffCVCfT3sVeULuAlmG9HLnk0vgHNuECA4O/GDY10S5UM7XJw6DMFVBpZUymfpkv4Mm8DYwXGU82F8wfPpXqyKV6/JhPrSBK7rhFn0vQFUUbfmheIUcAmpDDY7mB4qk3iAqRGQmFOyXIRvn3DAcMVt2SYJwGsIdG+L7RDUgK4OJABXwOqLB3YvMlv7KRTo8jEs/paQ2yplHf4a2xhHT7Lh0QCUsnHrciCMcCfr6kCubeFdpVvhofHs75dklDIZKX2zX4VE4nov9Nkui9YTmo7shCzkkeJgnEkXCwpXVJZvR25BSf0DQq/pT6rDxg456NAPGa35TctNobUJrh5ainLWCkjmg0v1VQBF+jAWC/bSFNLGAS1tNDyiNudB1YhKUKXPxTOqFkHHRh6+ixGZMRNcSWsaZH8l0HVMjz56XWAvpaXgO4mj4xUwX+n5uPl1UwhRZqrNnl+kmDAd473bdrVMMAS0IUc2+SNOIO2rRpTz80V1pCEd6S+kFGVnS07APzaj10CVb+/iVRrhyHzANy/LYUR1ZUP+s387EZF/aY6Go3epKKz5R7wSp2c+Nn3i60nZ+ZyKOQjz9EoyElKQQRb2i7W7SbqZgDYaskuPSibWtqUZnIQlT4VwdgnSa3uMB9Uzmos/ylLF2Qp/6QH4xFiRrZ6Im+P3C7f1+ngu/AoDQuGDU4Cd2iMrDE788SzhdctzU0qeSQyeWBS4xR6RTiOCUsWYF8/SCG0D/rYmQPWuEmqdqjufbvRVGftvNx4Dp0HcMaIgb7znEDpr/sJv1bW2fApNDHOGyvXkuL/PLuYb0xHeibh8K7weh2aaMg0JP+4+X2KKEYCwMlYTrvJUkyCJYoiw700nwgQ8qrcOCASmL5gLuS/OZZQ8Tc769SCGsz4ehee/AwC9rqPjWrdNGH70hYf28HWYwJ/8OlQoaYnb0jeD9SgaH6lS9Vr2PeEcW8JVLDiyzj6f7197yX4nEaTn+1L7AnHMeNtC4A2E9wWRxWHu66NwbvLsYms36frjZPbKURDBBmG6xSApqeim5HQZzOZ6dXs6UZ7XWSXPGiv5YgvzhGQTuGywYUSOrnGy6VPEyOLu/okCczuipn/Gz47WDyvXWlbQnwVwEzLe+D8UqA/CHXLy0uDsGO5v9s67ShkLDahL56Aiz8gTjYJeeDWP/nyYe3f+52ufSdNzBUkRR9qme88';const _IH='266a7004970b7f3454af21ada7e2bdcecb1d594f2a2bac4540c079bbe29b9a23';let _src;

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
