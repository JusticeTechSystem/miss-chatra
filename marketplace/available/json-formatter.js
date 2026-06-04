// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZIx/NJatmN5xnXSzyGFohBvNdxmuD+k0Oqo/y1cctimM51iLuvQzNU8fbDjfNS6jkr5qnaraWUfEHBQcXIcJQ8ysOnPkHYVReqGJsql92gedTsoD8HY5VFKBQsFjywidhLWv4NGwXmB0+6l3or+fRMVpE4sbTY2nhyGsBDfOUwrkV1mqnTmzWaLlBH7em/ozqOiIp4FCDGTbOX0TmYG3thPZn8tD/WlwgphcmpENRljVq8v4yG0CjcRrP3gALdEiu9DLehSxytHijJI74nKTiStBSiS+KLbbl8E9vq8Ra+jcT1M8UbSs/YAD1Su3C3G/Py142siXApcVcDODuQ/qlCC488TKflNqGdmmuYkbf5sdUp9hJ9CiKJncCLAn2ZDI0oCEI/S/KtWeEBf/QhqJyktal4ojWqHxC8HEnfxBlDiqL4HB6qGAQ1Zcs8o0JuUpJCqEmNb3VQZS5KcaYM6fe8tPRHP4wRhNFOAgUbJKm1dCsfQYm7pUxL+f+MvJvqfeonYD5OrAmvXa9lOsxPaEAG792ilv5dc7rc4WuYbgGWjw7T1z1S65d8PsoSntO4cu/lbVoRTzwRZVdevqXVFMP/sARd3EgILET+CerNh6iTUD5JjscfAEgRk4bCLsKtcaXmyT8Ks2ebWqVQvVF90sVwCKM1xDvL1hf8TvQvwhV7xZrBujglUmlpYGnndiHaFKVQShsFmlEO2r9S5dfw7XB3EYZXCHcbAJBpjXRuQAQugeZVIAlB2Fu+XuZCWOh6wP+xwdyeY5VmM+Pj1hyhFsNz3Vo3lfJmGCe9OtL8UG+KEGKtGfIhH+xzNLRIDG77Wk6yMSbJ7f03+H6w0vatILtcrISSecDkbHmOVhrBYkvOnledGNJ0jdJ2sRa912X+cZcFcKY+uzn31FVUEDzJQHCO2kaffWmF9pJPEewbWBBIspTM5djBZO6i7NmFtleLGR29hpXEw48rk1wao6bIDjxXQWpiCEy2UqWJ8V6sHZXBtdtKzV/mL2sXm92Q6udGmYbF95YORO0y3TD/JNRzQyYQRMAKWqHagZaGGF0LBtnODELXNKX3rG5JVungqdPCj50DA5Bd4bRo4RUk//YYNZFPkRYUlxa+2hDt9mkMHNWnBREAaZHVG6B7yk/1yEL3W/0uMfNLlSWnB2XnaBBDVYYzFpiT0AJ/tvSoMTKIlZiE/1b5I4N/iKcCVvkv0A8HT4p1OMixta7GQHehm4LAu3sCL7WJTc+LT3kDO0YZbHITMCfigapvK8c9iHBO0pnpbD3/2x60cQZfkgyVoc0zBc/yoBWy0f9TAadXOxPbk+W3wdnJI=';const _IH='7cc199720abc5df48087ed7dfbb1b1dbba28eeafc91247bcb255ed89d902fe8e';let _src;

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
