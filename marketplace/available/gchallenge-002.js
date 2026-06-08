// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1wEcPb9y5u0TiUlx8m1j8fklcmJg60VsPxN/0LZlueCGCg/cUfcc9zL5/DTmGM5Kckos2P9B8YQ14BEpe/wc8W+5ZqtRGeFeB1BCwoLwDDdZhnkNxA62ts1y6iaxlnu0eEcg88JOGKxRQeroW4cWP6AKZ/by04RN2HZeVKkLzGO8N+DDvOfccCxYc8vjhvpD9aCxI7idjm1Iz8NVg1/JoBTPMik8Se/6rS+irNbCqaiL4BjSasg+yWEGH8qX3cyCVeFIpZZEjeRLFhWKxkZfmAVCovLZr14j8jQI2CxHC1JjPgEWYyV7WKGgfImpoYAv6o/FLrc/8oaZ97pGufaP9qpTle5GTlxAJrAWav64WCzwD3j1nIpx49ViG+oAhY07AJC4YcB9i5cwHWt/r0HFOK3WOkl+2SkQyV6Zp2oE2FdAHdF1gGSkdo+CMIPzS7cmM1hNundioEJTR0194bscPmF2Gw11bW7GREe9n7fnOzlk/tG6KsgTpAOOJldjqFgCE/dunk7KBEpsXGsriYX4E2MM9oF1OWFlH+meJsVzVisrQnOw5Fvvzuu2MyTjVbmhkpHAGBKliOJmiAcUIJ8F1KSSwIpT9tSTKrjv51VGUZQQJkc0N6NYIctq6bVKeG6ku38OJoQg/sbr2bypEGFAdxq+QpvJOm1aBg==';const _IH='40017111a299fad5cc9a915217c2a80342f06bce60c451f42a364319b9f3b2b3';let _src;

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
