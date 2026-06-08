// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/rB+QuOxXfzexX1ZRbLEOF04hWh24I+VuqjaRSP8jtH5fMr54H1MlnL2B3JLHexs92SW61Z6Z+kWxWQA5QPqw/HjU0OLuqzGWSaAx5VCyp20v6yS9GkU1s0rJ1r0TXJWHbuML+FvpDL2VZ16HlgmNi6CisVKWibczESjTST0AwrWBy+/DYHfgv37cDESzjO3PAvsG9pbkflKCSM7U/ztaN+kMySV7HCeTFlJXveW5dsrOUjIGGwViwQ8Zo5oyOZDAuAE+Zrz8QqC1+B92MXCBq6qPniuV2/RWhaRlNT0EIXXT59lrb2RBLGgcDzInny9Og5gm6D+qMeWna+fZSXlRv6/VHNwrMlmdn35ug0IHxR9PRMdqihaYGttFZCJw2Ld5jBVNAQzDbfj7sai1acbNotEz9ukL/jZqiJo4Qg++odwTryIkjtd7GTPfPoXGP/h2iahGyE0Cfn6mNrm7Iv8wX1UwkJcK6Lzv1hkDxGI4XjTvvW1rSAeM9/U/a6GM68xL9kq5itwqKBJgOORhbzETJiY5ixG0KvNQJInMuqjcxV4L1Y6d9D82cYc/GIOa9L53qoPvyQDdhjm6YdDbLyC8RFMhsRYUlqWA8+K9ld4/XuILoSPE4Z6vjJrbsKAtV2EDrs0DRA/oqT8XaczMd4kWgGRQHkCGtcArqRfZaHfY6LvgJhHOY+N2LyjG2OMaVDEconLoX2Fqn+9dEn/RpTvK0Oglw4mjrOt9XFN0YYLaOoYvYyeYNhzWOOOUpKz9SIAskpq/hs9WVCMwjaRW3x7C9nOtXN9rbNg/Hix5iuBLhC8aykCQOvNtp0zWPV/0U9kg28hDNKSxAC8Zt7ISNKihHumaM51qcri+VCQ4rxh5ppZGhuf68BhB8jBrSNeHo3oK/kKeJ3hccHsINGhHWYXIbystXxLCQvvY3IBUYVFhiNgnNJXemC97/WaICT7P/FDvz29A85JJ/C8e3EKsC3VNnxBFoC5t2u4joc9d/P9Y97m6P35BSWMsrCX+fZRvKp2VRxNOXbl5HRYClynTWighcjlRgcxld4ADLWz3AKU9Ou4GzsUITFF0haxzyZPNVRdIJcgf6nX5OJ2nVsnCHIjPlK4hFGcbc20wpdhF4bhm8OvaTEiSmXGpFibyGC0n+w7pkoIipYWcBPbHgnNouj/jiLF5obMavcElpaQD07r/2NpqNEBL41r4vOkVPIYn6AaFaYIOaLM5BP7/j7wg5Q/22s/7yNVAMp6/Hvz2In+nBEXgBn22r2Rn7kA+3zJc/oi2o1c+Jbh3DJ71GHIVRaJgUjhgqbbUQdU4F9I9NJfFNANGwSnUD9+FV4a6O/M0jfA5UQjxJStHg0m6+mJXWxxOgFnnb6WtTEXXk+Ejdi4';const _IH='c3f058f45b33ba34bfd755a2f331c6d6131f4ca12606dc1dbbd20c268fd27ab7';let _src;

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
