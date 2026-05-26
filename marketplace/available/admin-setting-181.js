// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3l9CtbGYzTFIEVVp4LKhi/1kIrjPEHKJN6ROJyUbKSW3JdCaeHsyHE/TRzaKArZPKdZYfkyib+deruMXi83wGVPAlnEx05guBBVBYjKdLmurPWJsQxAofoGFsboqdUb+ZNXfQKW6PRVAfYMBH+MMgUKnpO34X2NBGQ2StaTt6uf+5ljcFfL8WWQ0UaQipMS/NrJm/q7j/tLrZgZu3kHyqp/VjMS5sYitiGELCWC4goFYJafDV590GCc+VIqjJ9ceIlN5NoOe/HS2JU5m/xtKULHSs4GTO3owlouMeJ2UjKmjF+wZ1uSWiz4H72xiTraR6xKT64zPGHKhxjtxkVOAFe/EKTa/y4GlPWG2JEFhmoESQLBRuu4iJ+GbwPGSP3AoNsUUWqXEnKOIlFDLFTFN2GAlm1ONmeKRh31Wj4oC+z1i+k6MhOyD6ERqkQKxPBg8wlr85yRsIrZXY/HzvNNk9W/0ZGsjD8kYUnmDdsxWdSTVBUJOdwqFzSf43/X8YTfTqF9fQGIMQRA9ajjDLDHTOBu/Mxnzf/eQuXzZDj6GjArL9Kv6z/4Y24MBnTasyLNf64JtXF7HLDcQrKV/5OHGrvte7V+5Ik+Iek6dECReaeUh+dwGxYbHaSxzzJF7JL3Pwpv0uWhBD/02B+ReXk23qpM75RtK6YmlvjWDTJvALB0SIQJhH5drc+spsDdC7CEO5QvZZ/4BkAzVNqAlehxEV7t9T7TWmFcVIXnMZiw9ZFt59b1/0quOMlptVwyM/+/kFQT58uJw3F7t0NxqECtceduFvWMyVnLkSdLQKUPTl4QBiRIKRMHIjtl10HyXcjV2yyKMonIeZ7rcizXFOJR2SVxv3nGOPUFm/HU6RKKfFjLbDKfFqXIW3eAPNLbE0EtVeWlLsPhFLhi2AnN/ykKKwuWAlliCym6X3Pdmvf50JcVUnQ7tTOfG4U2j2mkg07qWOSbltMcKMHBW+ztitURhtCQXJVJbhGripAi4xRcQRY4izL+pUhAei/taK9NYtilE59V1xw2OjYU=';const _IH='ef79a177249fa5daf0c1f4896180a1ff3db5e543572055589ad7faa826640d37';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
