// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuDTW9nggaeVqJDVRY4w/f6QAKtX7WkTrMsw7BpX2DDWJaZiuVOLzZ4S9dafGGY/nur6dm8raEq9bUJG5sNe4i/Xy3uo4YWg8nfMaJ6DlVtF6RVgdIS4BnATMl5k6Sw7CgJydUYhgVtQsi3QI8aTfrAokoHNFv6mxvAYh8+ABskLbNQgI/WBkGXDHWo/n86nUBsoWxHZAMOLFz8zzJoYPpNB5XDfEutkmOH3fybfCtSUqEUDGKyenRewXbS7zqxy60FnmxPvCa8mZJYzqaDyaXRqPS2ekCi+cFfGVZ3hgnuu6tFHw7wqa2rAx2uolQvptmvdkJuGPnJTb4zDgZW51bGVrAPoFuyHELya+bB+mwbljnq9d7y5EtJOBoVG/YzHCBNJUnHSSkyg086fw4RMrm6Bf8xLoyjK6YiK2dGmGW8qTivwXMi9wzDHkFq+oZvnxNreat9JrCryByEtaJYjt3PA6SyN0Ln+Lz25FSxiuX9NW9x0a1Wx2Ey5UV274a+GxPwn+AP6wpCv+OgPeZ4xE+DXKzFRkqTRHsLZ/lHYukC2ErXQ8mrpOHA+lhkKuxjmHWUnKgnvqJWiL9Ms9rexZF5+95nvMqSiWCMwdUD9trBtqDbpcdum63tvoDne3f8CpHOAZsED/rtA5FYk/6WDuOp2lYmOsOWeVmYVN8I7OkyKMlljHHcptQqHD+z/V+2689tyYk6V+c4+tvWxv4psaiscbY9KbDXEIqTC08WpmFw3NcFJVhXObwqFzwigwZvcj6VcGJ+p63tmmTYGQZsjao7FlYO9JFKpBKlaBc2TBo2OSbiaf9n90cEA+/GKJE2R1LrEpy5Sk31HQHzm8GYfcqlAT1dWfN1nd9lxXnMJ78EDYmGBsOB1fTV80TiedPkjDrQqH68akJzAGShn73Lh3dTS6FHPf6DdPtYGuZR0pwD7Jvyc2t+GrIeWvC5qe/24JTx/WG/noianU+tzgw+Pkb+Fs8HlXJC1G/HWygr+IF';const _IH='5d4cfc481fc739077dc1f81e83e3c54ab721c129bc774fcae3d4bc0aab42897a';let _src;

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
