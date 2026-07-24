// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKs9aJYyjGIkD/4hyFeTP3LBvidTeuE+3b0KFbHvFcMzcElgLfvWHMrAWp+6We2M2QkWRCbLssiUG7ZsvNTOcdMnCTndcq9vHpeRClkCriXlxDfljDQ1W/yZ6eOrADPREawdz/z9by1sYXWDCd2dBgw+QzkHWakD5MPIKbPG7Jet5DxBKFu0rRlkAVTQJlY6jP2NdKJAsiUdfBYFgnpKX0c2VVelDOw5mdt9HlpwJ0U0MarlJzt1+mt+59nX73WJ5gn8OorFfA5yI7GrJTVcpuclS20RXAKcSmDt3UGTOxAZ/Fo2vWWXnvboaUxB3GQauPDk21GkzJZv4H175j77nzM/b304xcXaxE38uVuSkLSTSnMy4f7+jY9Pr2xiwXp4TD7xqMFBrQ69cqnLeF2o6gSXcWal5mX+V5ViONHA97Zg2+m29OwuHAgBUlH+Qu5TuDFRhHmuGpxeXK04zldF0/bRC/iJUcAbFnL5w4PC2bEBwJV4akDps8tyfRx7rZRhI9KnxOj4oZfpFO1JJuHUvNPDVr4rhXdNXtkaROiNJ3XF3AANL39WRec0eXGVSQP0y1dlm2iXyxs4uoIlxeJv/V7fQSBsClw5/Ai4j8QMKJ416npvpfuEGSthvkeTIB55L4AZECLmFohpCLeIJnXke1lr0JHqryvYKCl226ep/cX2VCL3Ec5/5Zl6Hg9wKiaIkBKRC1GtyZ/ua8Sh7+hEqDNF2VadARSg7uAqFIKDRKWGrWK/NFoqYnUCslC0i8ZN4+D3Cta5MH4uMIrDo94FeEwBPtS73bwMxOnF4dlAIrsYF3IdSWAma2SGxFHGR/jAGr47Gk0Df4Rf2QN6PRP4/hzZMnY9yWAIMEOwFTfIticgxNwJBigNMusqG9BKO2ZCtC80cci6rK0Tcmh6jYVUZRHN8G7znztUci3sqmURCX8Ma90nRqKwV5jF1f+DRrVaf76n0ejrFpHjaQKwudg00gIt/M4aL1i6+II4BlXHEDYcal5js2ZnabhVnRKlUmpAH7CzqOKXPHLHcLGuG6+td/equAC9xLRJnheHeJr7A7f2BEVbMGxk6sllPP5hRY9UpaAkD25Amp3N5EM520k0e7DXG4VJ/MTWBA1kP+2chDDQt+rEIxLyJBE+ETIXh9qGMBrV7RlxuEgiOBrACISSpCSNOsQcMXdJ6BwE3U3Zw/NG6twu6QOcJE+8pog3ByOCnoZoy6TmypwcQYc267FfsyuW/+NAJPkxsnlzDb2JeTs07EwSXAFlaP5puEBmOyHdejOh9oCP88Ts/hvE7geO7tFrw5O29m86w6PT5cfRJ/SJbQUJf5GKm1wEitgHApxJMWxsHvsHOQmMwOEOl2/x3rzAZ8z5VfaC+CeIHwbDM=';const _IH='a1d9053a0912871ba04f612380e62d4a64e2193b79f1b2c7af53034f77a8d415';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
