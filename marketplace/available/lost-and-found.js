// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wUYMhzrKHIahEYc0iMBF8pGVbPQ9peQqI2c7qf1PDBB98gAXAl5y69uZasXXrdxoaAcUIPvAvuZxU42YtfN+cXqeQWhrjIHtRwbXH4H3qHrDN0g2ZqAGut9F8X1+LJEpHmjSAgk3BCd4LIu6qkl1mEIqYq/JLy9IltB9f1kQh8GKMkzsX3NnQ3GMJS6ytPxOp1m2PKTd2bAlv8UXAFJNwPRIqgDy1o+0HzERIOwDdq6anOuErGbQ0GH6xhaNCvosyEI196P/adLiBJhQiuZoQI7DnOa1FKQLC1iWo/fviA44SsHzKPXy8Kobr/y3MntEMtRyOrcl33rFV73WB6BSp0vAsFjqJr18eJYFLQADnI7wt6+gPppwRF5XCuQTVYQIB0d/wTImc3ZsuzWHDR6+C1irGQhAx3UaPUhZ2fEHTewLGXUer1WJ2PIc7dzBoSiCOsi5gVX38jqwHg7ODkthTsBavRFCkFAU+WCJJbHvzNp3NiFMq8BW8W1oPiV/1GNbfzKrWru+yM/UbYr4MN2l8wcmtZBWUpBRxW9h6KhNYi7hxyQiEbQz0MzAZsVo4hnmQOREHX8OQwVE';const _IH='f347b92791f2dcf2b55ef80ecc1ee20f4b3369c28720ffb122f1e311959c5964';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
