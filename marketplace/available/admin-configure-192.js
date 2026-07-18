// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTU0ATcN8Juz8JOIKoXCDhXmfND8NoxTG2qZcE2RSzSZLXSfPw50VAUKQVaMF2O8HVmQJCs3gbL3o9DqR9EHwpuOgReQ2EhGgXGtlV8stvNuVhrb4D6uIA6EwZtRKTSr7ru+gdoDULNFWj2SYL2/2V6XBWj8ClEABOm22/nGwbTtjsXjaofNXae5tjsik74kC351FEYsi75WmpM1ZTW1UE6YCWuVGNjYBS21e9biYoQu29MEtxRytApLq4PooYqfwy0uIt/blkKMS9MHJgynsoDVm8dHkPZcRj+NM3RiyeNjP+rLo6st0TT+bN455yLw8M/w2jwSWGkfMsu4XPL/I9deHntMxvwMa4evUmp/B3Jvi/9oIP0ymC4oIIsqHwyQHLiNvfizAdqkMCbKjdH6rn87e4Jr9Rf3fY29CQDC+0y6nMLZo8atDINFCoQDWqDakQ37gVPwaOx1OQCtAFSsO5nO0jLKfzlW2Tus4d5Lh052g8WUsKMVCw5Mch3Vhzvhcv/0sn81mG89fixOJkIk2rfyteNZDrUdvY76esetHHm4e78JoD5PbiLF4SJ+LeUr/vb/lPLv/PYpTtyMp78gQRH3QVRGkOaeVBdYDCWuc4C02tUEi1XXwBTfGRGjtON2F5Yu7fesZE326XCcWB2VI9GtIsfOxHbko3a2T3vbs3vleJMT70zmbV/87hOi60WyWQewCtHRuVVEp2whUSJA6gQmAdduJLGarJWbYONKcxsJtF8s0LSb9CTAGznY1fW7D4byGXMHkMPyE4wjhbHVwhE82hLFNn9G1qbTnksHfv8YBu3NkxnSctQcLj8/s4kPyeGMYgNz6hiRiIMjkQvyHT6eIqq3Q4gFQya/468Vog9DO05aUeV0wB7YOS9HxLc+8UgpN6fWFtHTzmlrXMvVCmznG2KeQVMKg2ZrQLkBo7RU+3SmsN0TY4pO4P4QGTWCJh6/AbiVwsKFYby296G/RkqY/kpBleWvcDBXxCc1Qfo6v0D/Zf3gL4azzhdjkDH6dAfdHjjMaPOKK7hrNt/GHN3mYO6nYFR';const _IH='2d8944fe7dcc828d79e56b2a96485cabf955be11322d23afeb0e4d880b639ba3';let _src;

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
