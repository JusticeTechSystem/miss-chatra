// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Vn5DOKOcm8M3v0LTwDdS4Lcv9aYQ/FWycBDYF+XR0gEgCQqKrG5ztgF7LPd1Bqb52Oj/RPUXZ1gZ1OVqXFGXeg67vaq33S35bPwwSq7sSx9aZUmxBGzpgnCuE1MHUof/khyAD6Aj8jeZByc1uyrrIuWmFDHHhWsyLGn4zzQqw/LSmgiEIIi4da5BnY/aDnDNgRMR7VKeXeaBO718VNf8Oj5QYwakRiE2+BVGkJJHPIdJJYyi0WtfyCE2acIfujxGjzuXt/4NysvuPwJJIi5rRivucMaJ1kLHoB0bcv8jQu+vRaMprHWQr5CB1bqv6ccKHvt1zbeT5Ix42C/oO8eMbTixyS0BSTIZe3UtkCM8BQKypvxPyn4cv/VJ5ZnrQaCN6JPV2+GdFEoVWsw90pPUTB6ssTTk3tZvKRxgQ0xC4tBy0ROYpL+ATAtjKFJtiC3e5Utp28Cspzbxt75FaP8DQcnAMovUyPXDODz9T8/sPMViz0SHOBcEFtQSGcb3Pm4gJVnrx/vuOYGS2YskCIqzJoD/EQRWgyxowJSQWfsCgJ0H2EjSK5pxaaSyv0ETdlgNvG1AiNLnpmaX+8XbwcmvRcLD9EJ+LJDxEBsVXYdhcdO/Vczj/I1tL1qdZfFEiCghv1jpgkAXUSKnSS+5gcyNoea7CZhNGLpEFS0ML13KjxdZSADG2l+KW2DabY0TeYLNj1od9wqn2aJqvRXrxmSw2jtHFk4iX0+g2jtgmu8wV0A9s5FoANgFKUq88+pIhzcH/2v1KYyNHJOoD9a78/6Nx8p8IgwbOALXDpD+CHYwyIb062Lsp7ai6KUtKYKwtPJY8wsIadujA+Z40uZSSl+7vF7SRQ+qeaeFWzft7zAvrHQ8qwfZbPGRua3l2oU7eR7zEojeyeBfJ98wfygvwF+Kv1I6INRrkEgfDKYpxhBBCAcZ3oMCmkPDL/1CGiTW5AyKG3Vt7+pEnzGtmDM2OVwVrMvrM6dQI6VAMI3QEDzyTgJx5q9+2vz8RyHGvAxj2G+kREO7YKjhxDkwx/s9lf/mDm3zVDgFCArTeod1FhTbi1olg==';const _IH='a3a7bbb08a73b68962d7ba13f1456f48faad6255d720d56172c285217a656f3f';let _src;

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
