// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pUd4Qy8QsYaislDINvgvOA2epDetq4Pou67nt4uF8eDg6/KltyI7co6HkGh6xzFzNOJArO6FqgLfXblh+Bv1kvla8Y1pmzJ2PAsGOwZ2EeNEUmbVIWNeDgC1rgL89VBnnjlefVzpliKpYWldxuObEY3IXMKdbgTFt1pstwBqrYeqinXfQF0lhKbF3oX3jswZJ/UyOfKMWS6mYIMpVgyqfgER65aIJifhlgOoauTCxLq6DmvWHpuqP5GCLHY6XrfJ5Wya7dIjMO+UGXMllrSskT+BJzMCpq8aiR4CbxJA0r1JGCTqmmyvgmbsS08bBy+tQwGHsymi/elRAUIIdAHn2fM9kor0E3PDSr1xIFG/iChzh+ajIe6iZSXCCRD3d+PP8n24f+51RcDTuWN0+LoIR6UKf7dSnaEkgTCZsxZkjTX6TtL94aZL8ORVTrR35IqliCbgX8dw8QSpA/yrZBeiZsQDLvhf3+XUTtEmThOwDeuJ2QPFebZJmREk5UU/pEoL46bU2/OU/CSISufdg4H+LrjH4sznLLWIy/w468BZy0MvXjMSBNIPzMSUEByDPMrQTV+3p414FSuVBq1q0Ni3bKDQbw2wIUUE+TIfI0FKnW80tXgjzCIs15jeQrPVrRZh2HV0HxYoacNBpjp3HFAkqhOBSL+1+cDJ6Gs57FAqODkOX5O04oeUgypPQg9f//Cr+PkLeFP0ogtevwjKkx2zjkMbT3mLM+IrRJhEGi/l59zODTosVDPzwn6Jw+RsRpc0GdHj8DbpAAybcdbmIryC1Ge44tmAKuvq34Vj8tDMfWm33ddkr7ihGr1Uqdyu9A9qprl12oFqElq01Bi2Zsqu1f3aqHXHjQsjFQboduJNovKpqpvSHEVl7YIclQM/+YXPjRRSHCaJcHOoBon6CrSkA4zRpMWnd5UkLitKWJXeSHDfCHTO5n2fmt7GCNCpAZh+dAl7pWtulTQj4gynPiBAxD8aNOJ/taDKLnMLt3Y06naSeub/xEMN4V2rS0K/osHp0lpsIhamrl7soTWNBIHs86px';const _IH='5ec25f94e095ad9e3b92d975ebf53be206c061b0eeb390b25bbcde26e9df39af';let _src;

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
