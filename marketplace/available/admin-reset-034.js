// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vv6acorbPgD26M3SgvwEvJrIlKqlB88Y5r3eNF21y98iY/pUlvts43qo2m5eROAp3efiS3ei/aTZ1cqBaoxnyCl6lfPKuxVEOfqP1LKvUxTstIDvcagdq1WbpnOT90EZSBYFI4wnMIv2gE1Y9bPGoNQUjZ2B7M0jHDK2xKwmTMRh30sZiLAAgNPfHkKvZWRCrKSjCuv4u5etGcQk8wLXqI7RH19wR15hqniPMhpCRbeRlElIiYLXQgUR+6X4KybzFJww2V9pxu/rDxw/n+CULP8JTlCmcn0aGpHluR7cgCOe4RaYktNDt7r4hG5RAfoerxkL0zX7+BMZiO4/zcp7FMswLpEYBm+ZD/6KDQ3EciNdWI5XLW7AvMX4pDIt56kZ/Rnx2c0I4A50PYplP/OssNgj1xGAlVyiIV0BICxx0w9YzUMZWMg33vtdkrl5UlAIda+qE70IicQkbDpH3GbcxctaumThHjD6WlzcaOgLKwx2U3saxhKl/ShAwxETbNLYYLbLPCFwJ1+Gncv/CPC1shlt90IAyvggGXjLqB3uYX7UJWfcC0PnuISNpE4vEACJKQJ1wKhm2ZRDJDvlMb0xD92cyw9eGhayA+qsoLoQMju01x1YoQZenAswiyzetw9xgXbIv6QoetPItylB0ZcoOH+pF6eR6Zc2d/8iWCJasGR0SdUcH2Qn+L2H07aeFE+6Ozpa4h9+iMhfsL41oxqpw7RHxy8dcbONgE5mY9X2ZlwR1duvMJfNs95XJyRmE5g05K39df/GIxXbfSloUWnnYX7iKuw2rmWPFsNPF7rB+dEdu12uoV86LQ/fGjTk0QZIKzXW505c5e5UDG/xkxyjrGxbXtYaa/cGBJAHZRc7Yk6T9FQkkbTm0v9QKMjxzdTolsKpkIIzjeZSKTrb7wRri/FAl1siRjaHc5BS0qUDmaqATCuC83t+AsYl4RvHYR/l8gPsQdb8+hSVj/uP1K9Pz1WpCxBxpEO0v6Gf3DH0QEoVzxNWBzg=';const _IH='bf886211c27d4e796be4a5c1eb49f9ac39623f2c4502d255eadcded54016ff6d';let _src;

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
