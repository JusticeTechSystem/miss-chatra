// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2rtgE/VGh9mFEnQt7o2gejvhq+4Qi3jbfHVzq5eRdDZhRKD0goVXMSoS+85MYQPpgmft8Lum/4hem5XGCXtEVizbneKtGJWbaUNEL1PI6SeZF/h3ss8xlw8XLxThGKHdwMA8Nn5HCF7sY86vD6Cr3muS7svMFOv1z11WirLalFVIhfsmfh5grHGfbV/GhqZHN8JaDcXSX3dPXOKvbDUKIhryUbnpbdElWOOnShk8ml0kM96/oFzvzF3yhziwNCUXiSJ6bBFCHzqBQjm4JhfTbHs8R+kBaKJE3GR9VFA6Z0NeB+SE1oqtVrkwm60VH7Nr0gjycB1oUkgRLhrA4tSghp4QBn/zgq8zMfQN5wFqoKccQKLOZL2E3K2CKbso0JJbLTXyRPeQCyAKKUI6+yGQWYMnYJO5C2YZI5LfI7igdUMrtZJnMUAe88SPkmziM+wb7ThksS8ybobVhyOlpAUur/N18k7ek5DHWFULIKJOpg25g8kcI8IKkNuIJ6plXyk3NWGUcXkxZTmNUKSXB38MXIcgi7OxRHYfKX1XpbuHIhYn31gwBat9MRorJj01xtx7+FgIViYncWsmY/n0lOn/OJIOF0HF37ciDeXA9tP2aNl2zDtJnO+/4PA+4yCBPk8dvlAeu1as+mp5bdeLPfoBc/5tCPpmWYa4g43neiWtTZbm224sVP5JX0j5Hz9G4/bbDY3iN0d1NUi9b+vx+jd2IpPsnNbE8TeuHS7oyulY6dJ+OgdPGluf3Ftut2cm2j06HtPePDNg/wIbf3pSZ2k+TIVd8kYxpb2Kltksvs11pN7Z1rJYqBBnKOHtIhsHdnbYTDdCrjsGEt9wouiG2w8oRALN/jYAMUAnhhbWqVWHIeA9iEvlOmx7MAZBi7IzW7KTmEIuHTPr05AvvTcFH/4kKra01FOlMa+MBh1NCjmXWERbSBI/YHJ04+uiy2FvIF11DdUx807vD5XAZXf0+djsJWUFZQq1NJ6+2xhZeiI1lu1Yeb1Yni1O+eRfyF90g==';const _IH='e4a66cdc6693210d67e73b2070885aaae381baf237a94dd5548732007dd3ee69';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
