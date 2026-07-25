// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiWmC0jNGXyKG1ty3vFi/lQC8rUJj/Y56E0/BGObgBwgeawX/AZ7RG3Xsgtl7PX7mLqJf+oDUCNpNO7ce08cTu+PUHdynlzhIkl3LDldBYT4AmWEv5lchpqG/JKhCqyM/Srx33xz3BQXDaLaJwmsJEWhIthArcWV9xER3nFeIZ6GATtux+Ju/HY++Wi1kUpCBs/7zxoj+yddoU9AEuc0lU8XyvdTRt2qI4CMLRUVRHIwMMDxBPFY3fFAhgmLfaTCsT3ZPkVvV9PdwsxRC5pycq3+WtCSkwm1Iyes4wjCuwejg1IGZ2pwUcgvdyzPeeCWKeKFIk6cAZfigiSyGpont4PzD0NlUK6VSjp/oFSBRN5dP7rsrIyL9JcqlWN0xAoIbdlou4NgZRdNY/TjYeeTU8RKBD8JbsxgOkqyp9EFLICXJgJcjnFAHBPuSb9KAJYoK2l+L4Ka4T3i+BMs+YLeCvppqkdARkMwsQEbeUcwSRKpYZX4bouzu5RPuXP6PA97CY9c6o3k6cvBoHkB99dG4Zx7iSAKf8L19jZ3y0VDr+fal/CnGjvps1fEdurVOFKDlkincZf8FE47di6WiY70SckyS0b4PsP+gDSr8XsOqbtfJXsI/MVz8l2Xsml64CYtrQUGCd5Ox7cJTRu2+z4f9N35ZIJH/fzlvdzOKChudJC3NDln5qfacAqRtA45yeUFs4QHCNKz7Gmvh+ku/VZCqVaO4MNPtbwFAn2vs9MqrEyF6hCD6mAdvJ23zR2fVz+q7Q6YAxzjBxVqweoz2k/Q9WKYMarreA95yE875ISD/PtfNjKztUUEaxnvhBXJpX7Z5Bb94CrESGAjo/lzB96KDn+dhdOM/+VcVPoXqxljobhBUr+xfCrivljMDyNqEZ/OeeFBro41vvpyGsDNtwUevy507kxW7ccAbj7wW2J7GK7ujaeY3YxxCTi0NpMteuFeaiR2t8xuDJP7ra4KGoQwvhrbnYtoU5mp7kgI411b1mDMpxzdrhf+Fw9ujH5DcQfa2+MPGGJMTlruIVoHBi67IqKW2uVIM5EnJQeVg5aL8gDvYLjZnoSmA9JoPaqsBcAPFct5PpcRZ2+2Oqbxnw1mldiuXg6+pX2EIeGqD6TxXAUkuGEC+Paj5iWXfnJq5Pf6dpDHmwA7WwYAB3LYy35urhhkPnHTbIDz1V28qmlL3FMv7RDN0nK/kyDCrlzo8aMbur8ts5Bb1yTZcZ';const _IH='fc0b8bf2a7258fb27014f6a842985dbb434bd11d1fb456f069df6e06720ee390';let _src;

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
