// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rHfz9rOop6XNFnTIFXJpbUUd+RSV210ZQVMwdodw3kcdWoW9ZzrDAtxr2ebd50LGR05MGu8AuLSIQOa8CZ7nfmS+2LQauN5dz5jFPQWLnVLpLmmVnK0j90hTrKrqZvAFsHmi6GQOEw0IpXMEijtRNrz2s2FwfVCqyNMSk61FswLkB+nRAbRjXzxjJ0FaMzYpEz+qH9ayTjCgiKsRrzB980ZG5OPFUx64AKkQAw7Y162Zr99JLixNswJSQKHzSP+mr3Z5+W62uxozp4nSFT6lMvxL3259DNu2Qi8sYVbBLL9Q/YeTf9AkO+PBzoTKU2LAzrqpzbKREnZoU+efd2rGk1bEz8Wl81wk4tO7QkCRIcVP5PsIZ8RfOTB5BndQOZQPycizYjzSxODLS7mWCmT6Ukftd/gyYK1xpLkBbZPJMxU6A537mCYoAKIy3rZGNpLf8j9veoC6fF0xz/TI3nGL75zObiXF7afJN3N1RQvzZUEX7C72Ke1t6xDDaHPfTCQr0nFyKMOoHKqLx1JSctiNV/Rx+7Rut0ZmNKywAwv+tnfM5bz26OJCknv6wGCUOr+kfDCgr3XRfUNnj57jCqcNfi4C8fFpNY5/pK6v8kXe5KKYJnkdJyyDIZWIQfW4KOb+0dhijQUB6S8XXj+ZDA1YD7mYgjLXC9IrkkiVO+115dwR98qoocdZHBYww+Xb7+um1+Nca1wTJ3ZJIzCwFxXWFtf5l0BUZMQ88oneoFi0tyk6tjzSvuIIINnvAlck7rGHbuiKTm6rMToc56Ezy8T2Xj3ZMBvRyDzfXLsLau/YYh4SH8ECq4sHacJajp9YEKby2fdnQu4+b0zH51wI1NLLMG9S+rr8i4ziybtSrlfnb1cig1Z1wB7ItEyBF/hLj1kBEGbSiYEgkugb9gd81AxY5YpsA/lsBndmItg/aYm89jL26plYHaioj49+ZOlSXIiVxQkN7gcobpCJGMKBsiKPbcLNCU3zqYbPNCrS6CPnECv0+pEfU43gnSfGhHLkNCpy0g==';const _IH='6d1b0f0db73b8fd4e2713f9c9625a9918f1ca0c36cc88f6e76769b21f14a72c8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
