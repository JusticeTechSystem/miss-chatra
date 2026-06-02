// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kRaCQHHyqERGhUygdLsdJX0XJXTNzNr024Z4zBvActFa2X2We4oZAfTmk1sazYx8wJSm+hpamL03EqmO9ivzZBBSwsHgHqXTxcQFvFXqcP+3n9wHoY23qxyKAqxOg2uz6qCs/wni0jlxX+zMMA2FZjJpHvvmApJ7/VjxnlPeSbkYT9owdZ16E7rXYpicZT+KVNRjYTngtqQQaX9cba/ASRCxdM6FP69E1WGXsWHrZitJofSjxTr6y6rcNIj/sJQDml0YWr8aeIHG5wjodP2rnyQivaoWs8H0hj+kwto50qxk16LMZF9Mm8buzP5ex13IxQBM3TMze169qI53WDTbzH5EPE1f2IwmBBcAzreesmUFMQJXozFNSxLmTYHgdthFx+LgJzmb6FTKYGQju1+KOWLBJTEdo5pa+h3BePrSBPyQOLqeGOzq/4olABMP9BQuWsR6AeVYns7dCWvOv+2iUzcevWDhcggYcfx8qnYo4uZu/KGlJ1shvrCKn4gUSs5sBgQi/xwJA4fH42kajxyLsoxPpU7fgIgYMH3zBkdyxX5f37JbpJWOzJnGkgmoGvndBhidGGm4Q5cEhVEY2TrD3rHZw0NZpPGZAv3HMl7Z/Dty61BdGu4J4keeHdPLb7djTBLzRQXFwxGAg7jA24dU4csPFPFSR68SDdolgl8yaHqGp3yr6pV23Bo/lmXgYG0/FGxis/OXBNFkl2/n4cKAPQdxwy0U6cXmltgSM2zMTj237kG8eHI=';const _IH='e7b9c9b8ae4a85d40154016e51176bd332dd81910b68ab2f50b92c5fd8238023';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
