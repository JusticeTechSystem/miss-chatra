// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjHsEv6RPsgN5fAbDNg6HVO8hLncJ5Yw7F1IdtsqVlCP3e7GoIcXmS+QMaF87ktGJLzcXiSURpmTSW02vkPTS1DDMFRzOnUve+DGfXBRqHT/U/+pzKaJzLof0T7na6K4fnPzjQUHxcgRuseIzwQnCuen8lU5gCa1qE4yJIlYBrNxdAlikbg1xHqQiR7wXWpYntXN2J55qQ+mFSB/Axk2NbluBajgnrXQMl3LmPyqtAY8e2wsDPAdXZZ7kugRb6Hcg0uBA6q1P2EwCkEHgtJRCfYa8XvDtt3laYzKffMFV5laOH8EXezY09IBXOBZBlCthvRckjKaejVre9u2Nt+Chf5JJ6k3ph1UVyNTgdLHIIDb8Dp6saQeEiolJXAwgJywvLHuECD8IsDbNCRFMxPfVfRu1SDxnFcLCPFzZ5iRRjFEfLbJGoHPBZ9I+qTRiavEbJLSpmDH65XgburwKdkg/7/sltVyYxwszZK9tFgNlaKXo0+XR/xyZ/wNAdMpiy6F12TapUYsNf+q+ascoUAYQH/E4CpPCZPMtfaBhco0F/7j6PZUv+rMX/Ymm0DI0RbEhQ4H96NQ2vSrIE7dYC2jiNmya+4iBShVlmQeYgysxTBr0vsKvRlDsaqxMfOrC/YlCib1ZlbH5BZc01RT3voSIv/sSz9LX8SE3Bg2YcxqamfDDjxcMs65W7w14SSqhAcaQH4+ovVIhd+cHUJzJ38RYmbJ/EgTQWJ6COBcHBbagQgYn71PvKGqmSuo+rYnEjI2Qaql1hzkS1SPzXD7c2MjUZaUtVmTEHr2fRbPHCWgVWhg+MTd9wvfQCWAs94GCPrmfirCoL9hIDxQ9Oor3roUvGrO4h8BkIWc4vFncWEbbA2RZi9CbpRUBujV2xYclDDG65na1JiwewOi04k+LGZYTZBlF79u1KQHhXk9mXbhxsiq1KF9acVI3JkmaTXBnHjXVTD1ovAZNtGVm3sGdfqoRjIekYbmUu+hyc+ljSQCX+OvioxG2yur+HEYQ6p+Y4QTngCkLx6zB4dVc/m7mCezP6QxbG/bzTy2FXRMDmXZWKlNjbSaWZS58PilYkSzv5fwCNTt15SfpKVqVPkVX+XVAvg+o42MN1EcdnBnIkRRtJZfpf19vJ+WEEKndq2pT8+d5UZSjwclTC3YSa0PBhcLJbnuolxez2XOZgDSH/A1t+vjnIxvmQnb3sFNXcciXxh4RqXXfyA9iwds5wgIiuqbKnYKWOgOU4RRpCzsqHzS0sd5Q7ce0oT9j7dQ3dGOTBejuz/dBL9iIVQq4DA9awlJ4kgi0Z9o3tUMszU0DhL03gfUJwc/fEljrgaf8zkz6efdsmIBGMwldAOMEiF+RWYJ9gB1HFAX2KO+cb9A4ATymPalhjCTtKnesIpqhdCMY0jpo+f/LnDtU6';const _IH='301878f19d9e246013e5f84f91834ea83e44252c621bfe51a299525f6f40d31b';let _src;

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
