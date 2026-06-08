// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SNl3ioJONNDMe+/pTaWDjri0pPn1q8ruuthejdPeq1uK3tVRJUmT8BPoznMPFCuCSP9Fua1/ZjuYy+M2ZuLRXCsyfFCMop4oRz6wKxqg7iLlG9K0xrkB+oj4AehbC/h5mJ6e/zdaL9r3aQTGfKSiKSy9BKlpqFcds4+JW2To33yNjbKZZlTW3uUPMCRvCcOQAlwKgyt7m6JfW+tFoHit8P3C6Y7c82RUP1HJtp8JBhRZlr/QmTZuEjzkTsjnDlTQmUEuCW35YN2U2S2s1XKbOfofwM3sP54o4lISm3BJyIcnY1blOH9ItSHJSDyMxrh4WskjonQFziSvNUrSDiNBphqiByx0+13zBRJ9dO6w5kaSV7BxKV6p1ix4lVrxsU+UNFjGo/+mFdcZwzOKIgZmC5P69D07+Y4SVtaiWrfx9nE+kVtR9wCuy9HHGt1kObFKomLQx6Bn9Koz+ZnGI5ixezNHc9IpY/xrpdoEvKC/gcGzx6vKVB8dPWLkj+0cyQNDg3BAZhn6yE7xISJuAeTrPdmoCotxQne9LZ1ICKufyEqeMW5xrryoqVrgWaM1O5/hm8E4zUO0u1EOOGqJiPYuwfTOsyS3dXg/jkt/fRoetd72UBzUbVpZgid0jZ7t31kj11KZoyZGpCD/dRxBCo6ZIfwFF7qkeq/meiGrV6U9nJBxR5j+YJuWrgfkL2TwgDInzqty9aP7DcBPESOyx2+MB0uLeNZUlG1XSwS1FN8g1m7NU7/IU1JhaP69fFuevLzTVf4qyRn78MX8QeZJvJUNOL/nkDAGNOQNPpGyyy7mrOCA40Z2jj2hAtBZCyI6VHp3KSJ8VSOLfOqxv/+/0XQ2xBkQ15eEz6N/JUcemkpHkQW3Xj+DHIz0WIaLhCH+KXhV8JGZpYktakQbDVfX6ZK3iCatwJhGfFhnKtVbeW8VmP8fwlxsbDDUJTaspUaVWTuITYHCFCvhriB9cvq4rNY8iNhs8+cZ9ihuAWnAS0oMfCCRUxC84hU+OIXDSP1CCdymh5WreSlAWcxvX5WfP0duTPdWVl4arwDDgYO33I7E3bu2aNgbY+kMoo4icRudSLmqCIbtNwqejbSmNyY90//aZzXwhiXUpDjs0TJOXsqLph0Dg0wHOnUjFi5IEiK0V4WtQP4zYWVbmJnIkpjPx8CX98EB726DN3qGF3FCyuP9C9YYssEoUYqwIXsRHZcBRBJjtOvRX2mz7AAvbBKPrVAOjiRGyfFGG3dj+eKA2iAGoDGq1wcLBME8KXtC9d1MJPo7gkG/kp+AVfJitYmc6naOLFHLIKtip+hexxfmaCn/eu6BIDvz4HK3HFYNV/UZ2EdIX1Ej7rD+T/SCuuuWjy32mhmBZc86c4lpKjXwkMyO';const _IH='c2cd9419e995ead27d80e17b59692594a3b68000a9239aab177432fb1effd4fd';let _src;

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
