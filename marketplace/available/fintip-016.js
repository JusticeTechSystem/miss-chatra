// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwTW9yxuSraKTNJ7DY2rSkfj0uM02LxEZYYr/lR0SncNF3rq9QzVSn6jTNqPCLzEqqVyBI4toCccLRFoHEM5KZrKCAO/9Bm9t6gwMqAJXfQ+Y8Fwrh0TJVdklU6471UeK1YL6Kxi2K1CG0lXKXYpi+LjkxglSVoz5/KPQVtRgg0kzTw8Ars0ndAMDSIDAqpiO6t6/He8e7UBdWw13+xn+fDvzwQZF5zOAY1F8l1TVh+muM7u51JowlOgHUU5aGUQBVBJtoXFjttNcPVRE8LnuB+n7nP8qbmoZACX816kQ/t7mv2KLnFReMLESHuvKVHNNkTFSvGIrRYhO9aJ6ycKmiNGtfu6YfYHi+CBNH3fxOM/S2hT1No11GD5G/k+qhEt2nNzURn/UTr7p6hlR1jL3og9PiJd4R7Zqm5uGFBs9WAH5hPhLVnyd6lRVdKx4pJo3pILqkKb21e4oAimg7osZq8hqthTUSmEnCVkx8un+lVOr2C/yIpeZ8vLlXbwHMMDS8Sm38JhdrbBzEJKfcHgCyGX8P12yWQ71Q85RbiRoWBqixqYYWCmclxbM2zoeYTTOg2YPDNqwPJSjwJkqzESWrHGqyJXfdM72rn1hDFPN4oypPgLypV/xl9BWFWNhZ+bDYRV44xsYjTuwBDPBkZGssoIdRl/3bVCng2KveAdGeaD3FWzsefRY+ZJe3NY+ro0YSzmslDUea+pLqMCNIxU63jWIUq4Yvy1qgJfG7H/QihJ11W962ilSRJ6f3VHETgcbAB7gdKeC//r9SWJG38pFIwZ7oG/sPXV7c9XrelL6vZf3L3ZczrlXseTYb52+U3Qf2sRiS7eQlmza/XN9lS4CQ3V1UTJxtkxlVx/Ofl5Y4yBb2THRJnMZbSJXHgtQMHKJ40MeR1sSHHwsMqXVCXfg4Sc5zX4LH36wi6/urKOh4jba273DTZxVPBuJ/ullf1ILAGCK8QuDTGLPZQYED0yo9HcOYeZC6eMbzaZYss8649tNH1DDXdoTtxgVOqL1eHHkBrq3ficDNi53rwSLFz9pTYdemjpHbkM4ITJsL5upyi8p0A=';const _IH='91b5cb00fc2e6da32ab007ef11727095e390dbaf9b842b76469c189d7a15618e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
