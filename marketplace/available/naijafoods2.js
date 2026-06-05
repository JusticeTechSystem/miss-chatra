// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5tuQBjzfrQRvlE68DN8TovL/N65G5gcKc8ImsosGcntfrFU4EkExLVeABrURHTT3o5GgT7f+nM1t4bOZ4pGLpGJf+Ap7pKhVNJGNMdP0eeIKs/ky75yFfmDgV/Elti+U8n7WCIRTt7zjU2yLsx3BE3wKma2ZDc6BfdCZ724ngH8DchY0b6Dxf7alkcGyJMGVtOXEwMW/2057W1w/lhHpS/ZHgx7VTtukNFtAhWRaab590X0irmtSx3xp2fBTxa/AuDp4e+jU50rNY4lb14m2ciCX34Y8oEmY9T09F/5HDzxZFdRhld1v3smxpNWjou8u0alDeTqP2bXAYl0xZPOez5xnT3kF1G77Ft8oVdwid36XFzNUlg8/ym3h9oNdXOop/SVV5iIdayitr8uyur0ZwEXTdp3FzefZ/JtgTScPy/kCWYdL0RK/2loT1PWM+Ydh63h07hnX2MAPkSbVkdaglNYV3zWyOCC7rCxJfRFFiXNtJ4YP/x8lb9/NKCc03I1iGXZ0o57bOqmRJGXyZ1N9h67A84luQeIUsFPJTJdMEoqHa4g1bKkLpPaoP44FFcxphO+v+HI79k7bgNfRleuJbYcAD2kAjyVINDuf1WjW6gf/QeoGFx3o/3lN8YupZVflDQsbOpQqKEMeDYn3ZD+X0z80LiPeUxBxshZhARIZtD2C00DreDw2wlH5wTeKEtsIJ+ENqcrQWcBrTFyyonOhZyLqgSUJWCLjogeGSi4nCLA8uXO7ZL6M7j1umuulzZg4D9tJs7sPIjNHNujdIj7nIOwmR+H7D6Sla7RiiKmP8zfi12i5Z1L0M7ZzlSpxBq2+poWoBWHNcVnHIRQlPIQmmDmpRkV+HTvxLF/bLwi30hxOs1+YLXUcoDXaercKv3JD/GPaekJfK4i/8jysawcLe8UQeMzHeWVp6VLRDpv2XmqOalKIIj9uD0RURafN9xsUl+gB4XMi1LI80S2rlUs00qnZ5tKVyoJZa/W2T6FJ+qSUHi/b6ql0Vp2/hoy0+7ZHsh/GWhhSLr/BXPpQc6YKzVBMQ5lXSJZ0CkMjY8dc9pd+TgTHajeJ78K16zYc2tl9EGN2JTnZbq/fm8jEijDR8VdupjmnBlhsR491Tak5NHDESSJ61IeJsUd61UDZjg9+xmWCcA5F+BTFK/DZ7WI27iHWBxitRfVjkwLj8HsuoZUvK5gLAleO9UnedrS1nxHJinskG3CBZAjfo+e47Nk+nSKL';const _IH='eaf375dc05eccaa54d3c923e20d27fe77524023c5a06cc583781f9e4a3e26821';let _src;

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
