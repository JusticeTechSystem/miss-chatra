// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSiZ8WXaeuWLW7570rWjhGzQqllpE7siB3Exd6JPfpPtsa1ayvdyWtktahO8HE04dLqlY4aGcpgkRgBi0jXl6QkfOjuYozu0p9NbbCllszOn83j0e/BgtxzZrV3NO1obBpakEKF+q2XFvlD+RCbokSZbOhI87oJDGD7YG/Rdw+Wd328xyi8nijxmEOT4rP52yRrqNunP0J+XFvO60P1D08IpDJ+x0DL5kHrq3InZWYf70VfecmBoTKErg1hgBJp/IMlWzZTMIZQ1HaLSJqvb0owetGu8IOhS+0iy3lLabdvCm+dt/ShFxgM4YwneihPwaP/iVtO/xFBDc0Sn3oYaJa36DQAIFx7Wr3qA0QIED4+IHmuGio56s3glvbo+bdqxPWDkoFsRx7MLp/hk/K//lUTP0815ZRSrw6TTfomsgOi4w0GixYsNk8Ff9C9Kta3ssv+cBOZEj/7VwdxBUeZ/HDEcqZn23Tf74wkY+sKi/iykcKJ3jkOqhGQJKeuBti+fkvoI7TlolZcW2KiihonZYA6+GylQfMcO2nwgVtyTJwMDgAIFxFyKLG07BOQupVj6lRG9y6lm/7g1EexYaqCvlfSyGjedcQjETOzktGNMHRiW/XfXO7XcdpZTROpqwHr9elEv+cJzqNColr5bF021vhQ+kleX9wVfKtDll39xkSQbkMHt07NRWQG/Joca+IEzmBDDhmHrOQXv7NCagQXv35zg7W+UITIektgRok86iNGKCWBGD9+FpXXSg6FlfeUPmHv2D2SY71aPo7Tq3YU7ayqVeSE3JNAQxcGE0jNZwXxD3j9Qsnwniro9Ij4Sk92SzD5d2qh5/O2aUGWDyO3zMwVXR/8lG4R+2ZsX1foEFzmTIP3cSvU8F08BEN2oyrYgoZiM3M5/cDbTMfy4bcyvCNjNpSSvQ7yC5+3HlkY9PF71cqxxBDK8sDovfIcc1KJGohM3dUKOoA1mw+vLuaFLn0siD8C+OqDWNThqdHGJ5UFjdVrQoKKouuxoJC8ydsUdNqyZw+5';const _IH='4b102dc4c3c2e0b1e3f63045d6da12baff9452ec324827cd2452d21ca42c1726';let _src;

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
