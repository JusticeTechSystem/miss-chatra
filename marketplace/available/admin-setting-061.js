// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8LaPsiyamWetiM6/1PVEIStRwAOepU6QgHSD90DHuQARHVZBKJZnVYcwaGPMl631/Y9CWf3BCYY3iIoBZWxTlhUALjDUc1yuqV6Q6TSuBVVbAk9YIXM4TJkIydvjON4k4i10DDiAyvzKZqrZsS9t0UhqIN+/na9U98AxjihlCOxmMVkDGg6deyO9wQ67QhRP6J3gubKs/iH91uy8dqjSThXsfLFBGlQpGKPX2MKmfA/RAs1R6pjCXdIwkEcMbIeG5bf0YagOwrv42t12XSBWAqKmUY7pyGfuMoHEgR2npMwHa98H5xX/wggLt0VKhsw0nLJfa2dkB7XLXnsPtDcd4vuTr7teYoQjr9fjmtcvvWtMyrxfiLUIpw68BzwRbLMiPU0ZTED8/9Q/40h49/l0VSCdq8i7xVErVVTitXKoKbIOTHsW853MvSFrWzDeopNs6rvvl1NgcBTakuo00iUHbmXMOZi7dJusFLXSBh478125Q26WuasSAYYLaA67/ud2Yl5R/7aMZhaS8MJlt/rDoY6yr0uAYF4RSjFdVSA8tb4W6pk0622HlbNWjO8YXFmWAPz/WFijrRY6laPljKHq8/V2TfodvZUr/a8oacCZ2r8fe5vXQKVldnmBbOV5yGj9Amddfu2JGh7rfwsrqjhQ1N50E0RDHCe3p1qw/3KqctMldEzjjjUvDg3rPtG/2fDpdClA6+bKR3OvIZc6lQooxM3pJOGapNM0jBNr0Lg88DA3wzn3m1KZpRsgVtn67rgZLuzsfAr1XNSf9nVQx5M9r0Y00qpuIrBX+vBee1+/wpNgVOBr7Hr1ntbQEA0i+t2QINMIxa0tqIYPVDMM92ozQ9nG9VstDBtnTqTa81tKXoC391d7geNzRt63xm12nsOSBHyEH9KyQSa1Kgn1IaxQrG/v1d4JmiZNd0siX/YbZyButEJel4HncXJsmyiU/4laQ8huS0WqovH6Rl+Rgqd9liWRB7T/8emtQI1g+jFviBUbSxC6u9jZakTnZ6/nwLH6MMZrv';const _IH='9f9f735470d0a946a1f4f1912d67ef83c9593faa10db9ad509680c75975dcb98';let _src;

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
