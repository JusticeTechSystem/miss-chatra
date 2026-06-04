// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oNkGM+0FbBbXU+zH1klkpGe8ZAaLl+P5y/aGcyrLCLsSIaHA5TGp5wcRoWviJSme2QJn0OU9C4Mls7JxsMxeiO09nF0vep/qhuqctHdlKFkJwBdy6owKQdXbeXJrZBM3o5sCjFy+aVTcd5K6JzTsuL2k8YqLRARjZORp+A15ci4ubxcvn0AFuy+tTO0z+VUhd5psRDt2VAIBcmLyyJl5Yor0Jxri6qwbDRNJhwvX/DjD+1ZRyP3Mv8p6qHS1+8iBUTa6RcEIevo2yQtOYTBYaWaNDfUbHc9PiE5t0ApQ77oooxFCeUz40EiQ6vVvWEweRTMTE2Pu0VQIEwYru7daac8TLF2oJ5eqPpLQwyAcr19zCwmicF3qdCWpE7pkmGorzeEbEuPQeRKchguHXfmvI3BVUU52WhsYsM9bht9bY4EynTgSitBbJl+bDoVWOHcyJXiEp3o8SLKkjfRhHiWbrPWLiMhOGfzvW2Llp5sJhT4ZOY+E5UMNV221uwWRl5Eq5/CnpM7ppaE9/gg7RUUojvp05q1FZLVI1BexvQUCi8dr8iJf75MvWs//ErI0c4Y7CQiJZfGgc6rvYPHTiEDlgAMDI7btiwTxsjsalro5G8UQs1ckURrs//sOje2uaK9bcxleFwNF38yiQiL2luFKp3PDYlO9ykAqGnN14rdER6wauk5oJdSdUDo8yTPXb1ujklKunqR4mYnSvt5TzVtXo7pnUPGzmbYJkOegoD6wkWCAVnBopIsxs7v/Ob7NaF/ua8MnAO6hPsHN1h1WkmY83kyWGoUsor6hZgnSA+A5Cz8RemW+FICdeh+rAgZNwYPbceRBkY4TjW3JHZQZMwvikMEoAAKbOsWrY0O0KiHZ0p2Lr3/jeC0rTECRX+lflnwzpd8JXD/s5jrwRXElWO1yM+MTdWiebd8Ghk2uD2qyElu/K48muR1is7HU9i6ipmMyWnPuLywbwxvXcKtygSU1SolJi2drB2UYfr3Su+CDJbU92crEMWY=';const _IH='c364b5268f7451ede76cef4a1a8734d72f940d41da754b1d98b809621d7b6c55';let _src;

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
