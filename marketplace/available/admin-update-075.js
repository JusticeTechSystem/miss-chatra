// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m/4GZIRbIS1mf/NDJA646zoUa7uyvsTjAUfKLQhpJgK7HBDYw7dsy7xw5kQ61lraEoV7/pVV3e2edcLh3EdN2jqvX89ZRJi7rmqyHp//vIBcE6us3rGdDcVC+61xRp5vW0R9PdszF22tKomd2u+L0fiUun8huCtxjSFEReONMmd3+BPWYUG0b8/k9JXdknAGXLSLXMH+3ZyBH0p8As41oKdesSnfCra7/ZWXfZTqf3jhKIxeuFhODXGiD4rycvPNA6PLFWLbLIlsTzD6Y9zitLvbM5s06boULi0N8eJTgbpQhYmZE1ly5gK8Z3Co4k1skk5+CovkEXGMoY+5jB6RwvbKva88gbOqOBgubrFvnpEnjVi87vOzYRZeF8EzCKvJXEfCNOaCprcutndZG6h8TsO2VRiZZxZ5ApcFcM0sLow1u7Q7C5GmeIMZbmvLk8jMcRu13gCg44b0EUJAVoKVGJnlFwmrKFyGrUTE92sFIe95fZsa5uwUVbnRfOegaZ8Q/ggyaab6d6ORE2JvPITUyFkUxhsOr6R+KNKXrAhHj0pU/HNMbangv8UXMocH+TiAJwcRiY//Q6ig+vGVWYPPLSK//X8M+DyaRPJWvbulUOXhcIO102oZd93EtkDqy/7MfBqV8IRcKvcFFlAHgtyvbsB9Emxz1ai4CbZOup6ZBmpOuHPjKbUvC/JNlYoUDVSp1wXay4sgICVEnCPnY4jxDuoAnLpqylk76d2wAFuUdkrZGvu+pm1JZJMS8BKU0AYMHeWdYqmTBaGxxG8qkgJ8VvnvH22CC7CsRSKNG4BsprPRv+0pQRcHfhnUgbURsf/k1LyHrq64D0USY+m6hFo3EdeyCZ0cEbT1Sw/+XUo2d1bf8eEcJ/UCcAQbto9GsdGnnwysYE7djtu79tKk8e1NzlnE803je0lVCtJjrn494CFr/jbeJ1J/SYkn5J/wU5+mbZNRzSpSHAp18fkIkBgSGxGabftXvbNCOs0FF4fYlLWl4NpYCAh27DkJ7yxy';const _IH='dff03d9bad6ebbac493cffb4e2bc4d231106f498d86a928dcf1b1127a97e7902';let _src;

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
