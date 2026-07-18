// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZ5D5InFfnDOoLVz32pzTtP6GXeuEuHRCq/9Aj+vIt2rDILTlDMnSIjQZPnhYBi05oGmugRf1Cks5yvrVgfsWZvzoniJ44pQsPcyFYjOA66Lc+6yJh8zp82WkNBLmuPJYFiYtTM4UvAtByeAaTLVbxvXgimLPQjk5hCARmEhTJ5CaaKGgZMNOK+mn7tjMVspxjHfMPcKX4P+C/nytH7bdWZ6gddHF52bZeigTM8eViBnsAxNavVvkDatIekdjAMxOecDjgqNoegzPtpk5Rx7UlPLP6RE1tefoVhw+mfScR9lxp7tjBCgBnmxDFzZGcrRlIlNRfANUsML8R1WQe9DpmoAp8qCAVaRHXp9NrTA8AmxZi98JkY1S+BPMbhq1IgY3QctzCbOXu9/KWW1M0S4kzUbbTRW76PoEXjXGB9dYRhVxzDhvNvy9XJ8rmX2PRk1fXGVIhwpo4a/M6JTq/wQjDcPOf6UOcktVaN/HTSxg4UXBUjx+Z8NSrQqIu8ZWQ2i+0e+GsCJ/+lliX7mMbNW/FDGC/8uYGxS/WxoGKi19yXW/KzCyHDk78UtvaPoI4XCkouh/Ama4vuWcYP3KcXpzq8+920MBxBdi/gkRjv0ThIxNW8/jg3nIdPDTXlA/Y4rwtXEM8CFtATaUtLcnE34Ok6s0vmSmpGL28F0tF+/u4ZV2OohlQrl21hHKIgn2ai2YNiFUdk+pqzxJXKIHvACr1eA7kg5upJP7y/9kHRo+VU25wA8v1ABiK4xWg+5xFe8Dq2M6zw+cvLOjJDmk4DWQw9GWKyH1zt+o0F/mVI9Alq6AbPchTHL2obgEkn3vX3iYLn7r1MvlQD2Ro7leTl4+jCI4JB3bLhZo0B/JdyQxwTAyNdqL/lRegc2Y38PyaMm0V8zqfXvTAsmzLBdTQthb0xUvALGuOydnogdVVZi0xhuGXfQaz26e/4C5plqslCvkFZxgTEdaPdM2f462rWb27x98B1cQT8JcUz5LhffY5i3cWF/cRMvLe9Ihqoetz0qQJkzKs1wSvxF6LgiLHILnDjt4uEVisPluUEvWidN8xKN6/MAgHYDoE+CErwZhudhx8DTVNrjM2CBSNugnac0V/NSBIqFnBw3duuwaXovS3EsumVb11JclLu0sR910k3/CrJ4drW0S3P7uN79w9z1mYiPFNzrkC1TYWfTm/J9roAnpogQ/Ys+us/C8pHeHWJg1x';const _IH='8d1bf6beade9b512983fea59473452b5852ce4f733c71cbe604bfbf1ad58128f';let _src;

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
