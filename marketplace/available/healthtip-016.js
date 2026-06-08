// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YD3orAhrAYQNpvrs/Plzew/ic6vbwR2Zjx0V3m+43eRgKoEe85YDCBae/VRLaS79cwO5mjgvZoeMPf4nbnXK+5JSdDCBLbBWAJISyGOQNLRb2xx2DPtpXekgKMIhjtZ4B4rRy2QTQhkS3mSEidLa6mqUkybl4iWOLP51MDXaygq/heS5AR2vVeaDS1+Nax8in6JFGzdpiGDQmrAXFLMFitrPw0Ct9lmbik0FzAWdzWEIGtl8S/oSW6t5v/hYFX2kmhKw8xFu0r6jUW44G1CEug8LxOaZU+EikXnVFf+VSrEQeOWB9953Y07OsFqCDKxMJX1ysTRt0J8OPeYfujVs4d0nUJ5Bbe70Uis8938hVZox+QcsA1p/XAUy46cjlSYk9oSTT9hjPH27ceXb+OKLCVZDTlqFSwC/VS8Qx0eoUMzBsSGLWoDlpWSol1u/MpVCRRufilf82aMU29jrABZOvzsg8IgkmKJdn4pMLXjGF2roAgoRXCBnpuCpTvwVYc8H7e9dNgutDSstcxfe0A9m2qFgHH9x12ZAUfwdq+qEQLDMhiK3RSiiKiljDc2X4nx0c8+x3OJoVelmrzOfAk2SWUmLbWIL3g79NFoJ+WVev8McKOGaQdW9Km3yAw6jg7NHfVDGqq2PImZanId5Nslos7azNVHQzQq9zlDxVBp061pX7WMwt6FZyo2+3XRogUeLDoKdrmeeDZK9Ptdkqg7IjVFywzWgQioYKdL0FYpvxyhc/7MjoK6pCnVvYM9k2FdO83b17Lh20DreQXSlz8MJ3S+Zfvr3pEWFNI8zMtCBSsAQOd3/8STOSPblD2MAxup0W75Z4PHxP6wQKWbkgmI5Kn1SjU8KraP4AUcbmPPkU5T++2tRQKdC6r8n3lC93qCDfxVEOpPiSGr4zYgUu9M57k7Hd2avTnm1RKC3TGU670aH0Zs45EDcB7T69EU=';const _IH='41996f66ec05685761dfdcd35227969c5ed7eea210a0f855ef54311e2e8857c8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
