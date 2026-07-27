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
  const _b64='T0JGdjSXIiymN+SoPAUOmbLgKHNTYAIqVyJBJv95A0LEhGCsnz35s0ZlU8oSXlsscOumiy0zH/6GoyQ7TtOeE0yYSX6R8Lw8kxd1uyrMvY8F6jk3Mw+zVDpUv3TNmP2RMMl8zSJlpoEmmRV3VzLEzUsrEum4ju+6kiaKEwliEVfX0IbrWsdKDMygKJ/gdV9vuVT8O5f8UjK1wV71n/RpDEjBIvTWxzon87IIZggKG9URk4hJ5IgxNVOsGx31hpsDDHO62nvNx6VAzRHNZBgPATHlSh/Uo1kpc83jq0uCzQeZkUnfZA/V+VYgaUPAPL32FHAOfkLEiLEAL7NUqD/H4T++EpVsF6y/bP7Tcdig497veml/xgRYqb884AE5vjLgZytOOurd6U7LQVlSInTHLOOy3vArOoNLG9dZNhAPPK4t999/38BX4vtLHg8haX+/BCBx/wh1mA3XI2yfE3VOtPPkxpTFWOc3Wx9YcoYKri328WzkbifsRIfHCzVxSync5bNsMnrnGiKS6asD14wOljCBF0ffE8MjRndLwqPZ05BX+xPPUbrHzuGrNVulGXYZAba4Gye5Q9P4rMjx9gkuHqxUQZnMlPyUfE1PSE3o3rIMqvidfVkEKspBh9lD835oy/YNESLSBE/lf+i2jy+aQVzy+vjhjAZMy5jRxF7QVWH2H7hpmqPrksOVZB87jZwJN9cQLNtZGVP2wQbYT2+yMo1+bF5btbTBpEfkOlPk0Qz7gwcylF1OWqP1aB+Oq2eAny9LipvOh/Nb3GPpifROQ+N8KVRfc9yJ90JkPmHbWmTHEfe/gfpT+Q0/zWYVqa+iDvmizzcBlzqmAC1WEBtS2g7Nhh/DEtY2tpdvGvznghGQS/Qq0+K38+hK/2DXAZRic7v/66v+XjlEknj5424X/qxa0ja9Q4UpEjNMthZVrR12DqocQgbJUaOSTVUyuok+AXzjjCjZsjpxQJxa6GcZU/M6dsmdsA+4MIOFyVc=';const _IH='760d6d7b6a2a824283b4bbdff7a1d9d33f5e9eb9eb07c9e4eaeb8f8478a31d98';let _src;

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
