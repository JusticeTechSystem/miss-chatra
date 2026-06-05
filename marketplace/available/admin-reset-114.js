// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i4Zirj0IalGNmYf6K88GFg3e0SdG/SmLEQiwM3zYYksJQ4GU1TR9n7xKrPpr3eJGlDm7OUAhfLWNB/0uVq7niQpUWKNW4AKeF6h9nT8TrAAufvp8O7vnS05xhidn3dUdJ0bnlMJdJEeuNQP/1tCxv57sJ0S//VeTo+5WjTwEG6zPHFtVkl4FHxdjTq4u+zdZCq7JL2ArGBORKGcNGb/d/Bc2zhHqUFj/XQUvseJhP66Vh7ITNmVxi940cgyiyxg3faPMdgfo9AlK2slhWrpdBFDZJba/Q9NTlmXtQGWp1Q/RMrQdmvs9sLF/ddeLkzRs5DVhp8OBXYiKM/EKkw+pKIWzCE3kSbM9P/iniRWqGg2Jp6d7QuTKplSkeTAIz9g2dCK1uPiJmu6zye88LwdExoe9ZXbBpQ+onjLS2C1xEP7iwqoFHR0MciWySHxyFz8gV42M30UbwIC9OuEn9+K801DIvqN/Xz4BQWd9E+f/vTWcnzXYLvl9mPYNEmlRdXaOdcV//4hcbeDt/WY2Nt070yfZgT/wWR/WBXJ/4UzFJRgTFSywprkGBTaCBa0KYE/n2beTjf/SXBtFVCH/NtjN5ifsDMjCBdKUoywSosxDnRgD4Pn6X9GNBuaZZA8/uXUI+m/8Nn9hOtkMsQCaZHTlIlwj/wBffYM1xU8adZm48LA2LvPKh2ugovd6zxdKLfxWWKlcTWqR9s4NBIKGngREmDEFCt7x5uXNF4raIWCHO7Fei4k/1tmncmTRE9jLGx7/UyX+PzTAODeHPJHZKTUsfvDTa5p8VcU1z12exene3TO+aqvoa5AOMNVZI4XRDNQqaltAYhlSmDPr230iTCpWuSr3n8fYIrN1CK87mh7L2E32PTCaFlj3YbojmgWzgpywKwdlU2HIZqgvg10gMfHwSorfTdYHRFhqbBfQha9fAWuxmocW2Cq+NV0Yp2+aqn6OwTFmNy4/3vo73u4XnHTStJ+fX9xZjFHKglnsXtjE6GB6EZrZHiHVe3fR';const _IH='e0da06caf2bb4c2fb5114e4dcbc8ed7260a31053459043ae39f91843db9a959d';let _src;

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
