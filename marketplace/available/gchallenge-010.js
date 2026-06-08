// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DlcP0VEKlopBZsuWqUwAcNum7TEoFNVy4U+5wh1a1ni9xc54D4k1Hsa8tjX0tmNuD/S5pKUgYGRWZQ/EKZBQ4Qi3uCYvjJRkeycKkhvqRrvPIW4VuP72XmueaD4Ac11YpZrP1YIPVDAqWMzdcWVfkUpBisxCjwZcfsW6GTYCmwLv06SI0M5RoLm7Sbbuz8Zlbua6aQAxzOSyL7GbpgwFdDF7YhEbpI0Wa+C2Q/K2yJC8DsprrIwNf/q8UeA08Bbs1SjwiIzNVlpnG1RlTcrCdJGOTVsqzRZUl/PSCUAyHEB3aN6yMxOw15rwFtpbYGUw1CnYxTivcHo+RVBDhx+LBuq1QptY5SwXVGeek0iGGEllchSI11eOupdghscH6xeuoCCcRup/0JFrMbmYk/ZElwtuiY72HNl3qA/LR6GDhW6E+Y+x0dPss5m0hati7lH2Bgm6V3iFVdhDED2oUODtHr8052MNWUtlDM65OTSD7Ei0qA/eLSMTc3oy1RVBRgGHxpwxJAY1UqVwF5dg+G5f04DbpuiT+1uxgwkgcka7bt64OKwdi2EsRu4X5HNpHZv/zlFn3+u1ME8PE0MJsVthOLDVvgC4WaCPwCxk9dF7xSnW1dtX/jwYLGXGwDWNmYLxwjU=';const _IH='76cbad30265366d97cbc6d6e17a728553a6faa23cc0ebea010a395349b5278ed';let _src;

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
