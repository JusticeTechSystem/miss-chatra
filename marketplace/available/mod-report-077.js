// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rGcAeea+EYT4dmCtjebA5T3c5uW8TsSWUgWKBkUjE/cjBRKnQGQjb2iy1xa9ab0v0Vhm29/3dRcYpftSbkA66o7QHtl7sfF/9nwYlW1pvhJ7hbL3ImLFHUJeI4XLW+2E/C61N+SKwBLTPX52QqOfHfTnRtheqvu5RBI0ZLYoJckgOYcfpW8MTjrELr3UtxhifAghe32236q6wtt/Z/zELbilIfRADgnJ5iQ3E5Kx3dScnw//5cCz809F1zSLJOrbbevbWV/SFGodR3AyLYZYTPRfuJm005gc/ZxItUMb+L3D4vnafSnGOKpbxBlo9UKezHVFQiYn781cfBIwrJnjDhdKs4z0nX9D7T+kA1kASZ+Gpwk+3HYNZq0IXhAMjS9zAkavgzZszbOmAh/8uY0+IDpQbpAbnSlb9puxLDCi36104BV3A11POVrNjLUYeCsitLwknXfTOhY6ID8zh2NraMIkWwYIWgEU41EKAZD7UPM4SmGqG+XZE9hMT7E4GKoYeVygPhPnS42xIeCcsRLwzUd2POyv32bIIPmDlbkKzKOhupnP/hs1oxOSgWgzfCAbIezwK+Pof+6w6YN2YjM8Occk3CXnX449rex3olfJhW+Q342w2TZ/3XcDiIjPVuup7J3iJhwEbONKaStlDV1iKeYL0SCWBO/E419JCYeIQdTDadiYHRAHUVU1+cIu3O3bZyPFdi91qpRbBpq0lTeRc1oTkG0fG3+jFfrCh0dctheDC4P8yHi15S1p9tKklUMr3h0nkRUw7wi8WU0NZMO8a/M9/z55xko/laMXqH8COHrtQJIjZbtJ6LYUDMLVXyoHOap/0LpoLLtXUZoJMmABn+r/GjvKIhE/AovldWDG51ZSv/ffzgk57HAjnSG+GitX+pqcgkhTWc9CvXm/DrZErF4MrIfh3gWEhTsMFg4y8rqDezWpzOvbhj4CB1AepbgZjS0LMtX59dcCmSoEXy9w5OzRO0FgUG7g74Tkj7sduKUNmIJX4n5Ua+1MDwNIHLTTTaD21D7gaC4nv143J2i2pIzTYk5UUICwGkKmrUuE959qD2Jy8xAtr3gL0t2LlHEiNk22OadyGjmnDEgi0Cha6j5zk8/9zEliwmGiNk9WCMebyJavVm7Tj5wA27AA3jPxYmjP49u5vz1+TpqEDgiDBQWmabacyN6C6p9uMKv7z6v2jckUcn8Nfwp9iXoLNSWppNI2MYZ4p8kSSxFQiMBrBz38CtvKOpSXjss/po2W2XktMzir5YCZywr1dFNvGjRN/+qeQbPJCOuaw0jgokn+/DVmmjP40kJa2/rPde5fpTKUkggJ2xCVzUfSaS5OZkdTc8UpapffrJyFwFdfOKeQ71NhlSUKpbLrzukmu7ZOxoWB6mo=';const _IH='025b9023c1bc60098f79ced72b13592f4d50d17f5d621399b6152fc81e6971c4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
