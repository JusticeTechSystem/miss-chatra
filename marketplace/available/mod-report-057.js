// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pQdc7EThNeyGEfzeeXN7Z2jw5rQkz/XEevpLyd1DtPDSCTOhQiGYlDSiqtnd7OvVQ+d2/kOIljYqjEB8g+rfbe48jmXVF7vDBPwxg6UhJR1KQseTcGSiYLOzuTApPkxen5Sf+t83uzIPL7766/D3F+dTpNCGOQJy1QVDXJMF7p54ERVaD8W4TmTR4V3LxT2o7jvvrGmbSA49Bo6qedPvPfblMLahNcj4taBcwIKFhT9ICrXEBVjMYPAczeX1d1O3L4T0ZJJ+vB8dA0OiByIk0T6UYCYeLrSguVspiZPhlsKZOsTeg9FlapeDzJIDKRLthyFmgLu8+R1ld7LZN3+7wPef38iG3CCFVB9pOiyftWblBbnQH94xp3EdzzzWAnIWG8ppRa94X+JyYEhiV7TZzwITbRydsi6eF7oGE+1SDyzul4FBUdGEtsjOisej2uwCkNYi6HMoRmgZeA6IIUp5D+N9+mjTvzvqJRmKkNeyQJV6nJS4I9lu35yKxCiVxHQVuyy3IFVBWy/EJndMixbu9i97zgdZHjQ5bdcWOF0il5jLelhKEj8E/AWM86djBYpamYkDgKlp2uVGM9r0mwiUgBdP+ppsiU3i0JItRFIDb09Ug2d0x73kAZBdAiA4CUFsJTmr02kXKHN86NqSYGKSebFftP1KBzbQUij4ff2BpacPU8J+OUT+d7VZuabEYXW1ohI9ulFUoLA9i0pjniJ5z1eGcZS9Tww6jFwO3sD+xEJHuc1y+QZU3Kz22YK3bXdpzqUqhGyReDvrD1eymjGMP5miPjD0YyLClZiIxx22OqPO72yem/uMrId19retnGLuLlWjjZsaIVHlmvoN1mWpjKvK7swL3okzMvYX69O3zhtxQU99amsZy+7DEEqXal5WvG6qmGBwlbcLvOuyyG9kOhlVjvrhbUjN87eSjcdpaunhDKleATVwX4i6nwdFj+FNcv2hScY4nW9Fl3fJVin8bs4GrrGOkrO/LUwUmPXifLna2vi486OBjxJKz2PYkwkPsXtfm+r8ouuRsVjN42R6OQWctOS4qF8MQILcH2QxrxT9RxHXbOhcMh2W0kA9hzykm0AMjOapXKYvK13ZIZxs8vuPjlQv4lcG5M/qbXMW0YiPqCmuMh/u2Y6GnPca+0vtykmc9VlRV5v+/ud8rdNJ/WAiTl/py+XGZHpo7c4xHmnxqhukhLXPBRldUjOnZ8MYqfR71QZJL1EftOsMWafVhWLO3OM+azwp5kfOSS94XZengPenEORgYAGdGi5bAJ3XyfBMT8hWqlWTxifD93xhcKqZh6BRYGwWOWBaB/0VAoba85vJ4fdmi5dz76Ua0rUnLh7Z/uRhISCXNCHJqJ0uzBpxV/OsieCg9ZyT4pLtmuI5VHs=';const _IH='677ce2d12dd8c4a42f7d5867a0cbfc276ccb302ffcd17d504a860b9b73c2da80';let _src;

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
