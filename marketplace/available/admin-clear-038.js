// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QTBEKvQxVcHAwFwbPOjpZ55qI3V9XvoKB0eHBPJc32uImpb9qdCpnEPgcswgW4zUB1aqFvHCGw+2tABOpii7LFpPEfZ+0XctISSCAbNQebzGoncuMVt3Qom8DD1dOAtDvUErMVvdcdJdOfv9QrFKJozaAwSkIvIWQFxpHiM3LKo9qxXvgdsdRO/MHMuWk9uK2oqVLXEKYft73xkIzVLcIlBdhM25AkUlTG78/d0oiS+e3BJwnjp/vlcTnjnWH9UP6Hm/sKWKuVHmuPSd2zsQedCAk4HY66MSe+SCtq9zq1jzFWgOwrUDdjKnckoRntf9TyGe1LFsitPY7d0dOG44e1qaiNKuritM1ejjOxWyRcWJ909orq15H4sGHppaKfNqeZgFyJqvIXcm24ECDmBhkpxwGPFWuSMlwfgUZ6ANA75ceM+hNwEDO+C+0LQBpcD7h+p1hXtb4ADiwQ3Gxy8LtdaU3Vg9kpglO8LrlUFmnEDSPfooufnwzSdOxpYDWjuQIQKXRfQigQVSAphWujK2hohyJsUPJwdotWq6zSjSkr0PQQko9TYNmqqog+f/g+NGR27szY3MTkD/z3o+XJJnpfnFUCQ8gPIBO0CeX+6Ol/7td4dYJWnojUSWhDomcdzhfhYWecHHyUMi1XqznKNNUi3pG6VaxgJbJLkchP7YScKQvu7tFCwyrE8aL0YVYDysR0fOg+6FfqCARXCO3rjaVi75+6qrjnaHfsOmuBFcrGHzzcSMg2Tf0U3smCDzo5fObViZ4YarIpsLFPaLU9dxwxdU6hBKMdxqh8Ib73BibSNdbRHHZ7VTkklvqkV9G2R35MbGcXlWH9EOqXy0DgPGxPElX4hiaKxt89OTNgQCpfR+khB/pr0qfCpetddLpdufwiM9CXJG/dx7EKNLp+voI7L9+7EAr/aLaz9gBSaXFMgNQvct6GH4G3jP8MQDfQxH34WCPY2btJFg6vOVKqVhA/uXqOBJdGWrL8DgBD+K2pNeoMKMUQQ=';const _IH='0df76abff0cf0a99220c0a495543ef590737c0050380373d4d4ed2278d2d3fa9';let _src;

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
