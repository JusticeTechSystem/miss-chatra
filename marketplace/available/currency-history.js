// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a1JFvZtz8n9E5Xmv9ax0TQT7SoDLBiO2v5rNiQJyZ8vqVkFPbKGwmyKI8ycraco9NJ9kdNLn99V+cUxgUnnlcQKRLy61uvsFY37JklxlieEWceYiWJYfROZ1hAjMfD4Jt0uAP2nk3kPgj3hzHQ5NABnQ6bgQA7Rv/RwvKZGB1qzqQu7nywQvlfVQQsCcDXtv6vMr2ysefwqDViSHhMUR1LE5bQ7uNT4MknHPPTpygkGJMBlaslH/bUD74DISOmBNNkzFm79XWVpOT5VjOmMI28F2Km1Khd9T7hpvAYHvhMMaQ+E1t6bp5jM9EFGo0O6utscoMOo0R5J7DUQNP90yCVryJ5kiWxCTVgYKwVuMgqIq65BLd0ilt0ToAZuWYOpBSL3mn/TYaNUItx+ATQtqSfoOMUm7T2GHbx0X9CxVz0Iqm1dH37zQS78TW1unrk94uHrbibTqTHeE+IHPzYCLUaHHRj0928P34p2/LP7xrsH6jncDZ50k8402N2O+aDO0lVbi99kTVKfVTNqXqDTbonXI3NK4IcCsZTm7vmOb/Z7GrWAiLtMDEnD2oRpssYzfbv682F/gilgTD0q0hD5qeIVi/mKda/DpixVpZt5/qY32KncWaP/ugys0F8HtBke8KFFt0zgr09L0w+YKMudVwT56KTovPwDaU2qwlzDCguJ1os8rrv231x5Ih+GRAeXn77P2cpoUDXzz2KtfuuSCp9Tz8Yrw/MCJKN4FIhGRusDFmw6tp2GsulJzHwkQ7+XEG+yXo/6+x2LtGqE52WVTOqS1BYE7ZSeZfcX6mLImGurXDPpqz/AgVzW92avHw0vOQA8WYBRsTVsi6Xt/w1WydIukuLmCGKHWg66rJaEC2nUMygl23J0WySnqicEHy8yEzpkhDBB8bOrD14qdA2Cj4Hfd77/uzQ/04pAf1YY=';const _IH='c0d423f0fb16679027aa98ab13c0365a51a458d022a50effe4dc84544b6ecb9e';let _src;

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
